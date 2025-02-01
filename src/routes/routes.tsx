import MainLayout from "@/mycomponents/layout/MainLayout";
import About from "@/pages/About/About";
import AllProducts from "@/pages/allProducts/AllProducts";
import CarDetails from "@/pages/allProducts/CarDetails";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/home/Home";
import Login from "@/pages/Login";
import VerifyOrder from "@/pages/order/VerifyOrder";
import Register from "@/pages/Register";
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
        element: (
          <PrivateRoute>
            <CarDetails />,
          </PrivateRoute>
        ),
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
