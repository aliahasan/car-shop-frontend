import { Card } from "@/components/ui/card";
import { Car, ClipboardList, PlusCircle, Users } from "lucide-react";
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
      label: "All Users",
      href: "/dashboard/all-users",
      icon: <Users size={20} />,
    },
    {
      label: "All Orders",
      href: "/dashboard/all-orders",
      icon: <ClipboardList size={20} />,
    },
  ];

  return (
    <Card className="p-4 w-full max-w-xs">
      <nav className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.href}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </Card>
  );
};

export default AdminMenu;
