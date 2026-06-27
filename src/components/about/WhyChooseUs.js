import React from 'react';
import { aboutPageData } from '@/config/about';

export default function WhyChooseUs() {
  const { whyChooseUs } = aboutPageData;

  return (
    <section className="w-full bg-[#f4f8f9] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-9">
          <p className="text-[#7ac900] text-xs md:text-sm font-extrabold uppercase mb-3">
            {whyChooseUs.label}
          </p>

          <h2 className="text-2xl md:text-[28px] font-extrabold text-[#171b1f] leading-tight">
            {whyChooseUs.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {whyChooseUs.items.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[260px] px-5 pt-8 pb-6 flex flex-col items-center text-center shadow-[4px_4px_0px_rgba(0,0,0,0.16)]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-[54px] h-[54px] object-contain mb-6"
              />

              <h3 className="text-[13px] md:text-sm font-extrabold text-[#171b1f] mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="text-[11px] md:text-xs text-gray-500 leading-snug max-w-[150px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}