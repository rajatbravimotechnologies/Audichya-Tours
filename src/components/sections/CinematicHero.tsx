import React from "react";
import { ArrowRight, Compass, ChevronDown, PhoneCall } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { siteConfig } from "../../config/site";

interface CinematicHeroProps {
  onOpenBooking: () => void;
  onExploreFleetClick: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onOpenBooking,
  onExploreFleetClick,
}) => {
  // Smooth scroll progress binding for Cinematic Hero-to-Next-Section Transition
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 800], [1.0, 1.06]);
  const textOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const textY = useTransform(scrollY, [0, 350], [0, -45]);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[660px] max-h-[1080px] overflow-hidden bg-black flex items-center"
      aria-label="Audichya Tours Udaipur Rajasthan Premium Taxi Service"
    >
      {/* Background Image Layer with Scroll Scale */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <img
          src="/images/Udaipur Sunset by the Lake.png"
          alt="Udaipur Sunset by the Lake - Audichya Tours"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Gradient Overlay for Optimal Text Readability & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
      </motion.div>

      {/* Foreground Hero Content with Staggered Entrance Animations */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 sm:pt-28 pb-16 flex flex-col items-start text-left"
      >
        {/* 1. Eyebrow / Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-4 text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37] bg-[#0F2D5B]/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/30"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>AUDICHYA TOURS · LIVE YOUR TRAVEL DREAMS RAJASTHAN</span>
        </motion.div>

        {/* 2. Main Hero Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black tracking-tight leading-[1.08] mb-4 [text-wrap:balance] max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white block [text-shadow:_0_2px_12px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)]"
          >
            Explore Udaipur & Rajasthan
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#D4AF37] block mt-1 [text-shadow:_0_2px_12px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)] font-black"
          >
            with Audichya Tours
          </motion.span>
        </h1>

        {/* 3. Subheading & Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="max-w-2xl mb-6 text-left"
        >
          <h2 className="text-sm sm:text-base md:text-lg text-white font-bold leading-snug drop-shadow-md mb-2">
            Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed drop-shadow-sm">
            Discover the beauty of Rajasthan with convenient travel, flexible itineraries and easy direct booking.
          </p>
        </motion.div>

        {/* 4. CTA Buttons & Prominent Phone Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6"
        >
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] active:scale-[0.98] hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-[#0F2D5B]/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>BOOK YOUR TAXI</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreFleetClick}
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0F2D5B] bg-[#FFFFFF] hover:bg-[#FFF9F0] active:scale-[0.98] hover:-translate-y-0.5 transition-all duration-200 shadow-xl border border-[#0F2D5B] backdrop-blur-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2D5B]"
          >
            <Compass className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:rotate-45" />
            <span>EXPLORE TOUR PACKAGES</span>
          </button>
        </motion.div>

        {/* Prominent Phone Numbers Display */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="inline-flex items-center flex-wrap gap-2 sm:gap-3 text-white font-bold text-xs sm:text-sm bg-[#0F2D5B]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#D4AF37]/40 shadow-lg mb-6"
        >
          <PhoneCall className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span className="text-white/80 font-normal uppercase text-[10px] tracking-wider hidden xs:inline">Direct Call:</span>
          <a
            href={`tel:${siteConfig.contact.rawPhone1}`}
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            {siteConfig.contact.phone1}
          </a>
          <span className="text-[#D4AF37] font-black">|</span>
          <a
            href={`tel:${siteConfig.contact.rawPhone2}`}
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            {siteConfig.contact.phone2}
          </a>
        </motion.div>

        {/* 5. Hero Information Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="pt-5 border-t border-white/20 w-full max-w-2xl flex flex-wrap gap-6 text-xs text-white/90 font-medium"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Luxury Fleet & Premium Cars
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Local Sightseeing Experts
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /> Safe Family Tour Packages
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1.5 text-white/80 pointer-events-none">
        <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em]">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </div>
    </section>
  );
};
