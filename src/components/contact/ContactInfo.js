'use client';

import React from 'react';
import Image from 'next/image';
import { contactPageData } from '@/config/contact';

export default function ContactInfo() {
  const { contactInfo } = contactPageData;

  return (
    <section className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-sm">
          
          {contactInfo.items.map((item, index) => (
            <div key={index} className="p-4 flex flex-col items-start">
              
              {/* Header: First is horizontal, others are vertical */}
              <div className={`flex ${index === 0 ? 'flex-row items-center gap-3' : 'flex-col items-start gap-5'} mb-4`}>
                
                {/* Icon Circle - Small for first, Large for others */}
                <div className={`rounded-full bg-[#a3c17a] flex items-center justify-center flex-shrink-0 
                  ${index === 0 ? 'w-8 h-8' : 'w-16 h-16'}`}
                >
                  <div className={`relative ${index === 0 ? 'w-4 h-4' : 'w-6 h-6'}`}>
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      fill
                      className="object-contain brightness-0" 
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-[17px] leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Short Teal Underline */}
              <div className="h-[2.5px] w-12 bg-[#0f4c4c] mb-6"></div>

              {/* Details Text */}
              <div className="space-y-1">
                {item.details.map((line, idx) => (
                  <p key={idx} className="text-gray-700 text-[13px] leading-relaxed max-w-[210px]">
                    {line}
                  </p>
                ))}
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}