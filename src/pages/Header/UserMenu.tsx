import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center text-white focus:outline-none">
          <User className="h-6 w-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-40 bg-black text-white border border-gray-700 rounded-md p-2 shadow-lg">
        <div className="flex flex-col space-y-2">
          <Link
            to="/dashboard"
            className="hover:bg-gray-800 px-2 py-1 rounded-md transition"
          >
            Dashboard
          </Link>
          <button className="hover:bg-red-600 px-2 py-1 rounded-md text-left transition">
            Logout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
