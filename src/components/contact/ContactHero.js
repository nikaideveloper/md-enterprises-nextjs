'use client';

import Image from 'next/image';
import { contactPageData } from '@/config/contact';
import Link from "next/link";
export default function ContactHero() {
  const { hero } = contactPageData;

  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[400px]">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-14">
          {/* Badge */}
          <span className="text-lime-500 font-bold text-sm tracking-widest uppercase mb-6">
            {hero.badge}
          </span>

          {/* Title with highlighted words */}
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 leading-[1.2] mb-8">
            {hero.title}
          </h1>

          {/* Decorative Double Line */}
          <div className="flex flex-col gap-1 mb-10">
            <div className="h-[2px] w-36 bg-[#0f4c4c]"></div>
            <div className="h-[2px] w-24 bg-[#0f4c4c]"></div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/inquiry-now"
              className="bg-[#0f4c4c] text-white px-10 py-4 rounded-md font-bold text-sm shadow-[0_4px_14px_0_rgba(15,76,76,0.39)] hover:bg-[#0a3636] transition-all inline-flex items-center justify-center"
            >
              {hero.buttons.primary}
            </Link>

            {/* Updated this Link href */}
            <Link
              href="#contact-form"
              className="bg-[#f8f9fa] text-gray-700 px-10 py-4 rounded-md font-bold text-sm border border-gray-100 shadow-md hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              {hero.buttons.secondary}
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-full">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  );
}