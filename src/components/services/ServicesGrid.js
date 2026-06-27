'use client';

import React from 'react';
import Image from 'next/image';
import { servicesPageData } from '@/config/services';

export default function ServicesGrid() {
  const { servicesList } = servicesPageData;

  return (
    <section className="py-10 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lime-500 font-bold text-sm tracking-widest uppercase mb-3">
            {servicesList.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {servicesList.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {servicesList.items.map((service, index) => (
            <div
              key={index}
              className={`group bg-white p-4 flex flex-col items-center text-center border-transparent hover:border-gray-100 hover:shadow-md transition-all duration-300 border-2 
             `}
            >
              {/* Image Icon Container */}
              <div className="relative w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold  mb-4 leading-tight min-h-[3rem] flex items-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm ">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}