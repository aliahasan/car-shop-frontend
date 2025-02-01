import { selectedUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/app-logo.png";
import CartSheet from "./CartSheet";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Cars", href: "/all-products" },
    { label: "About", href: "/about" },
  ];
  const user = useAppSelector(selectedUser);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky backdrop-blur-md top-0 left-0 border-b border-gray-700 z-50">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="logo" className="w-20" />
              <h1 className="text-my-btn_clr text-2xl font-bold">RideHaven</h1>
            </div>
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-16">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `text-md font-medium text-white ${
                    isActive
                      ? "underline underline-offset-4"
                      : "hover:underline underline-offset-4"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center">
            {/* Replace ShoppingBag with CartSheet */}
            <CartSheet />

            {user && <UserMenu />}

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-md pb-2 py-2 px-4 font-medium text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {!user && (
                <NavLink
                  to="/login"
                  className="text-md pb-2 py-1 px-6 rounded-full bg-my-btn_clr font-medium text-white"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-black shadow-md transform transition-transform duration-300 ease-in-out border-r border-gray-700 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex flex-col space-y-8 mt-16 text-center">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-md font-medium text-white ${
                      isActive
                        ? "underline underline-offset-4"
                        : "hover:underline underline-offset-4"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              {!user && (
                <NavLink
                  to="/login"
                  className="text-md py-2 px-6 rounded-full bg-my-btn_clr font-medium text-white"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
