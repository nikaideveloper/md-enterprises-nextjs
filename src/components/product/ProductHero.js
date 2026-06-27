import React from 'react';
import { productsPageData } from '@/config/product'; // Adjust the import path as needed

export default function ProductHero() {
  const { hero } = productsPageData;

  // Function to split title for the two-tone effect (Black & Teal)
  const renderTitle = (title) => {
    const splitAt = "For Modern Industries";
    if (title.includes(splitAt)) {
      const parts = title.split(splitAt);
      return (
        <>
          {parts[0]} <br className="hidden md:block" />
          <span className="text-[#0B3D3D]">{splitAt}</span>
        </>
      );
    }
    return title;
  };

  return (
    <section className="w-full flex flex-col lg:flex-row min-h-[100px] overflow-hidden">
      
      {/* LEFT CONTENT SIDE */}
      {/* py-12 for mobile to give space; lg:py-2 keeps your desktop view */}
      <div className="w-full lg:w-[55%] bg-white px-6 py-12 md:px-16 lg:px-24 lg:py-2 flex flex-col justify-center">
        <div className="max-w-xl">
          {/* Lime Green Label */}
          <span className="text-[#A2C93A] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-6">
            {hero.label}
          </span>

          {/* Title: 3xl on mobile, your 4xl on desktop */}
          <h1 className="text-3xl md:text-5xl lg:text-4xl font-black text-black leading-[1.1] mb-8">
            {renderTitle(hero.title)}
          </h1>

          {/* Double Decorative Lines (Dark Teal) */}
          <div className="flex flex-col gap-2 mb-10">
            <div className="w-24 h-[3px] bg-[#0B3D3D]"></div>
            <div className="w-16 h-[3px] bg-[#0B3D3D]"></div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-xl leading-relaxed mb-12 max-w-md">
            {hero.description}
          </p>

          {/* Buttons: Stack on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a 
              href={hero.buttons.primary.link}
              className="bg-[#0B3D3D] text-white px-10 py-4 rounded-md font-bold text-sm shadow-lg hover:bg-[#082e2e] transition-all text-center"
            >
              {hero.buttons.primary.text}
            </a>
            <a 
              href={hero.buttons.secondary.link}
              className="bg-[#F2F4F7] text-black px-10 py-4 rounded-md font-bold text-sm shadow-[4px_4px_10px_rgba(0,0,0,0.05)] border border-gray-100 hover:bg-white transition-all text-center"
            >
              {hero.buttons.secondary.text}
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR (The Dark Teal Staggered Gallery) */}
      <div className="w-full lg:w-[55%] bg-[#0B3D3D] p-8 md:p-12 lg:p-6 flex flex-col justify-center gap-6 relative">
        {hero.featuredProducts.map((product, index) => (
          <div 
            key={product.id} 
            className={`
              bg-white p-4 flex items-center gap-4 shadow-2xl w-full max-w-[380px] transition-transform hover:scale-105
              ${index === 1 ? 'self-end' : 'self-start'} 
              ${index === 1 ? 'lg:translate-x-4' : ''} 
            `}
          >
            {/* Image Container */}
            <div className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center p-2">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Title & Lime Underline */}
            <div className="flex flex-col pr-4">
              <h3 className="text-black text-[10px] md:text-[13px] font-bold leading-tight mb-2 uppercase tracking-tight">
                {product.title}
              </h3>
              {/* Lime Underline */}
              <div className="w-12 h-[2.5px] bg-[#A2C93A]"></div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}