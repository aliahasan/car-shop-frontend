import AdminMenu from "@/pages/admin/AdminMenu";
import UserMenu from "@/pages/user/userMenu";
import { selectedUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";

const Sidebar = () => {
  const user = useAppSelector(selectedUser);
  const role = user?.role;
  return (
    <div className="fixed inset-y-0 left-0 w-72 bg-[#0C0A09] text-white shadow-lg  border-r overflow-y-auto">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      </div>

      <nav className="space-y-2">
        {role === "admin" ? <AdminMenu /> : <UserMenu />}
      </nav>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>© 2024 Your Company</p>
      </div>
    </div>
  );
};

export default Sidebar;
