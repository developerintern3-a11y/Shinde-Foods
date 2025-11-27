import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-[#FDF2F2]/70 via-[#FBE5E5]/70 to-[#FDF2F2]/70 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo Image */}
              <div className=" p-2  transition-shadow duration-300">
                <img 
                  src={logo}
                  alt="Shinde Food Logo" 
                  className="h-15 w-auto"
                />
              </div>
              {/* Company Name */}
              <div className="hidden sm:block">
                <div className="text-xl font-black text-[#8B1B1F]">
                  Shinde Food
                </div>
                <div className="text-xs text-gray-600 font-semibold tracking-wide">
                  Premium Frozen Foods
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-medium"
            >
              Home
            </Link>

            <Link
              to="/About"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-medium"
            >
              About Us
            </Link>

            <Link
              to="/Recipies"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-medium"
            >
              Recipies
            </Link>

            <Link
              to="/foodservices"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-medium"
            >
              Food Services
            </Link>

            <Link
              to="/GetProducts"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-medium"
            >
              Get Products
            </Link>

            <Link
              to="/contact"
              className="px-3 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-white transition-all duration-200 font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#8B1B1F] p-2 rounded-lg hover:bg-white transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-[#FBE5E5]">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/products"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Recipies
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:text-[#8B1B1F] hover:bg-[#FDF2F2] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
