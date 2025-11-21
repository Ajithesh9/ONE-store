import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiX } from 'react-icons/fi';
import '../FeatureComparisonTable.css';

// All features categorized and now ordered according to your UI preference
const featureCategories = [
  {
    category: 'Device Monitoring & Control',
    features: [
      { name: 'Monitor Apps', plans: { bronze: true, silver: true, gold: true } },
      { name: 'See Wallpapers', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Monitor Volume', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Monitor Brightness', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Control Apps', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Control Volume', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Control Brightness', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Set Wallpaper', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Lock Mobile', plans: { bronze: false, silver: true, gold: true } },
    ],
  },
  {
    category: 'Communication Monitoring',
    features: [
      { name: 'Read Call History', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Create Calls', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Read Contacts', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Monitor Notifications', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Read Messages', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Send Messages', plans: { bronze: false, silver: false, gold: true } },
    ],
  },
  {
    category: 'File & Data Access',
    features: [
      { name: 'Image Gallery', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Download Files', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Download Images', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Delete Files', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Delete Images', plans: { bronze: false, silver: false, gold: true } },
    ],
  },
  {
    category: 'Live Monitoring',
    features: [
      { name: 'Remote Camera', plans: { bronze: false, silver: false, gold: true } },
      { name: 'One-Way Audio', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Live Location', plans: { bronze: false, silver: false, gold: true } },
    ],
  },
  {
    category: 'Core Utilities',
    features: [
      { name: 'Device Information', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Device Location', plans: { bronze: true, silver: true, gold: true } },
    ],
  },
];

const FeatureComparisonTable = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getFeatureScore = (feature) => {
    return (feature.plans.bronze ? 1 : 0) + (feature.plans.silver ? 1 : 0) + (feature.plans.gold ? 1 : 0);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="feature-comparison-table"
    >
      <motion.h3 variants={itemVariants}>
        Detailed Feature Comparison
      </motion.h3>

      <div className="table-container">
        {/* Table Header */}
        <motion.div variants={itemVariants} className="table-header">
          <div className="feature-col">Feature</div>
          <div className="plan-col">Bronze</div>
          <div className="plan-col">Silver</div>
          <div className="plan-col">Gold</div>
        </motion.div>

        {/* Table Body */}
        <div className="table-body">
          {featureCategories.map((category) => (
            <div key={category.category} className="category-row">
              <motion.div variants={itemVariants} className="category-header">
                <h4>{category.category}</h4>
              </motion.div>
              {category.features
                .sort((a, b) => getFeatureScore(b) - getFeatureScore(a))
                .map((feature) => (
                  <motion.div
                    variants={itemVariants}
                    key={feature.name}
                    className="feature-row"
                  >
                    <div className="feature-name">{feature.name}</div>
                    {['bronze', 'silver', 'gold'].map((plan) => (
                      <div key={plan} className="plan-cell" data-plan={plan}>
                        {feature.plans[plan] ? (
                          <FiCheck className="check-icon" />
                        ) : (
                          <FiX className="x-icon" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                ))}
            </div>
          ))}
        </div>

        {/* Manual row for Max Devices */}
        <motion.div variants={itemVariants} className="manual-row">
          <div className="max-devices-label">Max Devices</div>
          <div className="device-count" data-plan="bronze">1</div>
          <div className="device-count" data-plan="silver">2</div>
          <div className="device-count" data-plan="gold">5</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureComparisonTable;