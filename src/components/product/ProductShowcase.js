'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { productsPageData } from '@/config/product';
// 1. Import useSearchParams
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
export default function ProductShowcase() {
  const [selectedId, setSelectedId] = useState(1);
  const { categories, productDetails } = productsPageData;
  const product = productDetails[selectedId];

  // 2. Initialize search params
  const searchParams = useSearchParams();
  const productIdParam = searchParams.get('productId');

  const productInfoRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [activeImage, setActiveImage] = useState('');

  // 3. New Effect: Handle the incoming ID from the Hero section
  useEffect(() => {
    if (productIdParam) {
      const id = parseInt(productIdParam);
      if (!isNaN(id) && productDetails[id]) {
        setSelectedId(id);
        // Optional: Scroll to the product info automatically when coming from Hero
        setTimeout(() => {
          productInfoRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [productIdParam, productDetails]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0].url);
    }
  }, [selectedId, product]);

  const handleCategoryClick = (id) => {
    setSelectedId(id);
    productInfoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#F8FAFB] min-h-screen">
      {/* ... Rest of your code remains exactly the same ... */}
      <section id='all-products' className="w-full py-16 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <span className="text-[#A2C93A] font-bold text-[14px] tracking-[0.2em] uppercase block mb-3">
            {categories.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a]">
            {categories.title}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-8 scrollbar-hide snap-x scroll-smooth"
          >
            {categories.items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCategoryClick(item.id)}
                className={`
                  flex-shrink-0 w-[220px] snap-start bg-white flex flex-col items-center justify-between p-6 transition-all cursor-pointer group hover:shadow-lg border-2 
                  ${selectedId === item.id ? 'border-[#0f4c4c]' : 'border-gray-100'}
                `}
              >
                <div className="w-full h-32 flex items-center justify-center mb-4">
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

          {/* <div className="flex justify-center items-center gap-4 mt-0">
            <button
              onClick={() => scroll('left')}
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-[#0f4c4c] hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="h-1 w-20 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#0f4c4c] w-1/3 animate-pulse"></div>
            </div>
            <button
              onClick={() => scroll('right')}
              className="bg-white border border-gray-200 p-3 rounded-full hover:bg-[#0f4c4c] hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div> */}
        </div>
      </section>

      <section ref={productInfoRef} className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch bg-white p-6 md:p-10 rounded-xl shadow-md border border-gray-50">
          <div className="flex flex-col w-full h-full min-h-[500px]">
            <div className="relative flex-1 bg-white border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              {activeImage && (
                <Image
                  src={activeImage}
                  alt={product.title}
                  fill
                  className="object-contain p-2 transition-opacity duration-300"
                  priority
                />
              )}
            </div>

            <div className="flex gap-4 overflow-x-auto py-2 justify-center">
              {product.images?.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(img.url)}
                  className={`relative w-20 h-20 border-2 rounded-md overflow-hidden flex-shrink-0 transition-all ${activeImage === img.url ? 'border-[#0f4c4c]' : 'border-gray-200'
                    }`}
                >
                  <Image src={img.url} alt={img.alt} fill className="object-contain p-1" />
                </button>
              ))}
            </div>

     <div className="flex flex-wrap justify-center gap-4 pt-5">
  <Link href="/inquiry-now">
    <button className="bg-[#0f4c4c] text-white px-10 py-4 rounded-lg font-bold hover:shadow-lg transition-all text-sm uppercase tracking-wider">
      {product.buttons.primary.text}
    </button>
  </Link>

  <Link href="/contact">
    <button className="bg-white text-gray-700 border border-gray-200 px-10 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all text-sm uppercase tracking-wider">
      {product.buttons.secondary.text}
    </button>
  </Link>
</div>
          </div>

          <div className="flex flex-col justify-between w-full h-full">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>

              <div className="border border-gray-100 rounded-xl p-6 bg-[#fafafa]">
                <h3 className="text-[#0f4c4c] font-black mb-6 text-sm uppercase tracking-widest border-b pb-2">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col group">
                      <p className="text-[#0f4c4c] font-bold text-[10px] uppercase tracking-tight mb-1 opacity-70">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-gray-900 text-[13px] font-semibold border-l-2 border-[#A2C93A] pl-2">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}