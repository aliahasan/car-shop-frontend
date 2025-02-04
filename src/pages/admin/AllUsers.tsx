import Loading from "@/mycomponents/layout/Loading";
import { useGetAllUsersQuery } from "@/redux/features/admin/adminApi";
import PageTitle from "@/shared/PageTitle";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  const { data: allUsers, isLoading } = useGetAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const users = allUsers?.data;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <PageTitle title="Admin | All-users" />
      <div className="container mx-auto ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">All Users</h1>
        </div>
        <UsersTable users={users} />
      </div>
    </>
  );
};

export default AllUsers;
