import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetUserMetaQuery } from "@/redux/features/user/userApi";
import PageTitle from "@/shared/PageTitle";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserDashboard = () => {
  // Fetch user meta data
  const { data, isLoading } = useGetUserMetaQuery(undefined);
  const userMeta = data?.data;

  // Extract dynamic data
  const totalCost = userMeta?.totalCost ?? 0;
  const totalOrders = userMeta?.totalOrders ?? 0;
  const orderInfo = userMeta?.orderInfo || [];

  // Count different order statuses dynamically
  const orderStatusCounts = orderInfo.reduce(
    (acc: Record<string, number>, order: { status: string; total: number }) => {
      acc[order.status] = (acc[order.status] || 0) + order.total;
      return acc;
    },
    {}
  );

  // Prepare data for the chart
  const labels = Object.keys(orderStatusCounts); // ["accepted", "pending"]
  const orderCounts = Object.values(orderStatusCounts); // [1, 1]

  const expenseData = {
    labels,
    datasets: [
      {
        label: "Order Status Count",
        data: orderCounts,
        backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Order Status Statistics" },
    },
  };

  if (isLoading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <>
      <PageTitle title="User Dashboard" />
      <div>
        <h1 className="text-2xl font-bold pb-4 text-my-text_clr">
          User Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Total Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
              <CardDescription>All time orders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-red-500">{totalOrders}</p>
            </CardContent>
          </Card>

          {/* Total Cost */}
          <Card>
            <CardHeader>
              <CardTitle>Total Cost</CardTitle>
              <CardDescription>Overall spending</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-green-500">${totalCost}</p>
            </CardContent>
          </Card>

          {/* Pending & Accepted Orders */}
          {labels.map((status, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {status.charAt(0).toUpperCase() + status.slice(1)} Orders
                </CardTitle>
                <CardDescription>
                  {status === "accepted" ? "Completed" : "Awaiting Approval"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-blue-500">
                  {orderStatusCounts[status]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Status Chart */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Status Breakdown</CardTitle>
              <CardDescription>Overview of orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                <div className="h-64 sm:h-80 md:h-96">
                  <Bar data={expenseData} options={options} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
