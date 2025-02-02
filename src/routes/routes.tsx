import DashBoardLayout from "@/mycomponents/layout/DashBoardLayout";
import MainLayout from "@/mycomponents/layout/MainLayout";
import About from "@/pages/About/About";
import AddCar from "@/pages/admin/AddCar";
import AllCars from "@/pages/admin/AllCars";
import AllOrder from "@/pages/admin/AllOrder";
import AllUsers from "@/pages/admin/AllUsers";
import AllProducts from "@/pages/allProducts/AllProducts";
import CarDetails from "@/pages/allProducts/CarDetails";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/home/Home";
import Login from "@/pages/Login";
import VerifyOrder from "@/pages/order/VerifyOrder";
import Register from "@/pages/Register";
import MyOrders from "@/pages/user/MyOrders";
import Profile from "@/pages/user/Profile";
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
