import Loading from "@/mycomponents/layout/Loading";
import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";
import ServiceTable from "./ServiceTable";

const AllService = () => {
  const { data: serviceData, isLoading } = useGetAllServiceQuery(undefined);
  const services = serviceData?.data || [];
  if (isLoading) {
    <Loading />;
  }
  return (
    <div>
      <div>
        <ServiceTable services={services} />
      </div>
    </div>
  );
};

export default AllService;
