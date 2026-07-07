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
    <section className="py-10 md:py-16 bg-[#fff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Style */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[#A2C93A] font-bold text-xs md:text-sm tracking-[0.2em] uppercase block mb-2 md:mb-3">
           Our Collection
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase leading-tight">
            Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {gallery.items.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden group h-[200px] sm:h-[260px] md:h-[320px] cursor-pointer ${gridSpans[index] || "lg:col-span-4"}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* View More Button with Arrow */}
        <div className="mt-8 md:mt-12 text-center">
          <Link 
            href="/gallery" 
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 bg-[#A2C93A] text-white font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary hover:shadow-xl active:scale-95"
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