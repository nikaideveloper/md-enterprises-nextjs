'use client';

import React from 'react';
import Image from 'next/image';
import { contactPageData } from '@/config/contact';

export default function WhyChooseUs() {
  const { whyChooseUs } = contactPageData;

  return (
    <section className="py-10 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-lime-500 font-bold text-xs tracking-widest uppercase mb-3">
            {whyChooseUs.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {whyChooseUs.title}
          </h2>
        </div>

        {/* Features Grid with Dividers */}
        <div className="bg-white border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-sm">
          {whyChooseUs.items.map((item, index) => (
            <div key={index} className="p-10 flex flex-col items-center text-center group">
              
              {/* Icon Container */}
              <div className="relative w-14 h-14 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain brightness-0 opacity-80" 
                  // brightness-0 makes it black/dark to match the dark teal look in your image
                 
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-lg mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}