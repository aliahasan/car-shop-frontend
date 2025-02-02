/* eslint-disable @typescript-eslint/no-explicit-any */
import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { clearCart } from "@/redux/features/cart/CartSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginData, { isLoading }] = useLoginMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = "login";
    try {
      const res = await loginData(data).unwrap();
      const user = verifyToken(res?.data as string);
      if (!user) {
        toast.error("Invalid credentials", { id: toastId });
        return;
      }
      toast.success("Login success", { id: toastId });
      dispatch(clearCart());
      dispatch(setUser({ user: user, token: res.data }));
      navigate("/");
    } catch (error: any) {
      if (error.data && error.data.error) {
        const errorMessage = error.data.message || "Failed to login";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to login", { id: toastId });
      }
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-white text-center text-2xl font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <RHForm onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="space-y-2 text-my-text_clr">
            <RHInput
              type="email"
              name="email"
              label="Email Address"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-2 text-my-text_clr">
            <RHInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isLoading ? "Please wait..." : "Sign in"}
            </button>
          </div>
        </RHForm>

        {/* Register Link */}
        <div className="text-white">
          <p className="mt-4 text-sm text-center">
            Don't have an account? Please{" "}
            <Link
              to="/register"
              className="text-my-btn_clr underline underline-offset-4"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
