import React from 'react';
import Image from 'next/image';
import { aboutPageData } from '@/config/about';

const FounderSection = () => {
  const { founderSection } = aboutPageData;

  return (
    <section className="relative py-6 bg-white overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="10%" r="150" stroke="#a67c52" strokeWidth="0.5" />
          <path d="M-100 500 Q 200 300 500 500 T 1100 500" stroke="#a67c52" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-2 md:mb-6">
          <span className=" text-[#a5d332] font-bold text-sm md:text-base tracking-wider uppercase mb-3 block text-xs font-bold uppercase tracking-[0.3em] block mb-3">
            Our Leadership
          </span>
          <div className="w-12 h-[1px] bg-[#a67c52] mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          
          {/* 1. SINGLE IMAGE CONTAINER */}
         <div className="relative w-full lg:w-6/12 h-[350px] md:h-[450px] shadow-xl">
 <Image
  src={founderSection.image}
  alt={founderSection.name}
  fill
  className="object-cover object-[center_10%]" 
  priority
/>
</div>
          {/* 2. OVERLAPPING CONTENT CARD */}
          <div className="w-full lg:w-5/12 lg:-ml-16 mt-[-40px] lg:mt-0 z-20">
            <div className="bg-white p-6 md:p-10 shadow-2xl border-l-4 border-s-primary">
              {/* Optional: Small Quote Icon or Sub-title */}
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-8 font-light italic">
                "{founderSection.description}"
              </p>

              {/* Founder Details */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-gray-900 font-bold text-lg tracking-widest uppercase">
                  {founderSection.name}
                </h4>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                  {founderSection.role}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;