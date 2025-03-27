/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Loading from "@/mycomponents/layout/Loading";
import { selectedUser } from "@/redux/features/auth/authSlice";
import {
  useGetMyselfQuery,
  useUpdateMyselfMutation,
} from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import PageTitle from "@/shared/PageTitle";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
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
    return <Loading />;
  }

  return (
    <>
      <PageTitle title={`${user?.role as string} | Profile`} />
      <div className="max-w-7xl mx-auto p-6 bg-white shadow rounded text-my-text_clr">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-6 border-b">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>{me?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-semibold truncate">
                {me?.name || "User"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base truncate">
                {me?.email}
              </p>
              <span className="inline-block bg-blue-100 text-blue-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md mt-1 uppercase">
                {me?.role}
              </span>
            </div>
          </div>
          <div className="w-full sm:w-auto  mt-4 sm:mt-0">
            <UpdateProfileDialog user={me} onSave={handleSave} />
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="shadow-none">
            <CardContent className="p-4 space-y-2">
              <Mail className="text-my-text_clr" />
              <p className="font-semibold">Email</p>
              <p className="text-sm sm:text-base break-all">{me?.email}</p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardContent className="p-4 space-y-2">
              <Phone className="text-my-text_clr" />
              <p className="font-semibold">Phone</p>
              <p className="text-sm sm:text-base">{me?.phone || "N/A"}</p>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardContent className="p-4 space-y-2">
              <MapPin className="text-my-text_clr" />
              <p className="font-semibold">Address</p>
              <p className="text-sm sm:text-base">{me?.address || "N/A"}</p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-3 shadow-none">
            <CardContent className="p-4 space-y-2">
              <Calendar className="text-my-text_clr" />
              <p className="font-semibold">Member Since</p>
              <p className="text-sm sm:text-base">
                {new Date(me?.createdAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
