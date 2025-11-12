import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Remove hash from URL if present
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
    
    // Additional forced scroll after a very short delay to override any other scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    // Ensure scrolling to top on any kind of page load
    const onBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('beforeunload', onBeforeUnload);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
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