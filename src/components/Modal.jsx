import React from 'react';

const Modal = ({ certificate, onClose }) => {
  if (!certificate) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full p-4 text-center" onClick={(e) => e.stopPropagation()}>
        <img src={certificate.image} alt={certificate.title} className="w-auto h-auto max-w-full max-h-[80vh] object-contain mx-auto" />
        <div className="bg-black bg-opacity-50 p-2 rounded mt-4 inline-block">
          <h3 className="text-white text-2xl font-bold">{certificate.title}</h3>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-red-500 text-5xl leading-none font-bold hover:text-red-700"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;