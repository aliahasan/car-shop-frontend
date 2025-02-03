/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useBlockUserMutation } from "@/redux/features/admin/adminApi";
import { IUser } from "@/types";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";

interface IUsersProps {
  users: IUser[];
}

const UsersTable = ({ users }: IUsersProps) => {
  const [updateUserStatus] = useBlockUserMutation();

  const handleUpdate = async (userId: string, status: boolean) => {
    const updatedData = {
      userId: userId,
      isBlocked: status,
    };
    const id = toast.loading("updating status...");
    try {
      const res = await updateUserStatus(updatedData).unwrap();
      if (res?.success || res?.data?.success) {
        toast.success("user status updated successfully", { id });
      }
    } catch (error: any) {
      if (error.data && error.data.error) {
        const errorMessage = error.data.message || "Failed to update status";
        toast.error(errorMessage, { id });
      } else {
        toast.error("Failed to update status", { id });
      }
    }
  };

  return (
    <Table className="w-full text-white">
      <TableHeader>
        <TableRow>
          <TableHead>User Image</TableHead>
          <TableHead>User Name</TableHead>
          <TableHead>User Email</TableHead>
          <TableHead>User Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Update Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user: IUser) => (
          <TableRow key={user?._id}>
            <TableCell>
              {user?.image ? (
                <img
                  src={user.image}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="Default User"
                />
              )}
            </TableCell>
            <TableCell>
              <h1>{user?.name}</h1>
            </TableCell>
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.role.toUpperCase()}</TableCell>
            <TableCell>
              {user?.isBlocked ? (
                <Badge className="text-red-500 text-md">Blocked</Badge>
              ) : (
                <Badge className="text-green-500 text-md">Unblocked</Badge>
              )}
            </TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger asChild>
                  <Button>
                    <Pencil className="w-5 h-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-32 h-24" side="top">
                  <Button
                    className="w-full text-red-500 font-bold text-sm"
                    variant="ghost"
                    onClick={() => handleUpdate(user._id, true)}
                  >
                    Block
                  </Button>
                  <Button
                    className="w-full text-green-500 font-bold text-sm"
                    variant="ghost"
                    onClick={() => handleUpdate(user._id, false)}
                  >
                    Unblock
                  </Button>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
