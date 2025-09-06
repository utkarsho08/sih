import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#766ABB] shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          Internova
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { to: "/", label: "Home" },
            { to: "/form", label: "Create Resume" },
            { to: "/resume", label: "ATS Checker" },
            { to: "/career", label: "Career Advice" }, // ✅ New
            { to: "/internships", label: "Internships" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white hover:text-gray-200 relative after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left"
            >
              {link.label}
            </Link>
          ))}

          {/* Login Button */}
          <Link
            to="/login"
            className="ml-6 px-4 py-2 bg-white text-[#766ABB] font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-2">
          {[
            { to: "/", label: "Home" },
            { to: "/form", label: "Create Resume" },
            { to: "/resume", label: "ATS Checker" },
            { to: "/career", label: "Career Advice" }, // ✅ New
            { to: "/internships", label: "Internships" },
            { to: "/login", label: "Login" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-white hover:text-gray-200 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;