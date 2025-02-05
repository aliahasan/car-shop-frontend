import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Header/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 max-w-screen-2xl mx-auto w-full px-4  overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
