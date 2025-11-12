import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            MyPortfolio
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-100} onSetActive={(to) => console.log('Active link:', to)} className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-100} onSetActive={(to) => console.log('Active link:', to)} className="hover:text-gray-300 transition duration-300 cursor-pointer">About</Link>
          <Link activeClass="active" to="certificates" spy={true} smooth={true} duration={500} offset={-100} onSetActive={(to) => console.log('Active link:', to)} className="hover:text-gray-300 transition duration-300 cursor-pointer">Certificates</Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-100} onSetActive={(to) => console.log('Active link:', to)} className="hover:text-gray-300 transition duration-300 cursor-pointer">Contact</Link>
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
