import React from 'react';
import { commonData } from '@/config/commonData';

export default function Achievements() {
  const { achievements } = commonData;

  return (
    <section className="w-full bg-[#f3f6f6] py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-9">
          <span className="block text-[#9cc63b] text-xs md:text-sm font-bold uppercase tracking-wide mb-2">
            {achievements.label}
          </span>

          <h2 className="text-[#202020] text-2xl md:text-4xl font-bold leading-tight">
            {achievements.title}
          </h2>
        </div>

        {/* Dark Green Stats Bar */}
        <div className="bg-[#0f4f43] w-full px-6 md:px-10 lg:px-14 py-7 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {achievements.stats.map((stat, index) => (
              <div
                key={index}
                className={`
                  flex items-center justify-center gap-5 py-5 md:py-0
                  ${
                    index !== achievements.stats.length - 1
                      ? 'md:border-r md:border-white/45'
                      : ''
                  }
                `}
              >
                {/* Image Icon */}
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <img
                    src={stat.image}
                    alt={stat.alt}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Text */}
                <div className="text-left">
                  <h3 className="text-white text-3xl md:text-4xl font-bold leading-none mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-white text-xs md:text-sm font-semibold leading-tight">
                    {stat.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}