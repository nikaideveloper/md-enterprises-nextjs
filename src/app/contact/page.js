import ContactFormMap from "@/components/contact/ContactFormMap";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import WhyChooseUs from "@/components/contact/WhyChooseUs";
import SupportCTA from "@/components/layout/SupportCTA";


export const metadata = {
  title: "Contact Us | MD Enterprises",
  description: "Get in touch with MD Enterprises. Reach out for support, business inquiries, or partnerships. We are here to help you succeed.",
  keywords: ["Contact MD Enterprises", "Customer Support", "Business Inquiry", "Office Location", "Email MD Enterprises"],
};


export default function ContactPage() {
  return (
    <main>
      <ContactHero/>
      <ContactInfo/>
       <ContactFormMap/>
      <WhyChooseUs/>
      <SupportCTA/>
         
    </main>
  );
}