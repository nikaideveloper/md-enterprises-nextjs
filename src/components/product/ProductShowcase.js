'use client';
import React, { useState, useEffect, useRef } from 'react'; // 1. Added useRef
import Image from 'next/image';
import { Star } from 'lucide-react';
import { productsPageData } from '@/config/product';

export default function ProductShowcase() {
  const [selectedId, setSelectedId] = useState(1);
  const { categories, productDetails } = productsPageData;
  const product = productDetails[selectedId];

  // 2. Create the reference
  const productInfoRef = useRef(null);

  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0].url);
    }
  }, [selectedId, product]);

  // 3. Create a handle click function
  const handleCategoryClick = (id) => {
    setSelectedId(id);
    // Smooth scroll to the section
    productInfoRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  return (
    <div className="bg-[#F8FAFB] min-h-screen">
      {/* SECTION 1: MACHINE CATEGORIES */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <span className="text-[#A2C93A] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-3">
            {categories.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a]">
            {categories.title}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCategoryClick(item.id)} // 4. Updated onClick
              className={`
                bg-white flex flex-col items-center justify-between p-6 transition-all cursor-pointer group hover:shadow-lg border-2 
                ${selectedId === item.id ? 'border-[#0f4c4c]' : 'border-gray-100'}
              `}
            >
              <div className="w-full h-40 flex items-center justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <p className="text-[#333333] text-[13px] font-bold leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: PRODUCT INFO (Updating Dynamically) */}
      {/* 5. Attach the ref here */}
      <section ref={productInfoRef} className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-8 rounded-xl shadow-sm">
          
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative flex-1 bg-white border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-4 min-h-[400px] md:min-h-[485px]">
              {activeImage && (
                <Image
                  src={activeImage}
                  alt={product.title}
                  fill
                  className="object-contain p-4 transition-opacity duration-300"
                  priority
                />
              )}
            </div>

            <div className="flex gap-4 overflow-x-auto py-2 justify-center">
              {product.images?.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(img.url)}
                  className={`relative w-20 h-20 border-2 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                    activeImage === img.url ? 'border-[#0f4c4c]' : 'border-gray-200'
                  }`}
                >
                  <Image src={img.url} alt={img.alt} fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <h3 className="text-green-600 font-semibold text-lg">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-[#0f4c4c] font-semibold mb-4 underline underline-offset-8">
                Specifications
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-gray-900 font-bold text-xs uppercase tracking-wider">{key}</p>
                    <p className="text-gray-600 text-xs mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#0f4c4c] text-white px-10 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all">
                {product.buttons.primary.text}
              </button>
              <button className="bg-white text-gray-700 border border-gray-200 px-10 py-3 rounded-md font-bold hover:bg-gray-50 transition-all">
                {product.buttons.secondary.text}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}