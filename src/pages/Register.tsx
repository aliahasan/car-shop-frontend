/* eslint-disable @typescript-eslint/no-explicit-any */
import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating account...");
    try {
      const res = await registerUser(data).unwrap();
      if (res?.success || res?.data?.success) {
        toast.success("Registration successful", { id: toastId });
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.", { id: toastId });
      }
    } catch (error: any) {
      if (error.data && error.data.message) {
        const errorMessage = error.data.message || "Failed to register";
        toast.error(errorMessage, { id: toastId });
      } else {
        toast.error("Failed to register", { id: toastId });
      }
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-white text-center text-2xl font-bold tracking-tight">
          Register your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <RHForm onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="space-y-2 text-my-text_clr">
            <RHInput
              type="text"
              name="name"
              label="Your name"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mt-4 space-y-2 text-my-text_clr">
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

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-my-btn_clr px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isLoading ? "Please wait..." : "Register"}
            </button>
          </div>
        </RHForm>

        {/* Login Link */}
        <div className="text-white">
          <p className="mt-4 text-sm text-center">
            Already have an account? Please{" "}
            <Link
              to="/login"
              className="text-my-btn_clr underline underline-offset-4"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
