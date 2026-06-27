import Image from "next/image";
import { servicesPageData } from "@/config/services"; // Adjust path based on your alias

const WhyChooseUs = () => {
      const {     whyChooseUs } = servicesPageData;
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 md:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#8CC63F] font-bold tracking-[0.2em] text-sm mb-3">
            {whyChooseUs.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            {whyChooseUs.title}
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
          {whyChooseUs.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 md:p-12 flex flex-col items-center text-center border-r border-b border-gray-200 transition-all duration-300 hover:bg-gray-50/50"
            >
              {/* Icon Container */}
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                  // Use this if your icons need that specific dark teal color via CSS:
                  // style={{ filter: 'invert(18%) sepia(21%) saturate(3083%) hue-rotate(142deg) brightness(91%) contrast(101%)' }}
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[19px] font-bold text-[#1a1a1a] mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed max-w-[240px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;