import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import FounderSection from "@/components/about/FounderSection";
import IndustriesServed from "@/components/about/IndustriesServed";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Achievements from "@/components/layout/Achievements";
import SupportCTA from "@/components/layout/SupportCTA";

export const metadata = {
  title: "About Us | MD Enterprises",
  description: "Learn about MD Enterprises, our mission to drive industry growth, our vision for the future, and the values that make us a trusted partner.",
  keywords: ["About MD Enterprises", "Company History", "Mission and Vision", "Our Team", "Core Values"],
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero/>
      <CompanyOverview/>
      <FounderSection/>
      <MissionVision/>
      <WhyChooseUs/>
      <IndustriesServed/>
      <Achievements/>
      <SupportCTA/>
    </main>
  );
}