import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TMyOrderType } from "@/types";

interface OrderTableProps {
  orders: TMyOrderType[];
  onCancel: (orderId: string) => void;
}

const MyOrderTable = ({ orders, onCancel }: OrderTableProps) => {
  return (
    <Table className="w-full text-white">
      <TableHeader>
        <TableRow>
          <TableHead>Car Name</TableHead>
          <TableHead>Total Price</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead>Order Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order._id}>
            <TableCell>
              {order.cars.map((car) => (
                <div key={car?.car._id}>
                  <p>{car?.car.name}</p>
                  <p className="text-sm text-gray-400">
                    Quantity: {car?.quantity}
                  </p>
                </div>
              ))}
            </TableCell>
            <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                className={`px-4 py-1 text-md rounded-md text-white ${
                  order.paymentStatus === "paid"
                    ? "bg-green-500"
                    : order.paymentStatus === "cancelled"
                    ? "bg-red-500"
                    : "bg-orange-500"
                }`}
              >
                {order.paymentStatus === "paid"
                  ? "Paid"
                  : order.paymentStatus === "cancelled"
                  ? "Cancelled"
                  : "Pending"}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                className={`px-4 py-2 rounded-md text-white ${
                  order.orderStatus === "rejected"
                    ? "bg-red-500"
                    : order.orderStatus === "accepted"
                    ? "bg-green-500"
                    : "bg-orange-500"
                }`}
              >
                {order.orderStatus === "rejected"
                  ? "Canceled"
                  : order.orderStatus === "accepted"
                  ? "Confirmed"
                  : "Pending"}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  disabled={order.orderStatus === "accepted"}
                  className="bg-my-btn_clr"
                  size="default"
                  onClick={() => onCancel(order._id)}
                >
                  Cancel
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyOrderTable;
