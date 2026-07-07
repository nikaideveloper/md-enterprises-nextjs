"use client";

import { homePageData } from "@/config/home";
import { motion } from "framer-motion";

export default function CompanyStats() {
  const { companyStats } = homePageData;

  // Exact coordinates and layering to match the reference UI
  const cardConfigs = [
    {
      bg: "bg-[#114232]", // Dark Green
      text: "text-white",
      desc: "text-gray-300",
      // Position: Top Left (Desktop)
      position: "lg:top-0 lg:left-[10%] z-10",
      mobileOrder: "order-1",
    },
    {
      bg: "bg-white", // White
      text: "text-gray-900",
      desc: "text-gray-500",
      // Position: Middle Right (Desktop)
      position: "lg:top-[20%] lg:right-[5%] z-20 shadow-xl",
      mobileOrder: "order-2",
    },
    {
      bg: "bg-[#C6FF71]", // Lime Green
      text: "text-black",
      desc: "text-gray-800",
      // Position: Bottom Left/Center (Desktop)
      position: "lg:bottom-0 lg:left-[20%] z-30 shadow-lg",
      mobileOrder: "order-3",
    },
  ];

  return (
    <section className="bg-[#f8fafd] py-12 sm:py-16 lg:py-24 px-4 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section - Responsive */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#114232] mb-4 sm:mb-6 leading-tight px-2 sm:px-4">
            {companyStats.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4">
            {companyStats.subtitle}
          </p>
        </div>

        {/* Desktop: Circular Stats Container (Unchanged) */}
        <div className="hidden lg:block relative w-full max-w-[850px] mx-auto h-[600px] xl:h-[650px]">
          {/* Background Concentric Dashed Circles - Desktop Only */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            {[90, 290, 490, 690].map((size, i) => (
              <div
                key={i}
                className="absolute border border-dashed border-gray-400 rounded-full"
                style={{ width: `${size}px`, height: `${size}px` }}
              />
            ))}
          </div>

          {/* Desktop Positioned Circles */}
          <div className="relative w-full h-full">
            {companyStats.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`
                  absolute
                  ${cardConfigs[index].position}
                  ${cardConfigs[index].bg} 
                  ${cardConfigs[index].text}
                  w-[300px] h-[300px] xl:w-[320px] xl:h-[320px]
                  rounded-full flex flex-col items-center justify-center p-10 text-center
                  transition-transform hover:scale-105 duration-300
                `}
              >
                <span className="text-5xl xl:text-6xl font-bold mb-2">
                  {stat.number}
                </span>
                <h3 className="text-base xl:text-lg font-bold mb-3 uppercase tracking-wider">
                  {stat.title}
                </h3>
                <p
                  className={`${cardConfigs[index].desc} text-xs xl:text-sm leading-relaxed max-w-[220px]`}
                >
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Stacked/Grid Layout */}
        <div className="lg:hidden flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl mx-auto">
          {companyStats.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`
                ${cardConfigs[index].bg} 
                ${cardConfigs[index].text}
                ${cardConfigs[index].mobileOrder}
                w-full aspect-square max-w-[260px] sm:max-w-[280px] xs:max-w-[240px]
                rounded-full flex flex-col items-center justify-center p-6 sm:p-10 text-center
                transition-transform hover:scale-105 active:scale-95 duration-300
                shadow-lg
              `}
            >
              <span className="text-4xl sm:text-5xl font-bold mb-2">
                {stat.number}
              </span>
              <h3 className="text-xs sm:text-sm md:text-base font-bold mb-2 uppercase tracking-wider px-2">
                {stat.title}
              </h3>
              <p
                className={`${cardConfigs[index].desc} text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-[180px] sm:max-w-[200px]`}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Background Decoration */}
        <div className="lg:hidden absolute inset-0 pointer-events-none opacity-10 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 border-2 border-dashed border-[#114232] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-dashed border-[#C6FF71] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}