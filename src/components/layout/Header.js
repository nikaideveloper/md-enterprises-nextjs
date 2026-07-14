"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { headerData } from "@/config/header";

export default function Header() {
  const { topBar, logo, navigation, inquiryButton, socialLinks } = headerData;


  // Helper to format WhatsApp URL
  const getWhatsAppLink = (originalHref) => {
    // We take the phone number from topBar.phone1 
    // and remove spaces, plus signs, and dashes
    const cleanPhone = topBar.phone1.replace(/\D/g, "");
    const message = encodeURIComponent("Hello! I would like to inquire about your products.");
    return `https://wa.me/${cleanPhone}?text=${message}`;
  };
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper function to render correct React Icon based on name
  const renderSocialIcon = (name) => {
    switch (name) {
      case "Facebook": return <FaFacebookF size={18} />;
      case "Instagram": return <FaInstagram size={18} />;
      case "WhatsApp": return <FaWhatsapp size={18} />;
      case "YouTube": return <FaYoutube size={18} />;
      default: return null;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full shadow-sm">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 hidden md:block">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            
            {/* LEFT SIDE: Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-white" />
                <a 
                  href={`mailto:${topBar.email}`} 
                  className="hover:underline text-base underline-offset-4"
                >
                  <h1 className="lg:text-[18px]">{topBar.email}</h1>
                </a>
              </div>

              <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                <Phone size={16} className="text-white" />
                <div className="flex gap-1 text-base">
                  <a href={`tel:${topBar.phone1}`} className="hover:underline">
                    {topBar.phone1}
                  </a>
                  <span>/</span>
                  <a href={`tel:${topBar.phone2}`} className="hover:underline">
                    {topBar.phone2}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Social Links */}
<div className="flex items-center gap-4">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      // Check if it's WhatsApp, if so, use the custom link logic
      href={social.name === "WhatsApp" ? getWhatsAppLink(social.href) : social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#C6FF71] transition-colors p-1"
      aria-label={social.name}
    >
      {renderSocialIcon(social.name)}
    </a>
  ))}
</div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="bg-white">
          <div className="container mx-auto px-4 flex justify-between items-center py-3 md:py-2">
            <Link href="/" onClick={handleLinkClick}>
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width} 
                height={logo.height} 
                className="object-contain w-auto h-10 md:h-12 lg:h-14" 
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-[#114232] font-serif font-bold hover:text-green-700 transition-colors text-sm lg:text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* DESKTOP INQUIRY BUTTON CHANGED TO LINK */}
              <Link
                href="/inquiry-now"
                className="bg-secondary text-black font-bold px-4 lg:px-6 py-2 rounded-2xl hover:bg-[#b3f056] transition-all shadow-sm text-sm lg:text-base whitespace-nowrap text-center"
              >
                {inquiryButton.text}
              </Link>
            </nav>

            <div className="md:hidden flex items-center gap-3">
              {/* MOBILE INQUIRY BUTTON CHANGED TO LINK */}
              <Link
                href="/inquiry-now"
                className="bg-[#C6FF71] text-black font-bold px-4 py-2 rounded-xl hover:bg-[#b3f056] transition-all shadow-sm text-xs text-center"
              >
                Inquiry
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#114232] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="container mx-auto px-4 pb-4">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block text-[#114232] font-serif font-bold hover:bg-gray-100 hover:text-green-700 transition-all px-4 py-3 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                <a href={`mailto:${topBar.email}`} className="flex items-center gap-2 text-sm text-[#114232] px-4">
                  <Mail size={16} />
                  <span>{topBar.email}</span>
                </a>
                
                <div className="flex items-center gap-2 text-sm text-[#114232] px-4">
                  <Phone size={16} />
                  <div className="flex gap-2">
                    <a href={`tel:${topBar.phone1}`}>{topBar.phone1}</a>
                    <span>/</span>
                    <a href={`tel:${topBar.phone2}`}>{topBar.phone2}</a>
                  </div>
                </div>

                {/* Mobile Social Links */}
                {/* Mobile Social Links */}
<div className="flex items-center gap-5 px-4 pt-2">
  {socialLinks.map((social) => (
    <a 
      key={social.name} 
      href={social.name === "WhatsApp" ? getWhatsAppLink(social.href) : social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#114232] hover:text-green-700"
    >
      {renderSocialIcon(social.name)}
    </a>
  ))}
</div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* MODAL COMPONENT REMOVED */}

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}