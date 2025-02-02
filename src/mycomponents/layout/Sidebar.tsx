import AdminMenu from "@/pages/admin/AdminMenu";
import UserMenu from "@/pages/user/UserMenu";
import { selectedUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const user = useAppSelector(selectedUser);
  const role = user?.role;

  return (
    <div className="h-screen flex flex-col bg-[#0C0A09] text-white border-r border-gray-700">
      {/* Logo */}
      <div className="px-4 py-3 border-b border-gray-700">
        <Link to="/">
          <h1 className="text-2xl font-bold text-my-btn_clr">RideHaven</h1>
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-2">
          {role === "admin" ? <AdminMenu /> : <UserMenu />}
        </nav>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Sidebar;
