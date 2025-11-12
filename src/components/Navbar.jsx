import React, { useState } from "react";
import { Link } from "react-scroll"; // Import from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            MyPortfolio
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-300 transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 transition duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="certificates"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="hover:text-gray-300 transition duration-300 cursor-pointer"
          >
            Certificates
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-30}
            className="hover:text-gray-300 transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-2 space-y-2">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onSetActive={(to) => console.log("Active link:", to)}
            onClick={closeMenu}
            className="block w-full text-center py-2 hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            onSetActive={(to) => console.log("Active link:", to)}
            onClick={closeMenu}
            className="block w-full text-center py-2 hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="certificates"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            onSetActive={(to) => console.log("Active link:", to)}
            onClick={closeMenu}
            className="block w-full text-center py-2 hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            Certificates
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            onSetActive={(to) => console.log("Active link:", to)}
            onClick={closeMenu}
            className="block w-full text-center py-2 hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
