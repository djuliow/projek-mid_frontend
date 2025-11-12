import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const HeroSection = ({ user }) => {
  if (!user) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-blue-200 text-gray-800"
      >
        <p>Loading Hero Section...</p>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-blue-200 text-gray-800 py-10 px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Profile Image - Left on Desktop, Top on Mobile */}
        <Fade direction="left" triggerOnce className="shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300">
            <img
              src={user.profile_image_hero || user.foto} // Use specific hero image or general foto
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Fade>

        {/* Intro Text & CTAs - Right on Desktop, Bottom on Mobile */}
        <div className="text-center md:text-left max-w-lg">
          <Fade direction="right" triggerOnce>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
              Hi, I’m <span className="text-blue-700">{user.nama}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              {user.subheading}
            </p>
            <p className="text-md md:text-lg text-gray-600 mb-8">
              {user.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 justify-center md:justify-start">
              <ScrollLink
                to="certificates" // Assuming a 'projects' section exists or will be added
                smooth={true}
                duration={500}
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {user.cta_projects_text}
              </ScrollLink>
              <a
                href="/path/to/your/cv.pdf" // Placeholder for CV download
                download
                className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {user.cta_cv_text}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center md:justify-start">
              {user.github && (
                <a
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transform hover:scale-125 transition-transform duration-300"
                >
                  <FaGithub className="w-8 h-8" />
                </a>
              )}
              {user.linkedin && (
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
                >
                  <FaLinkedinIn className="w-8 h-8" />
                </a>
              )}
              {/* Assuming user.instagram exists or will be added to db.json */}
              {user.instagram && (
                <a
                  href={user.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
