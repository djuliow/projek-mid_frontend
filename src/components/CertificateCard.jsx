import React from 'react';

const CertificateCard = ({ certificate, onCardClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
      onClick={() => onCardClick(certificate)} // Pass the whole certificate object
    >
      <img src={certificate.image} alt={certificate.title} className="w-full h-48 object-contain bg-gray-100" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold">{certificate.title}</h3>
      </div>
    </div>
  );
};

export default CertificateCard;