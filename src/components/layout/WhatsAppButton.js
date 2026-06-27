"use client"; // Required for interactivity and Next.js Image optimization in some cases

import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = "919967859485";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[999] transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="/images/whatsapp.png" // This points to public/images/whatsapp.png
        alt="WhatsApp Chat"
        width={60} 
        height={60}
        className="drop-shadow-md"
      />
    </a>
  );
}