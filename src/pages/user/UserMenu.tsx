import { Settings, ShoppingBag, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const links = [
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
    <nav className="flex flex-col space-y-2 ">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.href}
          className={({ isActive }) =>
            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-my-btn_clr text-white shadow-lg"
                : "text-my-text_clr bg-[#292524]"
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
