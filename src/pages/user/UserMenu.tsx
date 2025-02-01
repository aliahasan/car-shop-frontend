import { Card } from "@/components/ui/card";
import { LogOut, ShoppingBag, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const links = [
    {
      title: "Profile",
      path: "/dashboard/my-profile",
      icon: <User size={20} />,
    },
    {
      title: "My Orders",
      path: "/dashboard/my-orders",
      icon: <ShoppingBag size={20} />,
    },
    { title: "Logout", path: "/logout", icon: <LogOut size={20} /> },
  ];

  return (
    <Card className="p-4 w-full max-w-xs">
      <nav className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {link.icon}
            <span>{link.title}</span>
          </NavLink>
        ))}
      </nav>
    </Card>
  );
};

export default UserMenu;
