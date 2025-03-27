import { useGetAllServiceQuery } from "@/redux/features/service/serviceApi";

const AllService = () => {
  const { data, isLoading } = useGetAllServiceQuery(undefined);
  console.log(data);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default AllService;
