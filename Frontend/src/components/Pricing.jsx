// src/components/Pricing.jsx

import { useState } from 'react';
import { Check, Zap, Users, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import Cart Hook
import { useAuth } from '../context/AuthContext'; // Import Auth Hook
import '../Pricing.css';

// Data reordered: Bronze -> Silver -> Gold -> Diamond
const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: '79.00',
    period: 'Weekly',
    description: 'Flexible weekly monitoring for fewer devices.',
    features: [
      'Starting From ₹79.00 | Weekly',
      'Can Pair Upto 3 Devices',
      'Essential Monitoring Features',
      'Basic Device Control',
    ],
    popular: false,
    color: '#BB86FC',
    buttonText: 'Get Bronze'
  },
  {
    id: 'silver',
    name: 'Silver',
    price: '300.00',
    period: 'Monthly',
    description: 'Standard monthly plan for up to 5 devices.',
    features: [
      'Starting From ₹300.00 | Monthly',
      'Can Pair Upto 5 Devices',
      'Standard Monitoring',
      'Device Restrictions',
    ],
    popular: false,
    color: '#9CA3AF',
    buttonText: 'Get Silver'
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '250.00',
    period: 'Monthly',
    billingNote: 'Billed 6 Months',
    description: 'Balanced plan for medium-sized needs.',
    features: [
      'Starting From ₹250.0 | Monthly (Billed 6 Months)',
      'Can Pair Upto 7 Devices',
      'Advanced Monitoring',
      'Enhanced Controls',
    ],
    popular: false,
    color: '#FBBF24',
    buttonText: 'Get Gold'
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: '200.00',
    period: 'Monthly',
    billingNote: 'Billed Yearly',
    description: 'Maximum value for larger families.',
    features: [
      'Starting From ₹200.0 | Monthly (Billed Yearly)',
      'Can Pair Upto 10 Devices',
      'Full Suite of Features',
      'Priority Support',
    ],
    popular: true,
    color: '#60A5FA',
    buttonText: 'Get Diamond'
  }
];

const Pricing = () => {
  const [activePlanId, setActivePlanId] = useState('bronze');
  const activePlan = plans.find(p => p.id === activePlanId);

  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // 1. Check if User is Logged In
    if (!user) {
      if (window.confirm("You need to login to purchase a plan. Go to login page?")) {
        navigate('/login');
      }
      return;
    }

    // 2. Add to Cart
    const success = addToCart(activePlan);

    // 3. If successful, redirect to Cart Page
    if (success) {
      navigate('/cart');
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-grid">

          {/* Left Column: Content (Same as before) */}
          <div className="lg:col-span-7 mb-24 lg:mb-0">
            <div className="max-w-2xl -mt-8">
              <h4 className="pricing-eyebrow">Pricing</h4>
              <h2 className="pricing-title">Simple, Transparent Pricing</h2>
              <p className="pricing-description">
                Choose the plan that fits your family's needs. No hidden fees, cancel anytime.
              </p>

              <div className="space-y-8">
                <div className="feature-row">
                  <div className="feature-icon-box bg-purple-500/10 border-purple-500/20 text-[#BB86FC]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="feature-title">Family First</h3>
                    <p className="feature-desc">Scale from a single device to covering the whole household easily.</p>
                  </div>
                </div>

                <div className="feature-row">
                  <div className="feature-icon-box bg-teal-500/10 border-teal-500/20 text-[#03DAC6]">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="feature-title">Instant Updates</h3>
                    <p className="feature-desc">Real-time data synchronization ensuring you never miss a moment.</p>
                  </div>
                </div>

                <div className="feature-row">
                  <div className="feature-icon-box bg-blue-500/10 border-blue-500/20 text-blue-400">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="feature-title">Total Security</h3>
                    <p className="feature-desc">Enterprise-grade encryption keeps your family's data private and secure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Card */}
          <div className="lg:col-span-5">
            {/* Tab Switcher */}
            <div className="tab-group">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => {
                    if (activePlanId !== plan.id) {
                      setActivePlanId(plan.id);
                    }
                  }}
                  className="tab-button"
                  style={{
                    color: activePlanId === plan.id ? '#0C0E12' : '#9CA3AF',
                    backgroundColor: activePlanId === plan.id ? plan.color : 'transparent',
                  }}
                >
                  {plan.name}
                  {plan.id === 'diamond' && (
                    <div className="arrow-annotation">
                      <span className="arrow-text">Best Value!</span>
                      <svg width="50" height="40" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg">
                        <path d="M10 5 C 15 20, 25 25, 35 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M35 30 L 26 28 M 35 30 L 32 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Pricing Card Box */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pricing-card-container"
              >
                {activePlan.popular && (
                  <div className="popular-badge-inner" style={{ backgroundColor: activePlan.color }}>Best Value</div>
                )}

                <div className="card-content">
                  <div className="flex flex-col gap-1">
                    <h3 className="plan-name" style={{ color: activePlan.color }}>{activePlan.name} Plan</h3>
                    <p className="plan-desc">{activePlan.description}</p>
                  </div>

                  <div className="price-wrapper">
                    <span className="price-amount">₹{activePlan.price}</span>
                    <span className="price-period">/{activePlan.period}</span>
                  </div>

                  <p className="price-subtext">{activePlan.billingNote ? activePlan.billingNote : 'Cancel anytime'}</p>

                  <div className="card-features">
                    <h4 className="card-features-title">What's Included</h4>
                    <ul className="space-y-3">
                      {activePlan.features.map((feature, i) => (
                        <li key={i} className="card-feature-item">
                          <div className="flex-shrink-0 mt-0.5">
                            <Check className="h-4 w-4" style={{ color: activePlan.color }} />
                          </div>
                          <span className="card-feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="action-button-wrapper">
                    <button
                      className="action-button group"
                      onClick={handleAddToCart} // <-- UPDATED CLICK HANDLER
                      style={{
                        backgroundColor: activePlan.color,
                        boxShadow: `0 4px 20px -5px ${activePlan.color}40`
                      }}
                    >
                      {activePlan.buttonText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;