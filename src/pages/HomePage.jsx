import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-200 text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600 mt-4">A brief introduction about yourself and what you do.</p>
          <Link 
            to="/about" 
            className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full mt-8 inline-block hover:bg-gray-700 transition duration-300"
          >
            Learn More About Me
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
