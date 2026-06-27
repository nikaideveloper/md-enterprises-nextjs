'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { productsPageData } from '@/config/product';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BabyBandSealingMachine() {
  // Accessing the specific product data (ID 1 as per your config)
  const product = productsPageData.productDetails[1];
  const [activeImage, setActiveImage] = useState(product.images[0].url);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE: Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-white border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-4">
            <Image
              src={activeImage}
              alt={product.alt}
              fill
              className="object-contain p-4"
              priority
            />
          </div>

          {/* Thumbnails Slider */}
          <div className="flex items-center  justify-center gap-5">
           
            
            <div className="flex gap-8 overflow-x-auto py-2">
              {product.images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(img.url)}
                  className={`relative w-24 h-24 border-2 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                    activeImage === img.url ? 'border-teal-700' : 'border-gray-200'
                  }`}
                >
                  <Image src={img.url} alt={img.alt} fill className="object-contain p-1" />
                </button>
              ))}
              {/* Placeholder for empty boxes seen in your image */}
              {[...Array(Math.max(0, 3 - product.images.length))].map((_, i) => (
                <div key={i} className="w-24 h-24 border border-gray-200 rounded-md bg-gray-50 flex-shrink-0" />
              ))}
            </div>

            
          </div>
        </div>

        {/* RIGHT SIDE: Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {product.title}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Key Features Section */}
          <div className="space-y-4">
            <h3 className="text-green-600 font-semibold text-lg">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {product.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-green-500 fill-green-500" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Table Box */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h3 className="text-teal-800 font-semibold mb-4 underline decoration-teal-800 underline-offset-4">
              Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
              <div>
                <p className="text-gray-900 font-bold text-sm">Model</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.model}</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Power</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.power}</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Conveyor Speed</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.conveyorSpeed}</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Machine Size</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.machineSize}</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Voltage</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.voltage}</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Sealing Width</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.sealingWidth}</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Temperature Range</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.temperatureRange}</p>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Machine Weight</p>
                <p className="text-gray-600 text-xs mt-1">{product.specifications.machineWeight}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-8 pt-4">
            <button className="bg-[#0f4c4c] text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md">
              {product.buttons.primary.text}
            </button>
            <button className="bg-gray-50 text-gray-700 border border-gray-200 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all shadow-sm">
              {product.buttons.secondary.text}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}