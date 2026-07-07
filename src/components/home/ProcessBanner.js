import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { homePageData } from "@/config/home";

const ProcessBanner = () => {
  // Destructure processBanner from the homePageData object
  const { processBanner } = homePageData;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 md:py-2">
      <div className="max-w-7xl mx-auto bg-[#0E8A4E] p-6 sm:p-8 md:p-12">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 md:mb-10">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium max-w-md leading-tight">
            {processBanner.title}
          </h2>
          
          <Link
            href={processBanner.primaryButton.link}
            className="w-full sm:w-auto text-center bg-white text-[#1a1a1a] px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors"
          >
            {processBanner.primaryButton.label}
          </Link>
        </div>

        {/* Image with Black Border */}
        <div className="relative w-full h-36 sm:h-48 md:h-60 border-[3px] border-black overflow-hidden mb-8 md:mb-10">
          <Image
            src={processBanner.image.src}
            alt={processBanner.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
            priority
          />
        </div>

        {/* Footer Link */}
        <div className="flex">
          <Link
            href={processBanner.footerLink.link}
            className="inline-flex items-center gap-4 group cursor-pointer"
          >
            <div className="bg-white w-10 h-10 flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
              <MoveRight size={20} className="text-[#109D59]" />
            </div>
            <span className="text-white text-sm font-semibold uppercase tracking-wider">
              {processBanner.footerLink.label}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessBanner;