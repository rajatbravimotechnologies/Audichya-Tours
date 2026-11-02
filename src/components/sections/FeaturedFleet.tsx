import React, { useState, useEffect } from "react";
import { fleetData, FleetItem } from "../../data/fleet";
import { Users, Briefcase, Wind, ArrowRight, Info, Check, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { UdaipurPalaceLineArt } from "../ui/UdaipurPalaceLineArt";
import { AravalliMountainLineArt } from "../ui/AravalliMountainLineArt";
import { LandscapeBackground } from "../ui/LandscapeBackground";
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
  const [activePageIndex, setActivePageIndex] = useState(0);

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

  const itemsPerPage = 4;
  const totalPages = Math.ceil(fleetData.length / itemsPerPage);
  const visibleFleet = fleetData.slice(
    activePageIndex * itemsPerPage,
    (activePageIndex + 1) * itemsPerPage
  );

  return (
    <section id="featured-fleet" className="pt-8 md:pt-10 pb-4 md:pb-6 bg-[#FFF9F0] border-t border-[#0F2D5B]/10 relative overflow-hidden">
      {/* 4-LAYER BACKGROUND DECORATION SYSTEM - Prominent Background Artwork */}
      {/* Layer 1 — Udaipur Palace Line Art (Full Clear Top-Right Line Art Background) */}
      <div className="absolute top-0 right-0 lg:right-0 z-0 pointer-events-none opacity-85">
        <UdaipurPalaceLineArt opacity={0.9} className="w-[500px] sm:w-[700px] md:w-[950px] lg:w-[1150px] h-auto object-contain" />
      </div>

      {/* Layer 2 — Aravalli Mountain Line Art (Full Clear Top-Left Mountain Contour) */}
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

        {/* Carousel / Cards Section with Side Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setActivePageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
            }
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#0F2D5B]/15 text-[#0F2D5B] hover:bg-[#0F2D5B] hover:text-white shadow-lg transition-all items-center justify-center cursor-pointer"
            aria-label="Previous Fleet Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setActivePageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
            }
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#0F2D5B]/15 text-[#0F2D5B] hover:bg-[#0F2D5B] hover:text-white shadow-lg transition-all items-center justify-center cursor-pointer"
            aria-label="Next Fleet Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fleet Cards Container: Horizontal Swipeable Carousel on Mobile, Grid on Desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-6 min-h-[420px]">
            <AnimatePresence mode="wait">
              {visibleFleet.map((item: FleetItem, idx: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="group bg-[#FFFFFF] rounded-[18px] p-5 border border-[#0F2D5B]/10 shadow-[0_8px_28px_rgba(15,45,91,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full"
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
                        className={`block w-full h-full ${
                          item.objectFit === "contain"
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
                      className="text-xl font-extrabold text-[#0F2D5B] tracking-tight group-hover:text-[#D4AF37] transition-colors cursor-pointer mb-2"
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile / Tablet Swipeable Horizontal Carousel */}
          <div className="flex lg:hidden overflow-x-auto gap-4 px-1 pb-4 snap-x snap-mandatory scrollbar-none">
            {fleetData.map((item: FleetItem) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[80vw] max-w-[340px] max-h-[460px] bg-[#FFFFFF] rounded-[18px] p-5 border border-[#0F2D5B]/10 shadow-[0_8px_24px_rgba(15,45,91,0.07)] flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {/* Category Tag Badge */}
                  <div className="inline-block mb-2 bg-[#D4AF37] px-3 py-1 rounded-md text-[10px] font-bold text-[#0F2D5B] tracking-wider uppercase shadow-xs">
                    {item.category}
                  </div>

                  {/* Vehicle Image Container */}
                  <div
                    onClick={() => setSelectedSpotlight(item)}
                    className="mb-3 w-full aspect-[4/3] rounded-[12px] relative cursor-pointer overflow-hidden bg-transparent"
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} Cab Service`}
                      className={`block w-full h-full ${
                        item.objectFit === "contain"
                          ? "object-contain p-1"
                          : "object-cover"
                      }`}
                      style={{ objectPosition: item.objectPosition || "center" }}
                      loading="lazy"
                    />
                  </div>

                  {/* Vehicle Name */}
                  <h3
                    onClick={() => setSelectedSpotlight(item)}
                    className="text-lg font-extrabold text-[#0F2D5B] tracking-tight cursor-pointer mb-2"
                  >
                    {item.title}
                  </h3>

                  {/* Features & Luggage Line */}
                  <div className="flex items-center gap-4 py-2 border-t border-[#0F2D5B]/10 mb-3 text-xs text-[#64748B] font-medium">
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

                {/* Action Button */}
                <button
                  onClick={() => onSelectVehicle(item.title)}
                  className="w-full py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0F2D5B] text-white hover:bg-[#D4AF37] hover:text-[#0F2D5B] transition-all duration-200 shadow-md text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>BOOK THIS RIDE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePageIndex(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  activePageIndex === i
                    ? "bg-[#D4AF37] scale-110"
                    : "bg-[#0F2D5B]/20 hover:bg-[#0F2D5B]/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

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
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">PASSENGERS</span>
                      <span className="font-semibold text-slate-800">{selectedSpotlight.passengers}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#007FF0] flex items-center justify-center shrink-0 border border-slate-200">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">LUGGAGE</span>
                      <span className="font-semibold text-slate-800">{selectedSpotlight.luggage}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#007FF0] flex items-center justify-center shrink-0 border border-slate-200">
                      <Wind className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">CLIMATE CONTROL</span>
                      <span className="font-semibold text-slate-800">{selectedSpotlight.climateControl}</span>
                    </div>
                  </div>
                </div>

                {/* Ideal Use & Features */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1">
                      RECOMMENDED USE CASE:
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {selectedSpotlight.idealFor}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-2">
                      INCLUDED AMENITIES & FEATURES:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                      {selectedSpotlight.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <Check className="w-3.5 h-3.5 text-[#C2A03E] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const title = selectedSpotlight.title;
                      setSelectedSpotlight(null);
                      onSelectVehicle(title);
                    }}
                    className="flex-1 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] transition-all shadow-md shadow-[#007FF0]/30 text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>BOOK THIS RIDE ({selectedSpotlight.title.toUpperCase()})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setSelectedSpotlight(null)}
                    className="py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all text-center cursor-pointer"
                  >
                    Close
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
