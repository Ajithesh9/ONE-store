// src/components/Footer.jsx

import React from 'react';
// We no longer need 'Link' from react-router-dom
import PreFooterCTA from './PreFooterCTA';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import eyesLogo from '../assets/eyes.webp';

// The 'onPrivacyClick' prop has been removed
const Footer = () => {
  return (
    <div className="relative w-full">
      {/* The Pre-Footer CTA Section */}
      <PreFooterCTA />

      {/* ==========================================
          SECTION 2: ACTUAL FOOTER (Dark Background) 
         ========================================== */}
      <footer id="footer" className="bg-slate-900 text-white pt-12 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

            {/* Column 1: Brand Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                {/* Logo Container */}
                <div className="bg-[#282828] p-1.5 rounded-lg border border-white/10">
                  <img
                    src={eyesLogo}
                    alt="Watcher Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold">Watcher</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Empowering parents with modern tools to ensure digital safety and healthy habits for children everywhere.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Column 2: Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                
                {/* This link now points to the page (no target="_blank") */}
                <li>
                  <a 
                    href="/privacypolicy" 
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li><a href="#" className="hover:text-white transition-colors">Co-Parenting</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Guide</a></li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> <a href="mailto:support@watcher.com" className="hover:text-white transition-colors">support@watcher.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2025 Watcher Inc. All rights reserved.</p>
            <div className="flex gap-6 text-slate-500 text-sm">
              
              {/* This link also points to the page (no target="_blank") */}
              <a href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;