import React, { useState, useEffect } from 'react';

const TypingText = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1500 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [subTextIndex, setSubTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = texts[textIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(currentFullText.substring(0, subTextIndex - 1));
        setSubTextIndex(subTextIndex - 1);
      } else {
        // Typing text
        setCurrentText(currentFullText.substring(0, subTextIndex + 1));
        setSubTextIndex(subTextIndex + 1);
      }

      // If we've finished typing the full text
      if (!isDeleting && subTextIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } 
      // If we've finished deleting the text
      else if (isDeleting && subTextIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    // Set timeout based on current state
    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [subTextIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="font-semibold text-gray-800">
      {currentText}
      <span className="inline-block w-0.5 h-7 bg-gray-800 align-middle animate-blink ml-1"></span>
    </span>
  );
};

export default TypingText;