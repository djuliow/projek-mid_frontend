import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-200 text-center py-20 min-h-screen flex items-center justify-center">
      <Fade direction="down" triggerOnce>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-600 mt-4">A brief introduction about yourself and what you do.</p>
          <ScrollLink 
            to="about"
            smooth={true}
            duration={500}
            className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full mt-8 inline-block hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            Learn More About Me
          </ScrollLink>
        </div>
      </Fade>
    </section>
  );
};

export default HeroSection;
