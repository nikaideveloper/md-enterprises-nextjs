import SupportCTA from "@/components/layout/SupportCTA";
import BabyBandSealingMachine from "@/components/product/BabyBandSealingMachine";
import FAQSection from "@/components/product/FAQSection";
import MachineCategories from "@/components/product/MachineCategories";
import ProductHero from "@/components/product/ProductHero";
import ProductShowcase from "@/components/product/ProductShowcase";
import VideoDemoSection from "@/components/product/VideoDemoSection";

export const metadata = {
  title: "Products | MD Enterprises",
  description:
    "Browse MD Enterprises products by category to find the specific industrial solutions you need.",
  keywords: [
    "Product Categories",
    "MD Enterprises Inventory",
    "Industrial Solutions",
  ],
};
export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <ProductShowcase />
      <FAQSection />
      <VideoDemoSection />
      <SupportCTA />
    </main>
  );
}
