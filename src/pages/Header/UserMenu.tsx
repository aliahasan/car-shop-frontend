import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logout } from "@/redux/features/auth/authSlice";
import { clearCart } from "@/redux/features/cart/CartSlice";
import { useAppDispatch } from "@/redux/hook";
import { Separator } from "@radix-ui/react-separator";
import Cookies from "js-cookie";
import { User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center text-white focus:outline-none">
          <User className="h-6 w-6 text-my-text_clr" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-40 bg-white text-my-text_clr border rounded-md py-6 shadow-md">
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-100 p-2 rounded">
            <Link to="/dashboard" className=" px-2 py-1 rounded transition">
              Dashboard
            </Link>
          </div>
          <Separator />
          <Button
            onClick={handleLogout}
            className="hover:bg-red-600 hover:text-white px-2 py-1 text-left transition bg-gray-100 text-my-text_clr"
          >
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;
