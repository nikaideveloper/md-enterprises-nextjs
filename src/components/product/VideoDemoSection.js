"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { productsPageData } from '@/config/product';
import { Play } from 'lucide-react';

const VideoDemoSection = () => {
  const { videoDemo } = productsPageData;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header Section: Matches the Image Layout */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mb-4 text-[#A2C93A]">
            {videoDemo.label}
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Precision Sealing In Action
          </h2>

          <p className="text-gray-500 text-lg md:text-lg font-light leading-relaxed mb-8">
            {videoDemo.description}
          </p>

         
        </div>

        {/* Video Player Section: Large rounded corners like the image */}
        <div className="max-w-6xl mx-auto relative group">
          <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden ">
            
            {!isPlaying ? (
              <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                {/* Thumbnail */}
                <Image
                  src={videoDemo.videoThumbnail}
                  alt="Video Thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Darker overlay for play button visibility */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

                {/* Custom Play Button UI matching the image's "Glass" style */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-18 md:h-18 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                    <Play fill="white" className="text-white w-8 h-8 md:w-8 md:h-8 ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              /* YouTube Embed */
              <iframe
                src={`${videoDemo.videoUrl}?autoplay=1`}
                title="Product Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Decorative bottom lines/glow (Subtle for white theme) */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemoSection;