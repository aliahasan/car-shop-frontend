import Loading from "@/mycomponents/layout/Loading";
import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";

const AllService = () => {
  const { data: serviceData, isLoading } = useGetAllServiceQuery(undefined);
  const services = serviceData?.data;
  console.log(services);
  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <div></div>
    </div>
  );
};

export default AllService;
