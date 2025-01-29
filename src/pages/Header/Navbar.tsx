import { Menu, X } from "lucide-react"; // Icons for toggle button and user account
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo2 from "../../assets/logo2.png";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Products", href: "/all-products" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  const user = true;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // bg-[#030712]
  return (
    <nav className="bg-black sticky top-0  left-0 border-b border-gray-700">
      <div className="container mx-auto px-1 md:px-4 ">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Website Logo */}
          <Link to="/">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="logo" className="w-24" />
              <h1 className="text-white text-2xl font-bold">RideHaven</h1>
            </div>
          </Link>
          {/* Center: Navigation Links (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-16">
            {navLinks.map((item) => {
              return (
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
              );
            })}
          </div>

          {/* Right Side: User Account and Login Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {user ? (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-md font-medium text-white ${
                      isActive
                        ? "underline underline-offset-4"
                        : "hover:underline underline-offset-4"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="text-md pb-2 py-1 px-6  rounded-full bg-[#1D202A] font-medium text-white"
                >
                  Login
                </NavLink>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-md pb-2 py-2 px-4 font-medium text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Collapsible) */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-black shadow-md transform transition-transform duration-300 ease-in-out border-r border-gray-700 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            {/* Mobile Menu Links */}
            <div className="flex flex-col space-y-8 mt-16 text-center">
              {user && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-md font-medium text-white ${
                      isActive
                        ? "underline underline-offset-4"
                        : "hover:underline underline-offset-4"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              )}
              {navLinks.map((item) => {
                return (
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
                );
              })}
              <div>
                {!user && (
                  <NavLink
                    to="/login"
                    className="text-md  py-2 px-6  rounded-full bg-[#1D202A] font-medium text-white"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
