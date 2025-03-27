/* eslint-disable @typescript-eslint/no-explicit-any */
import registerImage from "@/assets/register.png";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="flex flex-col md:flex-row h-screen w-full items-center justify-center  md:p-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <img src={registerImage} alt="registerImage" className="w-96" />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded-lg">
          <CardHeader>
            <CardTitle>
              <h1 className="text-2xl text-center ">Register an Account</h1>
            </CardTitle>
          </CardHeader>
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
                label="Email"
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
            <div className="my-6">
              <Button type="submit" className="w-full bg-my-btn_clr ">
                {isLoading ? "Please wait..." : "Register"}
              </Button>
            </div>
          </RHForm>

          {/* Login Link */}
          <div className="text-my-text_clr">
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
    </div>
  );
};

export default Register;
