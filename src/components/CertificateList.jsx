import React from 'react';
import CertificateCard from './CertificateCard';

const CertificateList = ({ certificates, onCardClick }) => {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section id="certificates" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certificates.map(cert => (
            <CertificateCard 
              key={cert.id} 
              certificate={cert} 
              onCardClick={onCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateList;