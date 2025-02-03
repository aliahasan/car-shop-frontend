import {
  Car,
  ClipboardList,
  PlusCircle,
  Settings,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const links = [
    {
      label: "Add Car",
      href: "/dashboard/add-car",
      icon: <PlusCircle size={20} />,
    },
    { label: "All Cars", href: "/dashboard/all-cars", icon: <Car size={20} /> },
    {
      label: "All Orders",
      href: "/dashboard/all-orders",
      icon: <ClipboardList size={20} />,
    },
    {
      label: "All Users",
      href: "/dashboard/all-users",
      icon: <Users size={20} />,
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

export default AdminMenu;
