import React from 'react';
import { ShieldCheck, Smartphone, Lock, ArrowRight, Download } from 'lucide-react';
import eyesLogo from '../assets/eyes.webp';
import '../PreFooterCTA.css';

const PreFooterCTA = () => {

    const handleScrollToTop = () => {
        if (window.lenis) {
            window.lenis.scrollTo(0);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleScrollToPricing = () => {
        if (window.lenis) {
            window.lenis.scrollTo('#pricing');
        } else {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="prefooter-section">
            <div className="prefooter-container">

                {/* Lighter Glassmorphic Card */}
                <div className="prefooter-card">

                    {/* Noise Overlay for smoother gradients */}
                    <div className="prefooter-noise"></div>

                    {/* Ambient Glow Effect */}
                    <div className="prefooter-glow"></div>

                    <div className="prefooter-content">

                        {/* Logo - Navbar Style */}
                        <div className="prefooter-logo-wrapper">
                            <img
                                src={eyesLogo}
                                alt="Watcher Logo"
                                className="prefooter-logo"
                            />
                        </div>

                        {/* Text Content */}
                        <div>
                            <h2 className="prefooter-title">
                                Ready to secure their digital journey?
                            </h2>
                            <p className="prefooter-description mt-3">
                                Join thousands of parents who trust Watcher to keep their children safe online.
                                Start your free trial today.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="prefooter-buttons">
                            <button onClick={handleScrollToTop} className="prefooter-btn-primary">
                                <Download className="w-4 h-4" />
                                Download App
                            </button>
                            <button onClick={handleScrollToPricing} className="prefooter-btn-secondary">
                                View Pricing
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="prefooter-trust">
                            <div className="prefooter-trust-item">
                                <Lock className="prefooter-trust-icon" />
                                <span>Bank-Level Encryption</span>
                            </div>
                            <div className="prefooter-trust-item">
                                <ShieldCheck className="prefooter-trust-icon" />
                                <span>GDPR Compliant</span>
                            </div>
                            <div className="prefooter-trust-item">
                                <Smartphone className="prefooter-trust-icon" />
                                <span>Works on All Devices *</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Single Hill Footer Style */}
            <div className="prefooter-hill-container">
                <svg
                    className="prefooter-hill-svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,120 Q600,-50 1200,120 Z"
                        className="prefooter-hill-path"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default PreFooterCTA;