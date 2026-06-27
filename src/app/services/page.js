import Achievements from "@/components/layout/Achievements";
import SupportCTA from "@/components/layout/SupportCTA";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import WhyChooseUs from "@/components/services/WhyChooseUs ";

export const metadata = {
  title: "Our Services | MD Enterprises",
  description: "Explore the wide range of services MD Enterprises offers, including industrial support, strategic consulting, and custom solutions.",
  keywords: ["MD Services", "Consulting", "Industrial Support", "Business Growth", "Professional Solutions"],
};

export default function ServicesPage() {
  return (
   <main>
    <ServicesHero/>
    <ServicesGrid/>
    <ServiceProcess/>
    <WhyChooseUs/>
    <Achievements/>
    <SupportCTA/>
   </main>
  );
}