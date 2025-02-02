import AdminDashBoard from "@/pages/admin/AdminDashBoard";
import UserDashboard from "@/pages/user/UserDashboard";
import {
  selectCurrentToken,
  selectedUser,
} from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectedUser);
  const token = useAppSelector(selectCurrentToken);
  const role = user?.role;
  if (!token || !user) {
    navigate("/login");
  }
  return (
    <div className="p-4">
      <>
        {role && role === "admin" && <AdminDashBoard />}
        {role && role === "user" && <UserDashboard />}
      </>
    </div>
  );
};

export default Overview;
