import React from "react";
import { useNavigate } from "react-router-dom";
import { siteConfig, buildWhatsAppBookingUrl } from "../../config/site";
import { ArrowRight, MessageCircle, Phone, Shield, Compass } from "lucide-react";

interface CinematicFinalCTAProps {
  onOpenBooking: () => void;
}

export const CinematicFinalCTA: React.FC<CinematicFinalCTAProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppBookingUrl({
      customNotes: "Hello! I am ready to book my Udaipur taxi journey.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleExploreFleet = () => {
    const fleetEl = document.getElementById("fleet");
    if (fleetEl) {
      fleetEl.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/fleet");
    }
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-[#001429] flex items-center justify-center text-white">
      {/* Background Full Viewport Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src="/images/Udaipur Sunset by the Lake.png"
          alt="Udaipur Sunset by the Lake - Audichya Tours"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001429] via-[#001429]/65 to-[#001429]/75 z-10" />
      </div>

      {/* Foreground Conversion Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">


        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 [text-wrap:balance] drop-shadow-2xl">
          Live Your Travel Dreams <br />
          <span className="text-[#D4AF37]">Rajasthan.</span>
        </h2>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-10 [text-wrap:balance] drop-shadow-md">
          Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12">
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#0F2D5B] active:scale-[0.98] transition-all shadow-xl shadow-[#0F2D5B]/35 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>BOOK YOUR TAXI</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleExploreFleet}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>EXPLORE TOUR PACKAGES</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Quiet Trust Markers */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300">
          <span className="flex items-center gap-2 font-mono">
            <Shield className="w-4 h-4 text-[#007FF0]" /> Licensed & Insured Fleet
          </span>
          <span className="flex items-center gap-2 font-mono">
            <Compass className="w-4 h-4 text-[#C2A03E]" /> Local Chauffeur Expertise
          </span>
          <span className="flex items-center gap-2 font-mono">
            <Phone className="w-4 h-4 text-[#007FF0]" /> 24/7 Dispatch Desk
          </span>
        </div>
      </div>
    </section>
  );
};
