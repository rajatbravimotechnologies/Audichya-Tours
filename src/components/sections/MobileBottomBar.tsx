import React from "react";
import { siteConfig, buildWhatsAppBookingUrl } from "../../config/site";
import { Phone, MessageCircle, Calendar } from "lucide-react";

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const url = buildWhatsAppBookingUrl({
      customNotes: "Quick booking request from mobile website.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#0F2D5B]/10 shadow-[0_-4px_20px_rgba(15,45,91,0.12)] py-2 px-3">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* CALL */}
        <a
          href={`tel:${siteConfig.contact.rawPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FFF9F0] hover:bg-[#E6F0FF] text-[#0F2D5B] transition-colors active:scale-95 text-center border border-[#0F2D5B]/10"
        >
          <Phone className="w-4 h-4 text-[#0F2D5B] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F2D5B]">CALL</span>
        </a>

        {/* WHATSAPP */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] transition-colors active:scale-95 text-center cursor-pointer border border-[#25D366]/20"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#128C7E]">WHATSAPP</span>
        </button>

        {/* BOOK */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#0F2D5B] text-white transition-colors active:scale-95 text-center shadow-md cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-white" />
          <span className="text-[10px] font-bold uppercase tracking-wider">BOOK</span>
        </button>
      </div>
    </div>
  );
};
