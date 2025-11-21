// src/components/BackToTopButton.jsx

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '../App';
import { FiArrowUp } from 'react-icons/fi';
import '../BackToTopButton.css';

// Define which pages the button should appear on
const visiblePages = [
  '/privacypolicy'
  // To add more pages, just add them here, e.g.,
  // '/terms-of-service'
];

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // This effect checks both scroll and page path
  useEffect(() => {
    const handleScroll = () => {
      const isOnVisiblePage = visiblePages.includes(location.pathname);
      const scrollY = window.lenis ? window.lenis.scroll : window.scrollY;

      if (scrollY > 400 && isOnVisiblePage) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check visibility when path changes
    handleScroll(); 

    // Add scroll listeners
    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup listeners
    return () => {
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location.pathname]); // Re-run when page path changes

  return (
    // AnimatePresence will now work because this component is
    // never unmounted by App.jsx
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }} // This fade-out will now run
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <FiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};