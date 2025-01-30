import { AlertCircle } from "lucide-react"; // Import an icon from lucide-react

const Error = ({ errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center  p-4 overflow-hidden">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>

        {/* Error Message */}
        <h1 className="mt-6 text-red-400 text-2xl font-bold">
          Oops! Something went wrong
        </h1>
        <p className="mt-2 text-gray-600">
          {errorMessage ||
            "We encountered an issue while fetching the data. Please try again."}
        </p>
      </div>
    </div>
  );
};

export default Error;
