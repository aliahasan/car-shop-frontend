import {
  logout,
  selectCurrentToken,
  TUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
type TPrivateRoute = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: TPrivateRoute) => {
  const token = useAppSelector(selectCurrentToken);
  let user;
  if (token) {
    user = verifyToken(token);
  }
  const dispatch = useAppDispatch();
  if (!user || (!user as unknown as TUser)?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
