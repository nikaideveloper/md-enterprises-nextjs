"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Import the icon
import { homePageData } from '@/config/home';

const GallerySection = () => {
  const { gallery } = homePageData;

  const gridSpans = [
    "lg:col-span-3",
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-3",
  ];

  return (
    <section className="py-16 bg-[#fff]">
      <div className="container mx-auto px-4">
        {/* Header Style */}
        <div className="text-center mb-12">
          <span className="text-[#A2C93A] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-3">
           Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase">
            Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {gallery.items.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden group h-[280px] md:h-[320px] cursor-pointer ${gridSpans[index] || "lg:col-span-4"}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#8c8c64]/20 to-transparent backdrop-blur-[2px]"></div> */}
              {/* <div className="absolute bottom-6 left-6 z-10">
                <p className="text-white text-lg font-light tracking-wide transform transition-transform duration-500 group-hover:translate-x-2">
                  {item.title}
                </p>
              </div> */}
            </div>
          ))}
        </div>

        {/* View More Button with Arrow */}
        <div className="mt-12 text-center">
          <Link 
            href="/gallery" 
            className="group inline-flex items-center gap-3 px-8 py-3 bg-[#A2C93A] text-white font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary hover:shadow-xl active:scale-95"
          >
            <span>View More</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;