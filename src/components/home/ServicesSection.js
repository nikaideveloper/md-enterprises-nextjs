"use client";

import { homePageData } from "@/config/home";
import { 
  ArrowUpRight, 
  Settings, 
  LayoutDashboard, 
  Zap, 
  Cpu, 
  Component, 
  ShieldCheck 
} from "lucide-react";

export default function ServicesSection() {
  const { services } = homePageData;

  // Mapping icons to the data keys
  const iconMap = {
    machine: <Settings size={30} strokeWidth={1.5} />,
    installation: <LayoutDashboard size={30} strokeWidth={1.5} />,
    repair: <Zap size={30} strokeWidth={1.5} />,
    maintenance: <Cpu size={30} strokeWidth={1.5} />,
    parts: <Component size={30} strokeWidth={1.5} />,
    support: <ShieldCheck size={30} strokeWidth={1.5} />,
  };

  return (
    <section className="bg-[#f8fafd] py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {services.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start relative group cursor-pointer"
            >
              {/* Top Row: Icon and Arrow */}
              <div className="w-full flex justify-between items-start mb-8">
                <div className="text-gray-800">
                  {iconMap[item.icon] || <Settings size={30} strokeWidth={1.5} />}
                </div>
                <div className="text-black group-hover:text-gray-900 transition-colors">
                  <ArrowUpRight size={24} strokeWidth={1.5} />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}