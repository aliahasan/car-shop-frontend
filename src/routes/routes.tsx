import DashBoardLayout from "@/mycomponents/layout/DashBoardLayout";
import MainLayout from "@/mycomponents/layout/MainLayout";
import About from "@/pages/About/About";
import AddCar from "@/pages/admin/AddCar";
import AllCars from "@/pages/admin/AllCars";
import AllOrder from "@/pages/admin/AllOrder";
import AllUsers from "@/pages/admin/AllUsers";
import AddService from "@/pages/admin/Service/AddService";
import AllService from "@/pages/admin/Service/AllServices";
import AllProducts from "@/pages/allProducts/AllProducts";
import CarDetails from "@/pages/allProducts/CarDetails";

import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/home/Home";
import LoginForm from "@/pages/Login/LoginForm";
import VerifyOrder from "@/pages/order/VerifyOrder";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Register from "@/pages/Register/Register";
import ServicePage from "@/pages/Service";
import ServiceDetailsPage from "@/pages/Service/ServiceDetails";
import TermsAndConditions from "@/pages/TermsAndCondition";
import MyOrders from "@/pages/user/MyOrders";
import Profile from "@/pages/user/Profile";
import Setting from "@/pages/user/Setting";
import Overview from "@/shared/Overview";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/car/:id",
        element: <CarDetails />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetailsPage />,
      },
      {
        path: "/order/verify",
        element: (
          <PrivateRoute>
            <VerifyOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms-condition",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />,
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        ),
      },
      {
        path: "all-orders",
        element: (
          <PrivateRoute>
            <AllOrder />,
          </PrivateRoute>
        ),
      },
      {
        path: "all-cars",
        element: (
          <PrivateRoute>
            <AllCars />,
          </PrivateRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AllUsers />,
          </PrivateRoute>
        ),
      },
      {
        path: "add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "all-service",
        element: (
          <PrivateRoute>
            <AllService />
          </PrivateRoute>
        ),
      },
      {
        path: "add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      //use items
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />,
          </PrivateRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "setting",
        element: (
          <PrivateRoute>
            <Setting />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
