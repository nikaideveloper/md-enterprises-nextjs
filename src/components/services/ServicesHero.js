'use client';

import Image from 'next/image';
import { servicesPageData } from '@/config/services';

export default function ServicesHero() {
  const { hero } = servicesPageData;

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Container: Stacked on mobile (col), Side-by-side on desktop (row) */}
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[500px]">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          {/* Badge */}
          <span className="text-lime-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 lg:mb-6">
            {hero.badge}
          </span>

          {/* Title - Responsive font sizes */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f4c4c] leading-[1.2] mb-6 lg:mb-8">
           {hero.title}
          </h1>

          {/* Decorative Double Line */}
          <div className="flex flex-col gap-1 mb-8 lg:mb-10">
            <div className="h-[2px] w-24 sm:w-32 bg-[#0f4c4c]"></div>
            <div className="h-[2px] w-16 sm:w-20 bg-[#0f4c4c]"></div>
          </div>

          {/* Subtitle / Description */}
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-8 lg:mb-10">
            {hero.subtitle}
          </p>

          {/* Buttons - Stack on very small screens, row on sm+ */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <button className="bg-[#0f4c4c] text-white px-8 py-4 rounded-md font-bold text-sm shadow-[0_4px_14px_0_rgba(15,76,76,0.39)] hover:bg-[#0a3636] transition-all w-full sm:w-auto">
              {hero.buttons.primary}
            </button>
            <button className="bg-[#f8f9fa] text-gray-700 px-8 py-4 rounded-md font-bold text-sm border border-gray-100 shadow-md hover:bg-gray-100 transition-all w-full sm:w-auto">
              {hero.buttons.secondary}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {/* h-[300px] on mobile, h-[400px] on tablets, and fill height on desktop */}
        <div className="flex-1 relative h-[300px] sm:h-[400px] lg:h-auto min-h-[400px] lg:min-h-full">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  );
}