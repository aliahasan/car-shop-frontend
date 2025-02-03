import { useGetAllOrdersQuery } from "@/redux/features/admin/adminApi";
import PageTitle from "@/shared/PageTitle";
import OrdersTable from "./OrdersTable";

const AllOrder = () => {
  const { data: OrdersData, isLoading } = useGetAllOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const orders = OrdersData?.data || [];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <PageTitle title="Admin | All-orders " />
      <div className="container mx-auto overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Total Orders</h1>
        </div>
        <OrdersTable orders={orders} />
      </div>
    </>
  );
};

export default AllOrder;
