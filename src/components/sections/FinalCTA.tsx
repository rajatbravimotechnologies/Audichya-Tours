import React from "react";
import { siteConfig, buildWhatsAppBookingUrl } from "../../config/site";
import { ArrowRight, MessageCircle, Phone, Compass, Shield } from "lucide-react";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const handleWhatsAppClick = () => {
    const url = buildWhatsAppBookingUrl({
      customNotes: "Hello! I am ready to book a cab in Udaipur.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0F2D5B] text-white relative overflow-hidden">
      {/* Background Radial Glow Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6F0FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Arch Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center justify-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
          <span className="w-6 h-[2px] bg-[#D4AF37]" />
          <span>AUDICHYA TOURS · 24/7 TAXI SERVICE</span>
          <span className="w-6 h-[2px] bg-[#D4AF37]" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white [text-wrap:balance]">
          Live Your Travel Dreams Rajasthan
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#E6F0FF] max-w-2xl mx-auto font-normal leading-relaxed mb-10 [text-wrap:balance]">
          Explore Udaipur and Rajasthan with comfortable taxi services, memorable sightseeing, and personalized tour packages.
        </p>

        {/* 3 Buttons: BOOK YOUR TAXI, WHATSAPP US, CALL NOW */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-10">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#102A43] bg-[#D4AF37] hover:bg-[#C2A03E] active:scale-[0.98] transition-all shadow-lg cursor-pointer"
          >
            <span>BOOK YOUR TAXI</span>
            <ArrowRight className="w-4 h-4 text-[#102A43]" />
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </button>

          <a
            href={`tel:${siteConfig.contact.rawPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 active:scale-[0.98] transition-all cursor-pointer border border-white/20"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Quiet Trust Markers */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-[#E6F0FF]">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#D4AF37]" /> Licensed & Insured Fleet
          </span>
          <span className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#D4AF37]" /> Experienced Local Drivers
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#D4AF37]" /> 24/7 Dispatch Desk
          </span>
        </div>
      </div>
    </section>
  );
};
