"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = "919967859485";
  const message = "Hello! I'm interested in your services."; // Change this to your desired message
  
  // encodeURIComponent converts spaces to %20 and handles special characters
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[999] transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp Chat"
        width={60} 
        height={60}
        className="drop-shadow-md"
      />
    </a>
  );
}