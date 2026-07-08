"use client";

import React from "react";
import Link from "next/link";
import { MoveLeft, Home, PhoneCall, Hammer } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f4f8f9] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#7ac900]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#114232]/5 blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Error Number Graphics */}
        <div className="relative mb-6 select-none">
          <h1 className="text-[110px] sm:text-[150px] md:text-[180px] font-black text-[#114232] leading-none tracking-tighter opacity-15">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171b1f] uppercase tracking-wide px-4">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Informative Subtext */}
        <div className="max-w-md mx-auto mb-10 px-4">
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
          </p>
        </div>

        {/* Quick Link Cards - High Engagement UX on Mobile and Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto mb-10 px-4">
          <Link
            href="/"
            className="flex flex-col items-center justify-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#7ac900] mb-3 group-hover:scale-110 transition-transform">
              <Home size={18} />
            </div>
            <span className="text-xs font-extrabold text-[#171b1f] uppercase tracking-wider">Homepage</span>
          </Link>

          <Link
            href="/services"
            className="flex flex-col items-center justify-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#7ac900] mb-3 group-hover:scale-110 transition-transform">
              <Hammer size={18} />
            </div>
            <span className="text-xs font-extrabold text-[#171b1f] uppercase tracking-wider">Services</span>
          </Link>

          <Link
            href="/contact"
            className="flex flex-col items-center justify-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#7ac900] mb-3 group-hover:scale-110 transition-transform">
              <PhoneCall size={18} />
            </div>
            <span className="text-xs font-extrabold text-[#171b1f] uppercase tracking-wider">Support</span>
          </Link>
        </div>

        {/* Primary Interactive Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#7ac900] hover:bg-[#66a800] text-white font-extrabold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-200 active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(0,0,0,0.15)] cursor-pointer"
          >
            <MoveLeft size={16} />
            <span>Go Back</span>
          </button>
        </div>

      </div>
    </main>
  );
}