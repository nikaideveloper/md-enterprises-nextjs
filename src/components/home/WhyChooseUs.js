"use client";

import { homePageData } from "@/config/home";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { whyChooseUs } = homePageData;

  // Small categories seen in the image above the titles
  const taglines = [
    "Trusted Expertise",
    "Fast Assistance",
    "Affordable Solutions",
    "Long-Term Support",
  ];

  return (
    <section className="bg-white py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            {whyChooseUs.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {whyChooseUs.subtitle}
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {whyChooseUs.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 sm:gap-6"
            >
              {/* Left Side: Image */}
              <div className="w-full sm:w-1/2 relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Right Side: Text Content */}
              <div className="w-full sm:w-1/2 text-center sm:text-left pt-2 sm:pt-0">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2 block">
                  {taglines[index]}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#114232] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}