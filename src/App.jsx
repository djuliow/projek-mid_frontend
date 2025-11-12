import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.location.hash = ''; // Clear the URL hash
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;