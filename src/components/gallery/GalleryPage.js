"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { galleryPageData } from '@/config/gallery';

const GalleryPage = () => {
  const { header, items } = galleryPageData;

  /**
   * This function repeats the pattern from your image every 6 items.
   * Row 1: 3-6-3 span
   * Row 2: 4-5-3 span
   */
  const getGridStyles = (index) => {
    const patternIndex = index % 6; // Repeats the logic every 6 images
    
    switch (patternIndex) {
      case 0: return "md:col-span-3 h-[300px]"; 
      case 1: return "md:col-span-6 h-[300px]"; 
      case 2: return "md:col-span-3 h-[300px]"; 
      case 3: return "md:col-span-4 h-[350px]"; 
      case 4: return "md:col-span-5 h-[350px]"; 
      case 5: return "md:col-span-3 h-[350px]"; 
      default: return "md:col-span-4 h-[300px]";
    }
  };

  return (
    <section className="bg-[#ffff] py-10 px-4 md:px-10 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Page Header */}
        <header className="mb-12 ml-1">
          <h1 className="text-4xl text-center font-light text-gray-900 tracking-tight">
            {header.title}
          </h1>
          <p className="text-gray-500 text-center mt-3 text-sm uppercase tracking-[0.2em]">
           {header.subtitle}
          </p>
        </header>

        {/* Dynamic Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              className={`relative group overflow-hidden rounded-sm bg-gray-200 ${getGridStyles(index)}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />

              {/* The Soft Gradient Shadow (Matches your image exactly) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Label Text */}
              {/* <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-light tracking-wide drop-shadow-md">
                  {item.alt}
                </p>
              </div> */}

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer Info
        <div className="mt-10 text-center border-t border-gray-300 pt-10">
          <p className="text-gray-400 text-xs uppercase tracking-widest">
            End of Gallery
          </p>
        </div> */}

      </div>
    </section>
  );
};

export default GalleryPage;