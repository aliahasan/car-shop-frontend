import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Loading from "@/mycomponents/layout/Loading";
import { useGetAdminMeatQuery } from "@/redux/features/admin/metaApi";
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

type TOrder = {
  status: string;
  total: number;
};

const AdminDashBoard = () => {
  const { data, isLoading } = useGetAdminMeatQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  const metaData = data?.data;
  console.log(metaData);
  // Extract required values from metaData
  const totalRevenue = metaData?.totalRevenue || 0;
  const totalOrders = metaData?.totalOrders || 0;
  const totalCars = metaData?.totalCars || 0;
  // Count order statuses
  const pendingOrders =
    metaData?.OrdersInfo?.filter((order: TOrder) => order.status === "Pending")
      ?.length || 0;
  const completedOrders =
    metaData?.OrdersInfo?.filter(
      (order: TOrder) => order.status === "Completed"
    )?.length || 0;
  const cancelledOrders =
    metaData?.OrdersInfo?.filter(
      (order: TOrder) => order.status === "Cancelled"
    )?.length || 0;

  // Chart data using real order status counts
  const salesData = {
    labels: ["Pending", "Completed", "Cancelled"],
    datasets: [
      {
        label: "Orders Status",
        data: [pendingOrders, completedOrders, cancelledOrders],
        backgroundColor: [
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Order Status Overview" },
    },
  };

  return (
    <div>
      <PageTitle title="Admin Dashboard" />
      <h1 className="text-2xl font-bold pb-4 text-my-text_clr">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              ${totalRevenue.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalOrders}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Cars</CardTitle>
            <CardDescription>Total Cars</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalCars}</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Order Status Overview</CardTitle>
            <CardDescription>Visual breakdown of orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
              <div className="h-64 sm:h-80 md:h-96">
                <Bar data={salesData} options={options} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashBoard;
