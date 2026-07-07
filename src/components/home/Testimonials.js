"use client";

import React, { useState, useEffect } from "react";
import { homePageData } from "@/config/home";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Helper function to get initials (e.g., "John Doe" -> "JD")
const getInitials = (name) => {
  const names = name.split(" ");
  const initials = names.map((n) => n[0]).join("");
  return initials.toUpperCase().substring(0, 2);
};

const TestimonialCard = ({ item, onReadMore }) => {
  const limit = 140;
  const isLong = item.quote.length > limit;

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full transition-all hover:shadow-md">
      {/* Quote Icon */}
      <div>
        <span className="text-green-700 text-6xl leading-none">“</span>
      </div>

      {/* Quote Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {isLong ? `${item.quote.slice(0, limit)}...` : item.quote}
      </p>

      {/* Read More Button - Triggers Popup */}
      {isLong && (
        <button
          onClick={() => onReadMore(item)}
          className="text-green-600 cursor-pointer text-sm font-semibold mb-2 text-left hover:underline"
        >
          Read More
        </button>
      )}

      {/* Divider */}
      <div className="w-12 h-[2px] bg-green-600 mb-3"></div>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-auto">
        {/* Initial Avatar */}
        <div className="w-12 h-12 shrink-0 rounded-full bg-green-100 border-2 border-white shadow-sm flex items-center justify-center text-green-700 font-bold text-sm">
          {getInitials(item.name)}
        </div>
        
        <div className="flex flex-col">
          <h4 className="font-bold text-green-700 text-sm leading-tight">
            {item.name}
          </h4>
          <p className="text-gray-500 text-[11px] leading-tight mt-1">
            {item.role}
          </p>
          <p className="text-gray-900 font-bold text-[10px] uppercase tracking-tighter">
            {item.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { testimonials } = homePageData;
  const items = testimonials.items;
  const totalItems = items.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Responsive logic to dynamically calculate slider limits
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(4); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedItem]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(items[(currentIndex + i) % totalItems]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="py-10 md:py-16 bg-gray-50/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-green-600 font-bold tracking-widest text-xs sm:text-sm block mb-2 uppercase">
            {testimonials.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {testimonials.title}
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {testimonials.description}
          </p>
        </div>

        {/* Testimonials Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCards.map((item, index) => (
            <div key={`${item.id}-${index}`} className="h-full">
              <TestimonialCard
                item={item}
                onReadMore={(item) => setSelectedItem(item)}
              />
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 border rounded-full bg-white text-gray-700 hover:bg-green-600 cursor-pointer hover:text-white transition shadow-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 cursor-pointer h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 border rounded-full bg-white text-gray-700 hover:bg-green-600 cursor-pointer hover:text-white transition shadow-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-6 cursor-pointer h-6" />
          </button>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="absolute inset-0" 
            onClick={() => setSelectedItem(null)}
          ></div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition cursor-pointer hover:bg-gray-100 rounded-full z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 pt-4 md:pt-0">
              {/* Profile Side with Initials */}
              <div className="flex flex-col items-center text-center md:text-left md:items-start shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-2xl bg-green-100 border-4 border-green-50 shadow-lg flex items-center justify-center text-green-700 text-2xl md:text-3xl font-bold">
                  {getInitials(selectedItem.name)}
                </div>
                <h4 className="font-bold text-green-700 text-lg md:text-xl leading-tight">
                  {selectedItem.name}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm mt-1">{selectedItem.role}</p>
                <p className="text-green-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mt-2">
                  {selectedItem.company}
                </p>
              </div>

              {/* Content Side */}
              <div className="flex-grow">
                {/* Quote Icon */}
                <div className="text-left">
                  <span className="text-green-700 text-5xl md:text-6xl leading-none">“</span>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed italic -mt-2">
                  {selectedItem.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;