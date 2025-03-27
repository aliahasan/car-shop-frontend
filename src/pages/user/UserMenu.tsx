import { Home, Settings, ShoppingBag, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: <Home size={20} />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Home size={20} />,
      exact: true,
    },
    {
      label: "My Orders",
      href: "/dashboard/my-orders",
      icon: <ShoppingBag size={20} />,
    },
    {
      label: "Profile",
      href: "/dashboard/my-profile",
      icon: <User size={20} />,
    },
    {
      label: "Setting",
      href: "/dashboard/setting",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <nav className="flex flex-col space-y-2">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.href}
          end={link.exact}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded transition-all duration-200 ${
              isActive ? "bg-gray-300 text-gray-900" : "text-gray-700"
            }`
          }
        >
          {link.icon}
          <span className="font-medium">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default UserMenu;
