/* eslint-disable @typescript-eslint/no-explicit-any */
import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { logout, selectedUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import PageTitle from "@/shared/PageTitle";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const { reset } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const user = useAppSelector(selectedUser);
  const email = user?.email;

  const [updatePassword, { isLoading }] = useChangePasswordMutation();
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data?.newPassword !== data?.confirmPassword) {
      return toast.error("Password not matched");
    }

    const id = toast.loading("please wait..");
    const newPasswordData = {
      oldPassword: data?.oldPassword,
      newPassword: data?.newPassword,
      email: email,
    };
    console.log(newPasswordData);

    try {
      const res = await updatePassword(newPasswordData).unwrap();
      reset();
      dispatch(logout());
      navigate("/login");
      if (res?.success || res?.data?.success) {
        toast.success("Password updated successfully", { id });
      }
    } catch (error: any) {
      if (error.data && error.data.error) {
        const errorMessage = error.data.message || "Failed to update password";
        toast.error(errorMessage, { id });
      } else {
        toast.error("Failed to update password", { id });
      }
    }
  };

  return (
    <>
      <PageTitle title={`${user?.role as string} | Setting`} />
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Password
        </h2>
        <RHForm onSubmit={handleSubmit}>
          {/* Old Password */}
          <div className="mb-4 relative">
            <RHInput
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              label="Old Password"
              required
            />
            <span
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-xl"
            >
              {showOldPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>

          {/* New Password */}
          <div className="mb-4 relative">
            <RHInput
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              label="New Password"
              required
            />
            <span
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-xl"
            >
              {showNewPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>

          {/* Confirm New Password */}
          <div className="mb-4 relative">
            <RHInput
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              label="Confirm New Password"
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-xl"
            >
              {showConfirmPassword ? <Eye /> : <EyeOff />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-2 bg-my-btn_clr text-white font-semibold rounded-md"
          >
            Update Password
          </button>
        </RHForm>
      </div>
    </>
  );
};

export default Setting;
