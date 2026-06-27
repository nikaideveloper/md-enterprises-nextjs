import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { homePageData } from "@/config/home";

const ProcessBanner = () => {
  // Destructure processBanner from the homePageData object
  const { processBanner } = homePageData;

  return (
    <section className="px-4 py-2">
      <div className="max-w-7xl mx-auto bg-[#0E8A4E] p-8 md:p-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-medium max-w-md leading-tight">
            {processBanner.title}
          </h2>
          
          <Link
            href={processBanner.primaryButton.link}
            className="bg-white text-[#1a1a1a] px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors"
          >
            {processBanner.primaryButton.label}
          </Link>
        </div>

        {/* Image with Black Border */}
        <div className="relative w-full h-40 md:h-60 border-[3px] border-black overflow-hidden mb-10">
          <Image
            src={processBanner.image.src}
            alt={processBanner.image.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Footer Link */}
        <Link
          href={processBanner.footerLink.link}
          className="inline-flex items-center gap-4 group"
        >
          <div className="bg-white w-10 h-10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <MoveRight size={20} className="text-[#109D59]" />
          </div>
          <span className="text-white text-sm font-semibold uppercase tracking-wider">
            {processBanner.footerLink.label}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProcessBanner;