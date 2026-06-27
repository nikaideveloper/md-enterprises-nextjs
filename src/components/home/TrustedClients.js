import React from 'react';
import Image from 'next/image';
import { homePageData } from '@/config/home';

const TrustedClients = () => {
  const { trustedClients } = homePageData;

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Label */}
        <h3 className="text-center text-green-700 font-bold tracking-widest text-sm mb-10">
          {trustedClients.label}
        </h3>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustedClients.items.map((client) => (
            <div 
              key={client.id} 
              className="bg-white border border-gray-100 rounded-lg  flex items-center justify-center transition-all hover:shadow-md hover:border-gray-200"
            >
              <div className="relative w-full h-28">
                <Image
                  src={client.image}
                  alt={client.alt}
                  fill
                  className="object-contain  hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;