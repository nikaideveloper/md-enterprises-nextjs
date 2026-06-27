"use client";
import React from 'react';
import { commonData } from '@/config/commonData'; // Ensure path is correct for your common data

export default function SupportCTA() {
  const { ctaSection } = commonData;

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Image and Content Area */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:w-3/4">
          
          {/* Circular Support Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-gray-200 overflow-hidden bg-[#f8f9fa] flex-shrink-0 flex items-center justify-center p-2 shadow-sm">
            <img
              src={ctaSection.image.src}
              alt={ctaSection.image.alt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-tight mb-4">
              {ctaSection.title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {ctaSection.description}
            </p>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto">
          {/* Primary Button */}
          <a
            href={ctaSection.buttons.primary.link}
            className="bg-[#1a3636] text-white px-8 py-3 rounded-md font-semibold text-sm shadow-md hover:bg-[#122626] transition-all min-w-[180px] text-center"
          >
            {ctaSection.buttons.primary.text}
          </a>

          {/* Secondary Button - with the heavy shadow seen in UI */}
          <a
            href={ctaSection.buttons.secondary.link}
            className="bg-white text-[#1a1a1a] px-8 py-3 rounded-md font-semibold text-sm border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:bg-gray-50 transition-all min-w-[180px] text-center"
          >
            {ctaSection.buttons.secondary.text}
          </a>
        </div>

      </div>
    </section>
  );
}