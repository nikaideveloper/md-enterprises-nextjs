import React from 'react';
import { aboutPageData } from '@/config/about';

export default function CompanyOverview() {
  const { companyOverview } = aboutPageData;

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-15 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Image Grid Layout */}
        <div className="w-full lg:w-1/2 mt-20 flex gap-4 h-[400px] md:h-[500px]">
          {/* Column 1: Two stacked images */}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="h-1/2 w-full bg-white rounded-sm overflow-hidden shadow-sm">
              <img
                src={companyOverview.images[0].image}
                alt={companyOverview.images[0].alt}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="h-1/2 w-full bg-white rounded-sm overflow-hidden shadow-sm">
              <img
                src={companyOverview.images[1].image}
                alt={companyOverview.images[1].alt}
                className=" object-contain pt-6 p-1"
              />
            </div>
          </div>

          {/* Column 2: One tall image */}
          <div className="w-1/2 h-full bg-white rounded-sm overflow-hidden shadow-sm">
            <img
              src={companyOverview.images[2].image}
              alt={companyOverview.images[2].alt}
              className=" object-contain p-4"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2">
          {/* Label */}
          <span className="text-[#a5d332] font-bold text-sm md:text-base tracking-wider uppercase mb-3 block">
            {companyOverview.label}
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-8">
            {companyOverview.title}
          </h2>

          {/* Description Paragraphs */}
          <div className="space-y-6">
            {companyOverview.description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-600 text-sm md:text-base leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}