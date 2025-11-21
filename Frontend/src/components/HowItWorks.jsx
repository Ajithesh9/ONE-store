import { Download, Link, ShieldCheck } from 'lucide-react';
import '../HowItWorks.css';

const stepsData = [
  {
    id: 'step1',
    icon: Download,
    title: 'Install App',
    description: 'Download the app on both your device (Parent) and the target device (Child).',
    color: '#BB86FC', // Purple accent
  },
  {
    id: 'step2',
    icon: Link,
    title: 'Connect',
    description: 'Use the unique secure code displayed on the child device to link them instantly.',
    color: '#03DAC6', // Teal accent
  },
  {
    id: 'step3',
    icon: ShieldCheck,
    title: 'Monitor',
    description: 'Access your dashboard to view real-time location, messages, and app activity.',
    color: '#60A5FA', // Blue accent
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="how-it-works-section">
      <div className="how-it-works-container">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="how-it-works-eyebrow">
            Easy Setup
          </h4>
          <h2 className="how-it-works-title">
            Get Started in Minutes
          </h2>
          <p className="how-it-works-subtitle">
            No complex rooting or technical skills required. Just three simple steps to peace of mind.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="step-card group"
              >
                {/* Step Number Background - Fixed Opacity */}
                <div className="step-number-bg" style={{ color: step.color }}>
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div
                    className="step-icon-box"
                    style={{
                      backgroundColor: `${step.color}15`, // 15% opacity hex
                      borderColor: `${step.color}30`,    // 30% opacity hex
                      color: step.color
                    }}
                  >
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-description">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;