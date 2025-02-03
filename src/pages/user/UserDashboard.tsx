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

const UserDashboard = () => {
  // Monthly expense data
  const expenseData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Expenses",
        data: [500, 650, 700, 620, 800, 750, 900],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
        text: "Monthly Expense Statistics",
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold pb-4 text-white">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Expenses */}
        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-red-500">$1,23400</p>
          </CardContent>
        </Card>

        {/* Total Income */}
        <Card>
          <CardHeader>
            <CardTitle>Total Cost This Month</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-500">$2,5000</p>
          </CardContent>
        </Card>

        {/* Savings */}
        <Card>
          <CardHeader>
            <CardTitle>Discount</CardTitle>
            <CardDescription>Got total discount</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-500">$1,266</p>
          </CardContent>
        </Card>
      </div>

      {/* Expense Chart */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
            <CardDescription>Expense trends over time</CardDescription>
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
  );
};

export default UserDashboard;
