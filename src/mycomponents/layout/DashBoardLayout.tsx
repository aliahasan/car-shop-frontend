import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 ml-72 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
// fixed inset-y-0 left-0 w-72 bg-[#0C0A09] text-white shadow-lg  border-r overflow-y-auto
