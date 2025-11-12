import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutSection = ({ user }) => {
  if (!user) {
    return (
      <section
        id="about"
        className="py-20 bg-gray-50 flex items-center justify-center min-h-screen"
      >
        <p>Loading About Section...</p>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <Fade>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
              About Me
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-10">
              {/* Profile Image - Left on Desktop, Top on Mobile */}
              <div className="shrink-0 mb-8 md:mb-0">
                <img
                  src={user.foto} // Using the general foto from user object
                  alt="Profile Picture"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-md border-4 border-blue-200"
                />
              </div>

              {/* About Text - Right on Desktop, Bottom on Mobile */}
              <div className="text-center md:text-left grow">
                <p className="text-lg text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                  {user.about_description_full}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutSection;
