import CompanyStats from "@/components/home/CompanyStats";
import HeroSection from "@/components/home/HeroSection";
import ProcessBanner from "@/components/home/ProcessBanner";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import TrustedClients from "@/components/home/TrustedClients";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GallerySection from "@/components/home/GallerySection";

export const metadata = {
  title: "Home | MD Enterprises",
  description: "Welcome to MD Enterprises. We deliver excellence through innovation, quality, and dedicated support across multiple industries.",
  keywords: ["MD Enterprises", "Business Solutions", "Innovation", "Corporate Services", "Industry Leader"],
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection/>
      <ProcessBanner/>
      <CompanyStats/>
      <WhyChooseUs/>
      <Testimonials/>
      {/* <TrustedClients/> */}
       <GallerySection/>
    </main>
  );
}