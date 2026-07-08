"use client";
import React from 'react';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { productsPageData } from '@/config/product';

const OtherSolutions = () => {
      const data = productsPageData.otherSolutions
  if (!data) return null;

  return (
    <section className="bg-white py-6 px-2">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Top Decorative Header: Line - Text - Line */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 md:w-20 bg-gray-300"></div>
          <span className="text-[#65a34a] font-bold text-[13px] uppercase tracking-[0.3em]">
            {data.title}
          </span>
          <div className="h-[1px] w-12 md:w-20 bg-gray-300"></div>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 tracking-tight">
          More Sealing Machines
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          {data.description}
        </p>

        {/* Product Links with Vertical Dividers */}
        <div className="flex flex-wrap justify-center items-center gap-y-4 mb-12">
          {data.items.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="bg-slate-50 border-l-4 border-[#65a34a] rounded-r-lg p-5 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
  <p className="text-[#0a2540] font-bold text-sm md:text-base">
    {item.title} Sealer
  </p>
</div>

                 <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 tracking-tight">
          {data.subTitle}
        </h2>
              
              {/* Vertical Pipe Divider (Hidden after the last item) */}
              {index !== data.items.length - 1 && (
                <div className="hidden md:block h-6 w-[1px] bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
          
          {/* Static Item to match your image exactly if data is short */}
          
        </div>

        {/* Centered Green Button */}
        {/* <div className="flex justify-center">
          <Link 
            href="/products" 
            className="group flex items-center gap-3 bg-[#65a34a] hover:bg-[#548a3d] text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            View All Machines
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div> */}

      </div>
    </section>
  );
};

export default OtherSolutions;