import React from 'react';
import { aboutPageData } from '@/config/about';

export default function IndustriesServed() {
  const { industries } = aboutPageData;

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#a5d332] font-bold text-sm tracking-widest uppercase block mb-3">
            {industries.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            {industries.title}
          </h2>
        </div>

        {/* Industries Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-0">
          {industries.items.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden bg-white aspect-[4/5] md:aspect-square lg:border-r lg:border-gray-100 last:border-0"
            >
              {/* Industry Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay with Title */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <h3 className="text-white text-center font-bold text-lg md:text-xl">
                  {item.title}
                </h3>
              </div>
              
              {/* Optional: Static Title for Mobile (if hover isn't preferred) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                 <h3 className="text-white text-sm font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}