import React from 'react';
import { aboutPageData } from '@/config/about';

export default function AboutHero() {
  const { hero } = aboutPageData;

  return (
    <section className="relative w-full overflow-hidden bg-[#f2f1f2]">
      {/* Container: Stays flex-col for mobile, flex-row for desktop */}
      <div className="mx-5 flex flex-col lg:flex-row items-center">
        
        {/* Left Content Side */}
        {/* Mobile: py-10 | Desktop: lg:py-8 (as per your original) */}
        <div className="w-full lg:w-1/2 px-6 py-10 md:px-8 lg:py-8 z-10 order-2 lg:order-1">
          <div className="max-w-xl">
            {/* Badge: Mobile: text-xl | Tablet/Desktop: md:text-3xl */}
            <span className="text-xl md:text-3xl font-bold text-black block mb-2">
              {hero.badge}
            </span>

            {/* Title: Mobile: text-3xl | Tablet: md:text-5xl | Desktop: lg:text-6xl */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a3636] mb-4 lg:mb-6 leading-tight">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-xl font-medium text-gray-800 leading-tight mb-4">
              {hero.subtitle}
            </p>

            {/* Divider Line */}
            <div className="w-20 md:w-24 h-[3px] bg-[#1a3636] mb-6"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 lg:mb-10">
              {hero.description}
            </p>

            {/* Buttons: Stacked on mobile, side-by-side (flex-wrap) on desktop */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="bg-[#1a3636] text-white px-8 py-3 rounded-md font-medium shadow-lg hover:bg-opacity-90 transition-all w-full sm:w-auto">
                {hero.buttons.primary}
              </button>
              <button className="bg-white text-black border border-gray-200 px-8 py-3 rounded-md font-medium shadow-md hover:bg-gray-50 transition-all w-full sm:w-auto">
                {hero.buttons.secondary}
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        {/* Mobile: h-[300px] | Tablet: h-[400px] | Desktop: lg:h-[450px] */}
        <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[450px] order-1 lg:order-2">
          <div className="absolute inset-0 overflow-hidden ">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>

      </div>
    </section>
  );
}