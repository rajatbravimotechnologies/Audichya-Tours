import React from "react";
import { ArrowRight, Compass, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";
import { motion, useScroll, useTransform } from "motion/react";
import { buildWhatsAppBookingUrl, trackAndOpenWhatsApp } from "../../config/site";

interface CinematicHeroProps {
  onOpenBooking: () => void;
  onExploreFleetClick: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onOpenBooking,
  onExploreFleetClick,
}) => {
  const handleWhatsApp = () => {
    trackAndOpenWhatsApp({
      serviceType: "Hero Section - General Rajasthan Tour Inquiry",
      pickup: "Udaipur",
      drop: "Rajasthan Tour",
      customNotes: "Inquiry initiated from Hero Section CTA",
    });
  };

  // Smooth scroll progress binding for transition
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const textY = useTransform(scrollY, [0, 350], [0, -45]);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[580px] max-h-[1080px] overflow-hidden bg-black flex items-start sm:items-center"
      aria-label="Audichya Tours Udaipur Rajasthan Premium Taxi Service"
    >
      {/* Background Static Image: Responsive (Mobile Portrait & Desktop Landscape) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/images/home-hero-taxi-mobile.jpg"
          />
          <img
            src="/images/home-hero-taxi-luxury.jpg"
            alt="Premium Chauffeur-Driven Taxi Service in Udaipur with Audichya Tours"
            className="w-full h-full object-cover object-top sm:object-center"
            loading="eager"
          />
        </picture>
      </div>

      {/* Foreground Hero Content: Anchored neatly below the floating navbar in the open sky with clean breathing room */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-[94px] xs:pt-[98px] sm:pt-24 pb-4 sm:pb-14 flex flex-col items-start text-left"
      >
        {/* Main Hero Headline */}
        <h1 className="text-[25px] xs:text-[27px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black tracking-tight leading-[1.12] mb-1.5 sm:mb-3 [text-wrap:balance] max-w-4xl">
          <span className="text-white block [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)]">
            Live Your Travel Dreams
          </span>
          <span className="text-[#D4AF37] block mt-0.5 sm:mt-1 [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)] font-black">
            With Audichya Tours.
          </span>
        </h1>

        {/* Subheading & Supporting Copy */}
        <div className="max-w-xl mb-2 sm:mb-2 text-left">
          <p className="text-[12px] xs:text-[13px] sm:text-base md:text-lg text-white font-medium leading-snug sm:leading-relaxed drop-shadow-md">
            Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
          </p>
        </div>

        {/* Decorative Gold Accent Dash (Matching Mobile Mockup) */}
        <div className="w-14 sm:w-20 h-1 bg-[#D4AF37] rounded-full mb-3 sm:mb-5 shadow-sm" />

        {/* CTA Buttons: Row 1 (Book Taxi + WhatsApp) and Row 2 (Explore Tour Packages) */}
        <div className="w-full sm:w-auto flex flex-col gap-2 sm:gap-3.5 mb-3 sm:mb-5 max-w-md">
          {/* Row 1: Book Taxi & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3.5 w-full sm:w-auto">
            {/* Primary CTA: Book Your Taxi */}
            <button
              onClick={onOpenBooking}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/40 cursor-pointer border border-[#D4AF37]/30"
            >
              <span>BOOK TAXI</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Tertiary CTA: WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/30 cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
              <span>WHATSAPP</span>
            </button>
          </div>

          {/* Row 2: Explore Tour Packages */}
          <button
            onClick={onExploreFleetClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0F2D5B] bg-white/95 hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-lg border border-white cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:rotate-45" />
            <span>EXPLORE TOUR PACKAGES</span>
          </button>
        </div>

        {/* Trust Badges Strip (Checkmark Badges Matching Mockup) */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-4 text-[11px] xs:text-xs sm:text-sm text-white font-medium drop-shadow-md">
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F2D5B] font-black text-[9px] sm:text-[10px]">
              ✓
            </span>
            <span>Licensed & Insured Fleet</span>
          </span>
          <span className="text-white/40">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F2D5B] font-black text-[9px] sm:text-[10px]">
              ✓
            </span>
            <span>Local Chauffeur Expertise</span>
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F2D5B] font-black text-[9px] sm:text-[10px]">
              ✓
            </span>
            <span>24/7 Dispatch Desk</span>
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
