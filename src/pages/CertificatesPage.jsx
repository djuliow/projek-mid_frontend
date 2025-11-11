import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CertificateList from '../components/CertificateList';
import Modal from '../components/Modal';

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/certificates')
      .then(res => {
        setCertificates(res.data);
      })
      .catch(err => console.error("Error fetching certificates:", err));
  }, []);

  const handleCardClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <CertificateList certificates={certificates} onCardClick={handleCardClick} />
      <Modal certificate={selectedCertificate} onClose={handleCloseModal} />
    </>
  );
};

export default CertificatesPage;
