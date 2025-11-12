import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ContactSection = ({ user, icons }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mwpakyyo", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
        <div className="md:flex md:space-x-8 max-w-4xl mx-auto">
          <div className="md:w-1/2 bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
            {isSubmitted && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">
                  {" "}
                  Thank you for your message!
                </span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setIsSubmitted(false)}
                >
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}
          </div>
          <div className="md:w-1/2 bg-white rounded-lg shadow-md p-8 mb-10 md:mb-0">
            <div className="text-center md:text-left">
              <p className="text-2xl font-semibold text-gray-700 mb-6">
                Feel free to reach out!
              </p>
              {user && icons ? (
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 flex justify-center items-center">
                      <img src={icons.gmail} alt="Gmail Icon" className="w-10 h-10" />
                    </div>
                    <p className="text-lg text-gray-700">
                      <a
                        href={`mailto:${user.email}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {user.email}
                      </a>
                    </p>
                  </div>
                  {user.phone && (
                    <div className="flex items-center space-x-4">
                    <div className="w-10 flex justify-center items-center">
                      <img src={icons.phone} alt="Phone Icon" className="w-8 h-8" />
                    </div>
                      <p className="text-lg text-gray-700">
                        <a href={`tel:${user.phone}`} className="text-blue-600 hover:underline font-medium">{user.phone}</a>
                      </p>
                    </div>
                  )}
                  {user.phone && (
                    <div className="flex items-center space-x-4">
                    <div className="w-10 flex justify-center items-center">
                      <img src={icons.whatsapp} alt="WhatsApp Icon" className="w-10 h-10" />
                    </div>
                      <p className="text-lg text-gray-700">
                        <a href={`https://wa.me/${user.phone}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">{user.phone}</a>
                      </p>
                    </div>
                  )}
                  {user.linkedin && (
                    <div className="flex items-center space-x-4">
                    <div className="w-10 flex justify-center items-center">
                      <img src={icons.linkedin} alt="LinkedIn Icon" className="w-10 h-10" />
                    </div>
                      <p className="text-lg text-gray-700">
                        <a
                          href={user.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          {user.nama}
                        </a>
                      </p>
                    </div>
                  )}
                  {user.github && (
                    <div className="flex items-center space-x-4">
                    <div className="w-10 flex justify-center items-center">
                      <img src={icons.github} alt="Github Icon" className="w-10 h-10" />
                    </div>
                      <p className="text-lg text-gray-700">
                        <a
                          href={user.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          {user.github.split("/").pop()}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <p>Loading contact info...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
