"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { homePageData } from "@/config/home";
import Image from "next/image";
import {
  Gauge, Target, Wrench, Zap,
  Youtube, X, Loader2, Mic, Video, PhoneOff, UserPlus, MoreHorizontal
} from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { hero } = homePageData;
  const [isMobile, setIsMobile] = useState(false);

  // Modal States
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  // Map icons to the highlights based on text
  const getIcon = (name, size = 18) => {
    switch (name.toLowerCase()) {
      case "speed": return <Gauge size={size} />;
      case "precision": return <Target size={size} />;
      case "customize": return <Wrench size={size} />;
      case "efficiency": return <Zap size={size} />;
      default: return <Zap size={size} />;
    }
  };

  return (
    <section className="bg-primary pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-10 md:pb-12 lg:pb-14 px-4 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-10 lg:gap-12">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {hero.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/products"
                className="bg-white text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-gray-100 active:scale-95 transition-all shadow-lg text-sm sm:text-base w-full sm:w-auto inline-flex items-center justify-center"
              >
                {hero.buttonText}
              </Link>

              {/* YouTube Trigger Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-3 text-white font-medium px-6 py-2.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-all w-full sm:w-auto group"
              >
                <Youtube className=" group-hover:scale-110 transition-transform" size={24} />
                <span>Watch Video</span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Highlights */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end">
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 md:gap-4 w-full lg:w-auto">
              {hero.highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`
                    bg-[#395c48] backdrop-blur-md border border-white/10 text-white 
                    px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 
                    rounded-md flex items-center justify-center lg:justify-start
                    gap-2 sm:gap-3 
                    hover:bg-black/40 active:scale-95 transition-all
                    ${isMobile ? 'w-full' : 'w-fit min-w-[140px]'}
                  `}
                  style={{
                    marginLeft: !isMobile ? `${index * 5}rem` : '0'
                  }}
                >
                  <span className="text-white/80 flex-shrink-0">
                    {getIcon(item, isMobile ? 16 : 18)}
                  </span>
                  <span className="font-medium ml-auto mr-auto tracking-wide text-xs sm:text-sm md:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Machine Images */}


        {/* Bottom Section: Machine Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {hero.bottomImages.map((img, idx) => (
            // 1. Changed div to Link
            // 2. Added `block` to className so flexbox works properly
            // 3. Changed ${img.id} to ${idx + 1}
            <Link
              key={idx}
              href={`/products?productId=${idx + 1}`}
              className="block bg-white rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-4 sm:p-6 md:p-8 h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center shadow-2xl relative group overflow-hidden cursor-pointer"
            >
              <Image
                src={img.image}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
                priority={idx === 0}
              />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* --- REFINED VIDEO MODAL (Browser-Style) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#F9FAFB] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* TOP BROWSER BAR */}
              <div className="bg-white p-4 flex items-center border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-[#E5E7EB]" />
                </div>
                <div className="mx-auto h-2.5 w-32 bg-gray-100 rounded-full" />
                <button onClick={() => setIsOpen(false)} className="text-gray-950 cursor-pointer hover:text-amber-950 transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* VIDEO AREA */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-10">
                    <Loader2 className="animate-spin text-white/20" size={32} />
                  </div>
                )}

                <iframe
                  src={`${hero.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube Video"
                  onLoad={() => setIsLoading(false)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}