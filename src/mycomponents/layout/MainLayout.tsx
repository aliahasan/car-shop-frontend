import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Header/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
