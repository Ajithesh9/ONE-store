import { motion } from "framer-motion";
import { FiX, FiDownload, FiSmartphone } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import "../DownloadModal.css";

// Placeholder for the APK file (Uncomment import when file is available)
// import kidsAppApk from '../assets/watcher-kids-installer.apk';
const kidsAppApk = "#";

const DownloadModal = ({ onClose }) => {
  const handleKidsDownload = () => {
    const fileUrl =
      "https://github.com/abhishekxdeku/kids/releases/download/1.2.9/watcher-kids-installer.apk";
    window.location.href = fileUrl;
  };

  const launchAPK = () => {
    const fileUrl = "one89://www.kids.in/";
    window.location.href = fileUrl;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="download-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="download-modal-header">
          <div className="header-content">
            <h2 className="download-modal-title">Install Watcher</h2>
            <p className="download-modal-subtitle">
              Select your device type to get started
            </p>
          </div>
          <button onClick={onClose} className="modal-close-button">
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="download-modal-content">
          {/* Option 1: Parent App */}
          <a
            href="https://play.google.com/store/apps/details?id=com.deku.watcher"
            target="_blank"
            rel="noopener noreferrer"
            className="download-option-card parent-card group"
          >
            <div className="card-icon-wrapper parent-icon">
              <FaGooglePlay size={28} />
            </div>
            <div className="card-text-content">
              <span className="card-title">Parent App</span>
              <span className="card-desc">Monitor from your device</span>
            </div>
            <div className="card-action-arrow">
              <FiDownload size={20} />
            </div>
          </a>

          {/* Divider with "AND" */}
          <div className="modal-divider">
            <span>AND</span>
          </div>

          {/* Option 2: Kids App */}
          <a
            onClick={handleKidsDownload}
            className="download-option-card kids-card group"
          >
            <div className="card-icon-wrapper kids-icon">
              <FiSmartphone size={28} />
            </div>
            <div className="card-text-content">
              <span className="card-title">Child App</span>
              <span className="card-desc">Install on target device</span>
            </div>
            <div className="card-action-arrow">
              <FiDownload size={20} />
            </div>
          </a>
        </div>

        {/* Footer Note */}
        <div className="download-modal-footer">
          <p>
            Need help installing?{" "}
            <a href="#faq" onClick={onClose}>
              Read the guide
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DownloadModal;
