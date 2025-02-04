/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/mycomponents/layout/Loading";
import { selectedUser } from "@/redux/features/auth/authSlice";
import {
  useCancelOrderMutation,
  useGetMyAllOrdersQuery,
} from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import PageTitle from "@/shared/PageTitle";
import toast from "react-hot-toast";
import MyOrderTable from "./MyOrderTable";

const MyOrders = () => {
  const user = useAppSelector(selectedUser);
  const email = user?.email;
  const {
    data: myOrder,
    isLoading,
    isFetching,
  } = useGetMyAllOrdersQuery(email, {
    refetchOnMountOrArgChange: true,
  });
  const orders = myOrder?.data;

  const [cancelOrder] = useCancelOrderMutation();

  if (isLoading) {
    return <Loading />;
  }
  if (isFetching) {
    return <Loading />;
  }

  const handleCancelOrder = async (orderId: string) => {
    const toastId = toast.loading("order is cancelling..");
    try {
      const res = await cancelOrder(orderId).unwrap();
      if (res?.success || res.data?.success) {
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
    <>
      <PageTitle title="User-orders" />
      <div className="container mx-auto overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">My Orders</h1>
        </div>
        <MyOrderTable orders={orders} onCancel={handleCancelOrder} />
      </div>
    </>
  );
};

export default MyOrders;
