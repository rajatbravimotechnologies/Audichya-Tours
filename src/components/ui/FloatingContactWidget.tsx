import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppBookingUrl, sendLeadToWebhook } from "../../config/site";

export const FloatingContactWidget: React.FC = () => {
  const handleWhatsAppClick = () => {
    sendLeadToWebhook({
      serviceType: "Direct WhatsApp Float Inquiry",
      customNotes: "Inquiring about AUDICHYA TOURS taxi & Rajasthan tour packages.",
    });
  };

  const whatsappUrl = buildWhatsAppBookingUrl({
    customNotes: "Inquiring about AUDICHYA TOURS taxi & Rajasthan tour packages.",
  });

  return (
    <div className="fixed right-4 sm:right-6 bottom-20 lg:top-1/2 lg:-translate-y-1/2 z-40 flex flex-col items-end gap-3.5 pointer-events-auto">
      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white w-12 h-12 rounded-full shadow-xl shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        
        {/* Hover Text Badge */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-slate-700">
          WhatsApp Us
        </span>
      </a>

      {/* Call Now Floating Action Button */}
      <a
        href={`tel:${siteConfig.contact.rawPhone}`}
        className="group relative flex items-center justify-center bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] text-white w-12 h-12 rounded-full shadow-xl shadow-[#0F2D5B]/30 hover:scale-110 active:scale-95 transition-all duration-300"
        title="Call Cab Dispatch"
        aria-label="Call Cab Dispatch"
      >
        <Phone className="w-5 h-5 fill-current" />

        {/* Hover Text Badge */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#0F2D5B] text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-[#D4AF37]/30">
          Call Now: {siteConfig.contact.displayPhone}
        </span>
      </a>
    </div>
  );
};
