import React from 'react';
import { productsPageData } from '@/config/product'; // Adjust based on your file path

export default function MachineCategories() {
  const { categories } = productsPageData;

  return (
    <section className="w-full bg-[#F8FAFB] py-16 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-[#A2C93A] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-3">
          {categories.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a]">
          {categories.title}
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.items.map((category, index) => (
          <div
            key={category.id}
            className={`
              bg-white flex flex-col items-center justify-between p-6 transition-all cursor-pointer group hover:shadow-lg
              border-2 
              ${ 'border-gray-100'} 
              /* Only the first item has the dark teal border based on the image */
            `}
          >
            {/* Machine Image */}
            <div className="w-full h-40 md:h-48 flex items-center justify-center mb-6">
              <img
                src={category.image}
                alt={category.alt}
                className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Machine Title */}
            <div className="text-center">
              <p className="text-[#333333] text-[13px] md:text-[14px] font-bold leading-snug px-2">
                {category.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}