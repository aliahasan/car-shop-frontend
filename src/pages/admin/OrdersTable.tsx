/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge"; // Import Badge component
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUpdateOrderStatusMutation } from "@/redux/features/admin/adminApi";
import { TOrderType } from "@/types";
import toast from "react-hot-toast";

interface OrderTableProps {
  orders: TOrderType[];
}

const OrdersTable = ({ orders }: OrderTableProps) => {
  const [updateOrder] = useUpdateOrderStatusMutation();

  const handleUpdate = async (orderId: string) => {
    const toastId = "update";
    try {
      const updateOrderPayload = {
        orderStatus: "accepted",
        orderId: orderId,
      };
      const res = await updateOrder(updateOrderPayload).unwrap();
      if (res?.success || res?.data?.success) {
        toast.success("Order updated successfully", { id: toastId });
      } else {
        toast.error("Failed to update order status", { id: toastId });
      }
    } catch (error: any) {
      if (error.data && error.data.message) {
        const errorMessage = error.data.message || "Failed updateStatus";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to update status", { id: toastId });
      }
    }
  };

  return (
    <Table className="w-full text-white">
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Customer Email</TableHead>
          <TableHead>Quantity</TableHead>
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
              <h1>{order?.user?.name}</h1>
            </TableCell>
            <TableCell>{order.user.email}</TableCell>
            <TableCell>
              {order.cars?.reduce((total, car) => total + car.quantity, 0)}
            </TableCell>
            <TableCell>${order?.totalPrice}</TableCell>
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
                  order.orderStatus === "reject"
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
                  onClick={() => handleUpdate(order._id)}
                >
                  Accept
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
