import React from 'react';
import { footerData } from '@/config/footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

// Import Social Icons from react-icons
import { FaFacebookF, FaInstagram, FaWhatsapp,FaYoutube } from "react-icons/fa";

export default function Footer() {
  const { company, products, services, quickLinks, contact, socialLinks, copyright } = footerData;

  // Map the string names from config to the actual Icon Components
  const iconMap = {
    Facebook: <FaFacebookF size={20} />,
    Instagram: <FaInstagram size={20} />,
    WhatsApp: <FaWhatsapp size={20} />,
    YouTube : <FaYoutube size={20} />
  };

  return (
    <footer className="bg-[#0a3d3d] text-gray-200 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Company Info */}
        <div className="space-y-6">
          <div className="bg-white p-4 inline-block rounded-sm">
            <img src={company.logo} alt={company.name} className="h-16 object-contain" />
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            {company.description}
          </p>
          <div className="w-12 h-1 bg-white"></div>
          <ul className="space-y-3">
            {company.highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={18} className="text-white shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Products</h3>
          <ul className="space-y-3">
            {products.map((product, index) => (
              <li key={index} className="text-sm hover:text-white cursor-pointer transition-colors leading-tight">
                {product}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services & Quick Links */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service, index) => (
                <li key={index} className="hover:text-white cursor-pointer transition-colors">{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={20} className="shrink-0" />
                <p>{contact.address}</p>
              </div>
              
              {contact.phones.map((phone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0" />
                  <p>{phone}</p>
                </div>
              ))}

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <p>{contact.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-[#0a3d3d] transition-all duration-300"
                  aria-label={social.name}
                >
                  {iconMap[social.name]}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-400 leading-relaxed">
              {copyright.text}
              <br />
              {copyright.subtitle}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}