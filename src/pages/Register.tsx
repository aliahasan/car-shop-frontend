import RHForm from "@/mycomponents/form/RHForm";
import RHInput from "@/mycomponents/form/RHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-white text-center text-2xl font-bold tracking-tight">
          Register your account
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
            />
          </div>

          {/* Password Field */}
          <div className="mt-4 space-y-2 text-my-text_clr">
            <RHInput
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </RHForm>
      </div>
    </div>
  );
};

export default Register;
