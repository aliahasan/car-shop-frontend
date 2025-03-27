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
        className={`fixed inset-y-0 left-0 w-72  bg-gray-100 text-white shadow-lg overflow-y-auto border-r transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        <nav className="sticky top-0 z-20 lg:left-72 backdrop-blur-md border-b">
          <div className="flex justify-between lg:justify-end items-center px-2 lg:px-6 py-2 lg:py-4">
            <Link to="/" className="lg:hidden">
              <h1 className="text-2xl font-bold text-my-btn_clr">RideHaven</h1>
            </Link>

            <div className="flex items-center ">
              <div className="mr-1 lg:mr-2">{user && <UserMenu />}</div>
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className=" p-2 rounded-lg focus:outline-none lg:hidden"
              >
                {isSidebarOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>

        {/* Outlet for nested routes */}
        <div className="overflow-hidden px-2 py-4  lg-py-2">
          <Outlet />
        </div>
      </div>

      {/* Backdrop for Mobile/Tablet */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
