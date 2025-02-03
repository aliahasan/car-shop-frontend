/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectedUser } from "@/redux/features/auth/authSlice";
import {
  useCancelOrderMutation,
  useGetMyAllOrdersQuery,
} from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import toast from "react-hot-toast";
import MyOrderTable from "./MyOrderTable";

const MyOrders = () => {
  const user = useAppSelector(selectedUser);
  const email = user?.email;
  const { data: myOrder, isLoading } = useGetMyAllOrdersQuery(email, {
    refetchOnMountOrArgChange: true,
  });
  const orders = myOrder?.data;

  const [cancelOrder] = useCancelOrderMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleCancelOrder = async (orderId: string) => {
    console.log(orderId);
    const toastId = toast.loading("order is cancelling..");
    try {
      const res = await cancelOrder(orderId).unwrap();
      if (res?.success || res.data?.success) {
        console.log(res);
        toast.success("Order cancelled successfully", { id: toastId });
      } else {
        console.error("Failed to cancel order", res);
      }
    } catch (error: any) {
      if (error.data && error.data.message) {
        const errorMessage = error.data.message || "Failed to cancel order";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to cancel order", { id: toastId });
      }
    }
  };

  return (
    <div className="container mx-auto overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">My Orders</h1>
      </div>
      <MyOrderTable orders={orders} onCancel={handleCancelOrder} />
    </div>
  );
};

export default MyOrders;
