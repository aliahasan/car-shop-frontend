import {
  Car,
  ClipboardList,
  Cog,
  Home,
  LayoutDashboard,
  PlusCircle,
  Settings,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: <Home size={20} />,
    },
    {
      label: "DashBoard",
      href: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      exact: true,
    },

    {
      label: "Add-Car",
      href: "/dashboard/add-car",
      icon: <PlusCircle size={20} />,
    },
    { label: "All-Cars", href: "/dashboard/all-cars", icon: <Car size={20} /> },
    {
      label: "All-Service",
      href: "/dashboard/all-service",
      icon: <Cog size={20} />,
    },
    {
      label: "Add-Service",
      href: "/dashboard/add-service",
      icon: <Cog size={20} />,
    },

    {
      label: "All-Orders",
      href: "/dashboard/all-orders",
      icon: <ClipboardList size={20} />,
    },
    {
      label: "All-Users",
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

export default AdminMenu;
