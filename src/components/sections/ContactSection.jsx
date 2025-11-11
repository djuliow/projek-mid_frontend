import React from 'react';
import { Fade } from "react-awesome-reveal";

const ContactSection = ({ user }) => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <Fade triggerOnce>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
          <p className="text-xl text-gray-600 mb-8">Feel free to reach out!</p>
          {user ? (
            <>
              <p className="text-lg text-gray-700 mb-4">
                Email: <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline font-medium">{user.email}</a>
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                {user.linkedin && (
                  <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9.495h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9.495h3.564v13.019zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.201 24 24 23.227 24 22.271V1.729C24 .774 23.201 0 22.225 0z"/></svg>
                  </a>
                )}
                {user.github && (
                  <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.865-.013-1.702-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.39-1.992 1.029-2.697-.103-.253-.446-1.273.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.7.117 2.49.331 1.909-1.295 2.747-1.025 2.747-1.025.546 1.377.202 2.397.099 2.65.64.705 1.028 1.601 1.028 2.697 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C21.137 20.19 24 16.437 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd"/></svg>
                  </a>
                )}
              </div>
            </>
          ) : <p>Loading contact info...</p>}
        </div>
      </Fade>
    </section>
  );
};

export default ContactSection;
