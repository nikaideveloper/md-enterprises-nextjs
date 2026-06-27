"use client";
import React, { useState } from "react";
import Image from "next/image";
import { productsPageData } from "@/config/product";
import {
  Plus,
  Minus,
  Settings,
  ShieldCheck,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const FAQSection = () => {
  const { faqs } = productsPageData;
  const [openIndex, setOpenIndex] = useState(-1);

  const getIcon = (iconName) => {
    const iconProps = { className: "text-green-700", size: 32 };
    switch (iconName) {
      case "performance": return <Settings {...iconProps} />;
      case "durable": return <ShieldCheck {...iconProps} />;
      case "maintenance": return <Wrench {...iconProps} />;
      case "quality": return <BadgeCheck {...iconProps} />;
      default: return <Settings {...iconProps} />;
    }
  };

  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-700 font-bold text-sm block mb-2 uppercase tracking-[0.2em]">
            {faqs.header.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {faqs.header.title}
          </h2>
          <div className="h-1 bg-green-700 mx-auto mb-8 w-16" />
          <p className="text-gray-600 text-lg leading-relaxed">
            {faqs.header.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image Area */}
          <div className="flex flex-col">
            <div className="relative mb-1 flex justify-center">
              {/* Static Background Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-green-100 rounded-full -z-10" />

              <div className="relative w-full h-[400px] md:h-[550px]">
                <Image
                  src={faqs.sideContent.image}
                  alt={faqs.sideContent.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-4 bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              {faqs.sideContent.features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex flex-col items-center text-center p-4 md:p-6 cursor-default
                    ${index !== faqs.sideContent.features.length - 1 ? "border-r border-gray-100" : ""}`}
                >
                  <div className="mb-3 text-[#064e3b]">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-4">
            {faqs.questions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`relative border rounded-xl overflow-hidden ${
                    isOpen ? "shadow-xl ring-1 ring-black/5" : "border-gray-200"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-700 z-10" />
                  )}

                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left z-20 relative bg-white"
                  >
                    <span className={`font-bold text-sm md:text-base ${
                      isOpen ? "text-green-800" : "text-gray-700"
                    }`}>
                      {item.question}
                    </span>
                    <div className={`p-1 rounded-full ${isOpen ? "bg-green-700/10" : "bg-transparent"}`}>
                      {isOpen ? (
                        <Minus size={15} className="text-green-700" />
                      ) : (
                        <Plus size={15} className="text-green-700" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-50 bg-gray-50/30">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;