import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload, FiPlay } from 'react-icons/fi';
import heroImg from '../assets/Hero.webp'; // was .png
import '../Hero.css';

const Hero = ({ onDownloadClick }) => {
  const targetRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div ref={targetRef} className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content-container"
          >
            <motion.div variants={itemVariants} className="hero-content-inner">
              <h1 className="hero-title">
                Keep Your
                <br />
                <span className="hero-title-gradient">Family Safe</span>
                <br />
                <span>Online</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="hero-subtitle">
              Digital safety, simplified. Control and monitor all family devices in real-time. Keep them safe, wherever they are.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              {/* Updated: Ensures the click opens the modal */}
              <button className="hero-button primary" onClick={onDownloadClick}>
                <span>Download Now</span>
                <FiDownload className="hero-button-icon" />
              </button>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button secondary"
              >
                <FiPlay className="hero-button-icon" />
                <span>Watch Demo</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hero-image-container"
          >
            <img
              src={heroImg}
              alt="Hero Display"
              className="hero-image"
              // OPTIMIZATION: Prioritize this image above all others
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;