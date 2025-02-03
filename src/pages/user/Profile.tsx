/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { selectedUser } from "@/redux/features/auth/authSlice";
import {
  useGetMyselfQuery,
  useUpdateMyselfMutation,
} from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import PageTitle from "@/shared/PageTitle";
import toast from "react-hot-toast";
import { UpdateProfileDialog } from "./updateProfileDailog";

const Profile = () => {
  const user = useAppSelector(selectedUser);
  const email = user?.email;
  const { data: myself, isLoading } = useGetMyselfQuery(email, {
    refetchOnMountOrArgChange: true,
  });
  const me = myself?.data;

  const [updateUser] = useUpdateMyselfMutation();

  const handleSave = async (data: Record<string, unknown>) => {
    const id = toast.loading("Updating profile...");
    const updatedData = {
      ...data,
      email: user?.email,
    };

    try {
      const response = await updateUser(updatedData).unwrap();
      if (response?.success || response?.data?.success) {
        toast.success("Profile updated successfully", { id });
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update", { id });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 ml-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <>
      <PageTitle title={`${user?.role as string} | Profile`} />
      <div className="flex justify-center items-center p-6 ">
        <Card className="w-full max-w-3xl shadow-lg p-6">
          <CardHeader className="flex flex-col items-center text-center">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>{me?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <CardTitle className="mt-4 text-2xl font-bold">
              {me?.name || "User"}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {me?.email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <p className="text-gray-900 font-semibold">
                  {me?.name || "N/A"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  City
                </label>
                <p className="text-gray-900 font-semibold">
                  {me?.city || "N/A"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Address
                </label>
                <p className="text-gray-900 font-semibold">
                  {me?.address || "N/A"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <p className="text-gray-900 font-semibold">
                  {me?.phone || "N/A"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Role
                </label>
                <p className="text-gray-900 font-semibold">{me?.role}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Account Created
                </label>
                <p className="text-gray-900 font-semibold">
                  {new Date(me?.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Last Updated
                </label>
                <p className="text-gray-900 font-semibold">
                  {new Date(me?.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            {/* Update Button */}
            <div className="flex justify-center mt-6">
              <UpdateProfileDialog user={me} onSave={handleSave} />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Profile;
