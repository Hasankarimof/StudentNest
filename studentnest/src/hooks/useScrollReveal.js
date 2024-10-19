// src/hooks/useScrollReveal.js

import { useEffect } from 'react';

/**
 * Custom hook to apply a scroll reveal effect on elements with the class "section".
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Function to reveal sections on scroll
    const revealSections = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Add 'visible' class if the section is in view
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealSections);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', revealSections);
  }, []);
};
