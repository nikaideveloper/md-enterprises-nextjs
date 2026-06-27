"use client";

import { useEffect, useState, useCallback } from "react";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateScroll = useCallback(() => {
    // 1. Get current scroll position
    const scrollPx = document.documentElement.scrollTop || window.scrollY;
    
    // 2. Get total height of the page
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 3. Prevent division by zero on very short pages
    if (winHeightPx > 0) {
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    }

    // 4. Show/Hide button
    if (scrollPx > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    // Run on scroll
    window.addEventListener("scroll", updateScroll);
    // Run on resize (important for dynamic product pages)
    window.addEventListener("resize", updateScroll);
    
    // Initial check
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [updateScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Math
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  // Ensure progress never exceeds 100 or goes below 0
  const cleanProgress = Math.min(Math.max(scrollProgress, 0), 100);
  const offset = circumference - (cleanProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-8 right-8 z-[9999] cursor-pointer transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#e5e7eb" // Light gray background
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#111827" // Dark progress color
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            style={{ 
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 100ms linear" 
            }}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute flex items-center justify-center">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#f97316" // Orange arrow color
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;