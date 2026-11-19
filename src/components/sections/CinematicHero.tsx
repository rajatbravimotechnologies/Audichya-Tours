import React from "react";
import { ArrowRight, Compass, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { motion, useScroll, useTransform } from "motion/react";
import { buildWhatsAppBookingUrl } from "../../config/site";

interface CinematicHeroProps {
  onOpenBooking: () => void;
  onExploreFleetClick: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onOpenBooking,
  onExploreFleetClick,
}) => {
  const handleWhatsApp = () => {
    const url = buildWhatsAppBookingUrl({
      serviceType: "General Rajasthan Tour Inquiry",
      pickupLocation: "Udaipur",
      dropLocation: "Rajasthan Tour",
    });
    window.open(url, "_blank");
  };

  // Smooth scroll progress binding for transition
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const textY = useTransform(scrollY, [0, 350], [0, -45]);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[580px] max-h-[1080px] overflow-hidden bg-black flex items-center"
      aria-label="Audichya Tours Udaipur Rajasthan Premium Taxi Service"
    >
      {/* Background Static Image: Original Vibrant Colors Without Color Filter Overlays */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src="/images/Udaipur Sunset by the Lake.png"
          alt="Udaipur Sunset by the Lake with Audichya Tours Taxi"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Foreground Hero Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 pb-14 flex flex-col items-start text-left"
      >
        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black tracking-tight leading-[1.08] mb-4 [text-wrap:balance] max-w-4xl">
          <span className="text-white block [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)]">
            Live Your Travel Dreams
          </span>
          <span className="text-[#D4AF37] block mt-1 [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)] font-black">
            With Audichya Tours.
          </span>
        </h1>

        {/* Subheading & Supporting Copy */}
        <div className="max-w-2xl mb-7 text-left">
          <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-md">
            Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
          </p>
        </div>

        {/* CTA Buttons (Book Your Taxi, Explore Tour Packages, WhatsApp) */}
        <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-7">
          {/* Primary CTA: Book Your Taxi */}
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#0F2D5B]/40 cursor-pointer border border-[#D4AF37]/30"
          >
            <span>BOOK YOUR TAXI</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA: Explore Tour Packages */}
          <button
            onClick={onExploreFleetClick}
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0F2D5B] bg-white hover:bg-[#FFF9F0] active:scale-[0.98] transition-all duration-200 shadow-xl border border-white/90 backdrop-blur-md cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:rotate-45" />
            <span>EXPLORE TOUR PACKAGES</span>
          </button>

          {/* Tertiary CTA: WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#25D366]/30 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>WHATSAPP</span>
          </button>
        </div>

        {/* Trust Badges Strip */}
        <div className="pt-4 border-t border-white/20 w-full max-w-2xl flex flex-wrap gap-6 text-xs text-white/90 font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Licensed & Insured Fleet
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Local Chauffeur Expertise
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> 24/7 Dispatch Desk
          </span>
        </div>
      </motion.div>

      {/* Scroll to Explore Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1 text-white/80 pointer-events-none">
        <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em]">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#D4AF37]" />
      </div>
    </section>
  );
};
