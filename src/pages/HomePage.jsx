import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fade } from "react-awesome-reveal"; // Import Fade

// Import Section Components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

// Import Presentational Components that are passed to sections
import CertificateList from '../components/CertificateList';
import Skills from '../components/Skills';
import Modal from '../components/Modal';

const HomePage = () => {
  // All state in one place
  const [user, setUser] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [tools, setTools] = useState([]);
  const [icons, setIcons] = useState(null); // New state for icons
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Fetch all data at once
  useEffect(() => {
    const userRequest = axios.get('http://localhost:3000/user');
    const certificatesRequest = axios.get('http://localhost:3000/certificates');
    const toolsRequest = axios.get('http://localhost:3000/tools');
    const iconsRequest = axios.get('http://localhost:3000/icons'); // New request for icons

    Promise.all([userRequest, certificatesRequest, toolsRequest, iconsRequest])
      .then(([userResponse, certificatesResponse, toolsResponse, iconsResponse]) => {
        setUser(userResponse.data);
        setCertificates(certificatesResponse.data);
        setTools(toolsResponse.data);
        setIcons(iconsResponse.data); // Set icons state
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Modal handlers
  const handleCardClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <main>
      <HeroSection user={user} />
      <Fade direction="right" delay={200} duration={1000}>
        <AboutSection user={user} />
      </Fade>
      <Skills skills={tools} /> {/* Skills already has Fade internally */}
      <CertificateList certificates={certificates} onCardClick={handleCardClick} />
      <ContactSection user={user} icons={icons} /> {/* Pass icons as prop */}
      
      {/* Modal for enlarged image */}
      <Modal certificate={selectedCertificate} onClose={handleCloseModal} />
    </main>
  );
};

export default HomePage;
