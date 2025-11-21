import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import '../PrivacyModal.css';

const PrivacyModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="privacy-modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="privacy-modal"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Modal Header */}
        <div className="privacy-modal-header">
          <h1 className="privacy-modal-title">Privacy Policy</h1>
          <button onClick={onClose} className="privacy-modal-close-button">
            <FiX size={28} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="privacy-modal-content">
          <p className="privacy-modal-last-updated">This Privacy Policy was last changed on 4 Feb 2024</p>
          
          <h2 className="privacy-modal-section-title">1. Who we are</h2>
          <p className="privacy-modal-paragraph">One89. ("we", "us" or " our") respects your privacy and values the trust you place in us when you share your personal data with us. This privacy policy sets out how we collect, process, and use your personal data when you access and use our services, including the entire Watcher product line (collectively "Watcher"), our websites (<a href="https://www.one89.in/" className="privacy-modal-link">www.one89.in</a>and all sub-domains under one89.in) and all services provided by us from time to time (collectively the "Services").</p>
          <p className="privacy-modal-paragraph">By using our Services, you agree to this Privacy Policy and our Terms and Conditions. We are not responsible for any legal cases, and the end user is solely responsible for any consequences arising from the use of our Services.</p>

          <h2 className="privacy-modal-section-title">2. What data we collect and how we use them</h2>
          <p className="privacy-modal-paragraph">We set out below the types of data we collect and the purposes for which we use them. It is important to note that all responsibilities regarding the data collected lie with the user. We are not responsible for any data leaks or misuse.</p>

          <h2 className="privacy-modal-section-title">3. How long we keep your personal data</h2>
          <p className="privacy-modal-paragraph">We do not store any data longer than necessary. Your personal data will be deleted after the expiration time, depending on factors such as whether you have an account with us or have interacted with us.</p>
          
          <h2 className="privacy-modal-section-title">4. Sharing of your personal data</h2>
          <p className="privacy-modal-paragraph">We do not sell, lease, rent, or give away your personal data except under the circumstances set out below. It is important to note that we are not responsible for any legal cases arising from the sharing of your data.</p>
          <ul className="privacy-modal-list">
            <li>We may share your personal data with other members of our group of companies so we can provide the best services across our group. They are bound to keep your information in accordance with this policy.</li>
            <li>We may also share your personal data with certain contractors or service providers. They will process your personal data on behalf of us, for example, database service providers, advertising agencies, or customer relation management service providers. Our contractors and service providers will be required to meet our standards on processing data and security. The information we provide to them, including your personal data, will only be provided in connection with the performance of their functions.</li>
            <li>If we have obtained your explicit consent in advance.</li>
          </ul>
          <p className="privacy-modal-paragraph">Your personal data may be shared if it is made anonymous and aggregated, as in such circumstances the anonymized data will cease to be personal data.</p>
          
          <h2 className="privacy-modal-section-title">5. Your rights</h2>
          <p className="privacy-modal-paragraph">You may have certain rights in relation to your personal data. We have listed below the rights you have over your personal data. It is important to note that users can access their data, and we are not responsible for any legal cases related to the exercise of these rights.</p>
          <p className="privacy-modal-paragraph">You can exercise the above rights by contacting us at<a href="mailto:support@one89.in" className="privacy-modal-contact-link">support@one89.in</a>.</p>
          
          <h2 className="privacy-modal-section-title">6. Security</h2>
          <p className="privacy-modal-paragraph">We are committed to keeping your personal data safe. We provide high data safety measures, and we are not responsible for any legal cases related to the security of your personal data.</p>
          
          <h2 className="privacy-modal-section-title">7. Changes to the policy</h2>
          <p className="privacy-modal-paragraph">This policy will be updated from time to time.</p>
          <p className="privacy-modal-paragraph">We will inform you of the updated policy by providing (i) a prominent link on our websites and Services, and (ii) by other means as appropriate.</p>

          <h2 className="privacy-modal-section-title">8. How to contact us</h2>
          <p>If you have any questions about this policy, please contact us at:<a href="mailto:support@one89.in" className="privacy-modal-contact-link">support@one89.in</a>.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyModal;