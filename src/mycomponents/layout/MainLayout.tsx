import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Header/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-screen-2xl mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
