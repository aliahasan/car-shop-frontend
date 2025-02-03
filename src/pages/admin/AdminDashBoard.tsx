import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const AdminDashBoard = () => {
  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Cars Sold",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Car Sales",
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold pb-4 text-white">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$12,345</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Cars Sold</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">45</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Customers</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">23</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Car Sales</CardTitle>
            <CardDescription>Sales data for the last 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Chart container with responsive width */}
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
