// ============================================================================
// SMOOTH SCROLL SETUP - Complete Implementation Guide
// ============================================================================

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // ================================================================
    // LENIS CONFIGURATION - Adjust these for different scroll feels
    // ================================================================
    
    lenisRef.current = new Lenis({
      // DURATION: Controls scroll animation duration
      // Range: 0.5-2.0 (1.2 = smooth, 0.8 = snappy, 1.8 = cinematic)
      duration: 1.2,
      
      // EASING: Controls scroll curve feeling
      // Options: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      
      // DIRECTION: Scroll direction
      // Options: 'vertical' | 'horizontal' | 'both'
      direction: 'vertical',
      
      // GESTUREDIRECTION: Mouse wheel direction
      // Options: 'vertical' | 'horizontal' | 'both'
      gestureDirection: 'vertical',
      
      // SMOOTH: Enable/disable smooth scrolling
      smooth: true,
      
      // SMOOTHTOUCH: Enable smooth scroll on touch devices
      // Set to false if you want native mobile scroll
      smoothTouch: true,
      
      // TOUCHMULTIPLIER: Touch scroll sensitivity
      // Range: 1-3 (2 = normal, 1 = less sensitive, 3 = more sensitive)
      touchMultiplier: 1.5,
      
      // INFINITE: Enable infinite scroll (carousel-like)
      infinite: false,
    });

    // ================================================================
    // FRAME LOOP - Essential for smooth animation
    // ================================================================
    
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // ================================================================
    // CLEANUP - Important for performance
    // ================================================================
    
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Expose lenis instance for external control
  useEffect(() => {
    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;

// DIFFERENT SCROLL FEELS:

// 🏎️  SNAPPY (Gaming/Tech):
// duration: 0.8,
// easing: (t) => 1 - Math.pow(1 - t, 3),

// 🎭  CINEMATIC (Portfolio/Agency):
// duration: 1.8,
// easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

// ⚡  RESPONSIVE (E-commerce/Business):
// duration: 1.0,
// easing: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,

// 🌊  ULTRA SMOOTH (Luxury/Creative):
// duration: 1.5,
// easing: (t) => Math.sin((t * Math.PI) / 2),
// */