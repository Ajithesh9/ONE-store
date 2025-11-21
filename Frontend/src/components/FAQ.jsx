import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, ArrowRight } from 'lucide-react';
import '../FAQ.css';

const avatars = [];

const faqData = [
  {
    q: 'Is it legal to use this application?',
    a: 'Our application is intended for systems you own or have permission to monitor. You must comply with all relevant laws.'
  },
  {
    q: 'How is my data protected?',
    a: 'We use end-to-end encryption and strict privacy practices. Your data stays private.'
  },
  {
    q: 'What devices are compatible?',
    a: 'Supports modern Android devices (version 8.0+). See docs for full list.'
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes—cancel from your dashboard at any point; access continues until billing cycle ends.'
  },
  {
    q: 'How do I install on the target device?',
    a: 'Requires physical access; follow our guided installer after signup for step-by-step help.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo('#footer');
    } else {
      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        {/* Header */}
        <div className="faq-header">
          <h4 className="text-sm font-semibold text-dark-primary mb-3 tracking-wide uppercase">
            FAQ
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about the product and billing.</p>
        </div>

        {/* List */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  /* Added 'group' here so group-hover works on children */
                  className="faq-trigger group"
                >
                  {/* Icon Animation */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className="faq-icon-wrapper"
                  >
                    <PlusCircle className="faq-icon-svg" />
                  </motion.span>

                  <span className="faq-question">{item.q}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer-text">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer / Support */}
        <div className="faq-support-container">
          <div className="faq-avatar-group">
            {avatars.map((src, i) => (
              <img key={i} src={src} alt="Support Team" className="faq-avatar" />
            ))}
          </div>

          <div className="faq-support-content">
            <h4 className="faq-support-title">Still have questions?</h4>
            <p className="faq-support-text">
              Can’t find the answer you’re looking for?{' '}
              <a
                href="#footer"
                onClick={handleContactClick}
                /* Added 'group' here for the arrow animation */
                className="faq-support-link group"
              >
                Get in touch
                <ArrowRight className="faq-link-arrow" />
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;