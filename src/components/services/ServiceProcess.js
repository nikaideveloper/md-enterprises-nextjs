'use client';

import React from 'react';
import Image from 'next/image';
import { servicesPageData } from '@/config/services';

export default function ServiceProcess() {
  const { serviceProcess } = servicesPageData;

  return (
    <section className="py-5 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lime-500 font-bold text-sm tracking-widest uppercase mb-3">
            {serviceProcess.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {serviceProcess.title}
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Horizontal Dashed Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-[0%] right-[10%] border-t-2 border-dashed border-gray-400 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {serviceProcess.steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group z-10">
                
                {/* Icon Circle Container */}
                <div className="relative mb-8">
                  {/* Number Badge (Small Lime Circle) */}
                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#d4f86d] rounded-full flex items-center justify-center border-4 border-[#f8f9fa] z-20">
                    <span className="text-gray-800 font-bold text-sm">
                      {parseInt(step.number)}
                    </span>
                  </div>

                  {/* Main Sage Green Circle */}
                  <div className="w-32 h-32 rounded-full bg-[#96a996] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <div className="relative w-14 h-14">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-contain brightness-0 grayscale" // Makes icons black like the image
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="max-w-[250px]">
                  <h3 className="text-gray-900 font-bold text-xl mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>

                {/* Vertical Line for Mobile/Tablet */}
                {index !== serviceProcess.steps.length - 1 && (
                  <div className="lg:hidden h-12 w-0 border-l-2 border-dashed border-gray-400 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}