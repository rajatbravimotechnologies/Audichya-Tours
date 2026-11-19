import React, { useState, useEffect } from "react";
import { fleetData, FleetItem } from "../../data/fleet";
import { Users, Briefcase, ArrowRight, Info, X, Sparkles, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { UdaipurPalaceLineArt } from "../ui/UdaipurPalaceLineArt";
import { AravalliMountainLineArt } from "../ui/AravalliMountainLineArt";
import { GoldDetailsOverlay } from "../ui/GoldDetailsOverlay";

interface FeaturedFleetProps {
  onSelectVehicle: (vehicleTitleOrCategory: string) => void;
  onExploreFullFleet: () => void;
}

export const FeaturedFleet: React.FC<FeaturedFleetProps> = ({
  onSelectVehicle,
  onExploreFullFleet,
}) => {
  const [selectedSpotlight, setSelectedSpotlight] = useState<FleetItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"forward" | "reverse">("forward");

  // Quadruple fleet data so the marquee stream loops continuously without any gaps on any screen
  const marqueeFleet = [...fleetData, ...fleetData, ...fleetData, ...fleetData];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSpotlight(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="featured-fleet" className="pt-8 md:pt-10 pb-6 md:pb-8 bg-[#FFF9F0] border-t border-[#0F2D5B]/10 relative overflow-hidden">
      {/* 4-LAYER BACKGROUND DECORATION SYSTEM - Prominent Background Artwork */}
      {/* Layer 1 — Udaipur Palace Line Art */}
      <div className="absolute top-0 right-0 lg:right-0 z-0 pointer-events-none opacity-85">
        <UdaipurPalaceLineArt opacity={0.9} className="w-[500px] sm:w-[700px] md:w-[950px] lg:w-[1150px] h-auto object-contain" />
      </div>

      {/* Layer 2 — Aravalli Mountain Line Art */}
      <div className="absolute top-0 -left-6 md:left-0 z-0 pointer-events-none hidden sm:block opacity-75">
        <AravalliMountainLineArt opacity={0.75} color="#D4AF37" className="w-[420px] md:w-[620px] lg:w-[780px] h-auto" />
      </div>

      {/* Layer 4 — Subtle Gold Micro Details */}
      <GoldDetailsOverlay />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Side Lines & Tight Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-7 md:mb-9"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
            <span className="w-8 md:w-16 h-[1px] bg-[#D4AF37]" />
            <span>TRAVEL IN COMFORT</span>
            <span className="w-8 md:w-16 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
            Find Your Perfect Ride
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#64748B] font-normal leading-relaxed max-w-[640px] mx-auto [text-wrap:balance]">
            From <span className="font-medium text-[#0F2D5B]">comfortable city rides</span> to spacious SUVs and group transportation, discover the right vehicle for every journey in Udaipur.
          </p>
        </motion.div>
      </div>

      {/* Full-Width Continuous Infinite Moving Marquee Slider */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Smooth Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#FFF9F0] via-[#FFF9F0]/85 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#FFF9F0] via-[#FFF9F0]/85 to-transparent z-20" />

        {/* Floating Direction & Pause Controls */}
        <div className="max-w-7xl mx-auto px-4 relative z-30 pointer-events-none flex justify-between items-center -mb-8">
          {/* Left / Reverse Button */}
          <button
            onClick={() => setDirection("reverse")}
            className={`pointer-events-auto w-10 h-10 rounded-full shadow-lg border border-[#0F2D5B]/15 flex items-center justify-center transition-all cursor-pointer active:scale-95 ${direction === "reverse"
                ? "bg-[#0F2D5B] text-white"
                : "bg-white/95 text-[#0F2D5B] hover:bg-[#0F2D5B] hover:text-white"
              }`}
            title="Glide Right"
            aria-label="Glide Right"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right / Forward Button */}
          <button
            onClick={() => setDirection("forward")}
            className={`pointer-events-auto w-10 h-10 rounded-full shadow-lg border border-[#0F2D5B]/15 flex items-center justify-center transition-all cursor-pointer active:scale-95 ${direction === "forward"
                ? "bg-[#0F2D5B] text-white"
                : "bg-white/95 text-[#0F2D5B] hover:bg-[#0F2D5B] hover:text-white"
              }`}
            title="Glide Left"
            aria-label="Glide Left"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Infinite Moving Track */}
        <div
          className="w-full overflow-hidden mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-6 w-max py-2 ${direction === "forward"
                ? "animate-fleet-marquee-forward"
                : "animate-fleet-marquee-reverse"
              } ${isPaused || selectedSpotlight !== null ? "pause-fleet-marquee" : ""}`}
          >
            {marqueeFleet.map((item: FleetItem, idx: number) => (
              <div
                key={`${item.id}-${idx}`}
                className="group bg-[#FFFFFF] rounded-[18px] p-5 border border-[#0F2D5B]/10 shadow-[0_8px_28px_rgba(15,45,91,0.06)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden w-[290px] sm:w-[320px] md:w-[335px] shrink-0 min-h-[420px]"
              >
                <div className="relative z-10">
                  {/* Category Tag Badge at Top Left */}
                  <div className="inline-block mb-3 bg-[#D4AF37] px-3 py-1 rounded-md text-[10px] font-bold text-[#0F2D5B] tracking-wider uppercase shadow-xs">
                    {item.category}
                  </div>

                  {/* Vehicle Image Container */}
                  <div
                    onClick={() => setSelectedSpotlight(item)}
                    className="mb-4 w-full aspect-[4/3] rounded-[12px] relative cursor-pointer group/img overflow-hidden bg-transparent"
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} Cab Service`}
                      className={`block w-full h-full ${item.objectFit === "contain"
                          ? "object-contain p-1"
                          : "object-cover"
                        } transition-transform duration-500 group-hover/img:scale-105`}
                      style={{ objectPosition: item.objectPosition || "center" }}
                      loading="lazy"
                    />

                    {/* Quick View Badge */}
                    <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#102A43] shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center gap-1 border border-[#0F2D5B]/10">
                      <Info className="w-3 h-3 text-[#D4AF37]" />
                      <span>Specs</span>
                    </div>
                  </div>

                  {/* Vehicle Name */}
                  <h3
                    onClick={() => setSelectedSpotlight(item)}
                    className="text-xl font-extrabold text-[#0F2D5B] tracking-tight group-hover:text-[#D4AF37] transition-colors cursor-pointer mb-2 line-clamp-1"
                  >
                    {item.title}
                  </h3>

                  {/* Features & Luggage Line */}
                  <div className="flex items-center gap-4 py-2 border-t border-[#0F2D5B]/10 mb-4 text-xs text-[#64748B] font-medium">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0F2D5B] shrink-0" />
                      <span>{item.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#0F2D5B] shrink-0" />
                      <span>{item.luggage}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button: Regular Dark Blue with Golden Hover */}
                <div className="relative z-10">
                  <button
                    onClick={() => onSelectVehicle(item.title)}
                    className="w-full py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0F2D5B] text-white hover:bg-[#D4AF37] hover:text-[#0F2D5B] transition-all duration-200 shadow-md text-center flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-none"
                  >
                    <span>BOOK THIS RIDE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section CTA - White Button with Navy Border */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center relative z-10"
        >
          <button
            onClick={onExploreFullFleet}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F2D5B] bg-white hover:bg-[#0F2D5B] hover:text-white transition-all duration-200 shadow-sm cursor-pointer border-2 border-[#0F2D5B]/20 hover:border-[#0F2D5B]"
          >
            <span>EXPLORE OUR FULL FLEET</span>
            <ArrowRight className="w-4 h-4 text-[#0F2D5B] group-hover:text-white transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Vehicle Spotlight Modal */}
      <AnimatePresence>
        {selectedSpotlight && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpotlight(null)}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200 max-h-[90vh] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="featured-spotlight-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSpotlight(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-slate-700 hover:text-slate-900 hover:bg-white border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer shadow-md"
                aria-label="Close vehicle spotlight"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                {/* Header Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full bg-[#F3F7FB]">
                  <img
                    src={selectedSpotlight.image}
                    alt={selectedSpotlight.title}
                    className="block w-full h-full object-cover"
                    style={{ objectPosition: selectedSpotlight.objectPosition || "center" }}
                  />
                  <div className="absolute top-4 left-4 bg-[#002247]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white tracking-wider uppercase border border-white/10">
                    {selectedSpotlight.category}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#EAF5FF] text-[#007FF0] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#C2A03E]" />
                    <span>VEHICLE SPOTLIGHT SPECIFICATIONS</span>
                  </div>
                  <h3 id="featured-spotlight-title" className="text-3xl font-extrabold text-[#002247]">
                    {selectedSpotlight.title} — {selectedSpotlight.subtitle}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {selectedSpotlight.description}
                  </p>
                </div>

                {/* Verified Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#F7FAFC] border border-slate-200/80 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#007FF0] flex items-center justify-center shrink-0 border border-slate-200">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002247]">Capacity</p>
                      <p className="text-slate-500">{selectedSpotlight.passengers}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#007FF0] flex items-center justify-center shrink-0 border border-slate-200">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002247]">Luggage</p>
                      <p className="text-slate-500">{selectedSpotlight.luggage}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#007FF0] flex items-center justify-center shrink-0 border border-slate-200">
                      <Sparkles className="w-4 h-4 text-[#C2A03E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002247]">Climate</p>
                      <p className="text-slate-500">{selectedSpotlight.climateControl}</p>
                    </div>
                  </div>
                </div>

                {/* Best For Tag */}
                <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#C2A03E]/30 text-xs">
                  <p className="font-bold text-[#002247] uppercase tracking-wider mb-1">
                    Best Suited For
                  </p>
                  <p className="text-slate-600">
                    {selectedSpotlight.idealFor}
                  </p>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Included Vehicle Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedSpotlight.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C2A03E] mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA inside Modal */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const carTitle = selectedSpotlight.title;
                      setSelectedSpotlight(null);
                      onSelectVehicle(carTitle);
                    }}
                    className="w-full py-4 px-6 rounded-2xl bg-[#007FF0] hover:bg-[#002247] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#007FF0]/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve {selectedSpotlight.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
