import UserMenu from "@/pages/Header/UserMenu";
import { selectedUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useAppSelector(selectedUser);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-[#0C0A09] text-white shadow-lg border-r border-gray-700 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        {/* Navbar */}
        <nav className="sticky top-0 bg-[#0C0A09] text-white  z-50 lg:left-72 backdrop-blur-md border-b lg:border-0">
          <div className="flex justify-between lg:justify-end items-center px-6 py-2 lg:py-4">
            {/* Logo on the left */}
            <Link to="/" className="lg:hidden">
              <h1 className="text-2xl font-bold text-my-btn_clr">RideHaven</h1>
            </Link>
            {/* Menu Icon on the right */}
            <div className="flex items-center ">
              {user && <UserMenu />}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-white p-2 rounded-lg focus:outline-none lg:hidden"
              >
                {isSidebarOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>

        {/* Outlet for nested routes */}
        <div className="overflow-hidden px-4 py-4 lg:px-2 lg-py-2">
          <Outlet />
        </div>
      </div>

      {/* Backdrop for Mobile/Tablet */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
