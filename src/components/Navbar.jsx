import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  // Using NavLink to apply active styles
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#6ee7b7', // A light green color for active link
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyPortfolio
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-gray-300 transition duration-300">Home</NavLink>
          <NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-gray-300 transition duration-300">About</NavLink>
          <NavLink to="/certificates" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-gray-300 transition duration-300">Certificates</NavLink>
          <NavLink to="/contact" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="hover:text-gray-300 transition duration-300">Contact</NavLink>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;