import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Fetch all data at once
  useEffect(() => {
    const userRequest = axios.get('http://localhost:3000/user');
    const certificatesRequest = axios.get('http://localhost:3000/certificates');
    const toolsRequest = axios.get('http://localhost:3000/tools');

    Promise.all([userRequest, certificatesRequest, toolsRequest])
      .then(([userResponse, certificatesResponse, toolsResponse]) => {
        setUser(userResponse.data);
        setCertificates(certificatesResponse.data);
        setTools(toolsResponse.data);
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
      <HeroSection />
      <AboutSection user={user} />
      <Skills skills={tools} />
      <CertificateList certificates={certificates} onCardClick={handleCardClick} />
      <ContactSection user={user} />
      
      {/* Modal for enlarged image */}
      <Modal certificate={selectedCertificate} onClose={handleCloseModal} />
    </main>
  );
};

export default HomePage;
