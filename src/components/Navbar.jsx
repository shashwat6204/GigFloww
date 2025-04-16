import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-blue-600">Gigfloww</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-blue-500 transition"
            >
              Gigs <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                <Link to="/gigs" className="block px-4 py-2 hover:bg-gray-100">All Gigs</Link>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Interns</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Entry-Level</a>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <Link to="/" className="block">Home</Link>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full justify-between"
          >
            Gigs <ChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="pl-4 space-y-1">
              <Link to="/gigs" className="block">All Gigs</Link>
              <a href="#" className="block">Interns</a>
              <a href="#" className="block">Entry-Level</a>
            </div>
          )}
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
