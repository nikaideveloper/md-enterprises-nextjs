import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata = {
  title: {
    default: "MD Enterprises | Premium Business Solutions",
    template: "%s | MD Enterprises"
  },
  description: "MD Enterprises provides industry-leading services in manufacturing, supply chain, and corporate consultancy.",
  icons: {
    icon: "/image/favicon.png", // Place favicon.ico in /public folder
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppButton/>
              <ScrollToTop/>
        <Footer />
      </body>
    </html>
  );
}