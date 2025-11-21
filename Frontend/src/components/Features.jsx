import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Device
  AppWindow, Image as ImageIcon, Volume2, Sun, Lock,
  // Comm
  Phone, PhoneCall, Contact, Bell, MessageSquare, Send, Mic2, MessageCircle,
  // Files
  GalleryHorizontal, Download, ImageDown, Trash2, ImageMinus,
  // Live
  Camera, Mic, MapPin, Activity, Keyboard, Ban,
  // Utils
  Cpu, Navigation,
} from 'lucide-react';

import locationMockup from '../assets/location-mockup.webp';
import chatMockup from '../assets/chat-mockup.webp';
import appMockup from '../assets/device-control.webp';
import galleryMockup from '../assets/gallery-images.webp';
import infoMockup from '../assets/utility.webp';

import '../Features.css';

const featuresData = [
  {
    id: 'device',
    category: "Device Control",
    color: "#BB86FC",
    description: "Full control over the device's core functions and applications.",
    image: appMockup,
    imageScale: 1.26,       
    mobileImageScale: 1.1,  
    items: [
      { name: "Device Apps", icon: AppWindow },
      { name: "Device Wallpaper", icon: ImageIcon },
      { name: "Device Volume", icon: Volume2 },
      { name: "Device Brightness", icon: Sun },
      { name: "Lock Device", icon: Lock },
    ]
  },
  {
    id: 'comm',
    category: "Communication",
    color: "#03DAC6",
    description: "Comprehensive logs of all calls, messages, and social interactions.",
    image: chatMockup,
    imageScale: 1.18,       
    mobileImageScale: 1.05, 
    items: [
      { name: "Call History", icon: Phone },
      { name: "Make Calls", icon: PhoneCall },
      { name: "Device Contacts", icon: Contact },
      { name: "Live Notifications", icon: Bell },
      { name: "Read Messages", icon: MessageSquare },
      { name: "Send Messages", icon: Send },
      { name: "Call Recording", icon: Mic2 },
      { name: "Social Media Chats", icon: MessageCircle },
    ]
  },
  {
    id: 'files',
    category: "Data Access",
    color: "#60A5FA",
    description: "Access, download, and manage files stored on the device.",
    image: galleryMockup,
    imageScale: 1.1,        
    mobileImageScale: 1.0,  
    items: [
      { name: "Image Gallery", icon: GalleryHorizontal },
      { name: "Download Files", icon: Download },
      { name: "Download Images", icon: ImageDown },
      { name: "Delete Files", icon: Trash2 },
      { name: "Delete Images", icon: ImageMinus },
    ]
  },
  {
    id: 'live',
    category: "Live Monitoring",
    color: "#F43F5E",
    description: "Real-time surveillance of the device's surroundings and activity.",
    image: locationMockup,
    imageScale: 1.45,       
    mobileImageScale: 1.3,  
    items: [
      { name: "Remote Camera", icon: Camera },
      { name: "One-Way Audio", icon: Mic },
      { name: "Live Location", icon: MapPin },
      { name: "Live Call Monitoring", icon: Activity },
      { name: "Live Type Monitoring", icon: Keyboard },
      { name: "Geofencing", icon: Ban },
    ]
  },
  {
    id: 'utils',
    category: "Utilities",
    color: "#FBBF24",
    description: "Essential tracking and system information.",
    image: infoMockup,
    imageScale: 1.5,        
    mobileImageScale: 1.2,  
    items: [
      { name: "Device Information", icon: Cpu },
      { name: "Device Location", icon: Navigation },
    ]
  }
];

// VisualContent component
const VisualContent = ({ category, isMobile }) => {
  const scale = isMobile 
    ? (category.mobileImageScale || 1) 
    : (category.imageScale || 1);

  return (
    <div
      className="visual-content"
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <img
        src={category.image}
        alt={category.category}
        className="visual-image"
        // Removed loading="eager" and decoding="async"
        // Our useEffect preloader handles this better.
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: `scale(${scale})`,
          transition: 'transform 0.3s ease'
        }}
      />
      <div
        className="visual-glow"
        style={{
          backgroundColor: category.color,
          width: '60%',
          height: '60%'
        }}
      ></div>
    </div>
  );
};

const Features = () => {
  const [activeTabId, setActiveTabId] = useState('device');
  const activeCategory = featuresData.find(cat => cat.id === activeTabId);

  // Preload images
  useEffect(() => {
    featuresData.forEach((feature) => {
      const img = new Image();
      img.src = feature.image;
    });
  }, []);

  return (
    <section id="features" className="features-section">
      <div className="features-container">

        <div className="features-header">
          <h4 className="features-eyebrow">Capabilities</h4>
          <h2 className="features-title">
            Complete Control
          </h2>
          <p className="features-subtitle">
            Everything you need to keep them safe, all in one place.
          </p>
        </div>

        {/* Tabs */}
        <div className="features-tabs-wrapper">
          <div className="features-tab-group">
            {featuresData.map((cat) => {
              const isActive = activeTabId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (activeTabId !== cat.id) {
                      setActiveTabId(cat.id);
                    }
                  }}
                  className="features-tab-button"
                  style={{
                    backgroundColor: isActive ? cat.color : 'transparent',
                    color: isActive ? '#121212' : '#9CA3AF',
                  }}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Display Card */}
        <div className="features-card-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              // --- ANIMATION CHANGE ---
              // Changed from a scale/y-translate to a simple, fast fade
              // This is much less "glitchy" as it doesn't move pixels.
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }} // Made transition faster
              className="feature-display-card"
            >

              {/* Desktop Visual */}
              <div className="feature-card-visual desktop-visual" style={{ padding: 0 }}>
                 <VisualContent category={activeCategory} isMobile={false} />
              </div>

              {/* Right Content */}
              <div className="feature-card-content">
                
                {/* Mobile Wrapper */}
                <div className="mobile-card-wrapper">
                    {/* Mobile Visual */}
                    <div className="feature-card-visual mobile-visual" style={{ padding: 0 }}>
                         <VisualContent category={activeCategory} isMobile={true} />
                    </div>

                    <div className="content-header-fixed">
                      <h3 className="content-title" style={{ color: activeCategory.color }}>
                        {activeCategory.category}
                      </h3>
                      <p className="content-desc">
                        {activeCategory.description}
                      </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="features-grid-wrapper">
                  <div className="features-grid-list">
                    {activeCategory.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.name} className="grid-item group">
                          <div className="grid-icon-box" style={{ color: activeCategory.color }}>
                            <Icon size={20} strokeWidth={2} />
                          </div>
                          <span className="grid-text">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Features;