import React, { useState, useEffect } from "react";
import { fleetData, FleetItem } from "../../data/fleet";
import { Users, Briefcase, Wind, ArrowRight, Check, X, Info, Sparkles, Filter, PhoneCall, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { buildWhatsAppBookingUrl, siteConfig, sendLeadToWebhook } from "../../config/site";

interface FleetProps {
  onSelectVehicle: (vehicleTitleOrCategory: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedSpotlight, setSelectedSpotlight] = useState<FleetItem | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  // Reset image index when modal item changes
  useEffect(() => {
    setActiveImageIdx(0);
  }, [selectedSpotlight]);

  // Filter Categories list
  const categoryFilters = [
    { id: "ALL", label: "ALL VEHICLES" },
    { id: "SEDAN", label: "SEDANS" },
    { id: "PREMIUM SUV / MUV", label: "SUV / MUV" },
    { id: "GROUP TRAVEL", label: "GROUP TRAVEL" },
    { id: "FAMILY MUV", label: "FAMILY MUV" },
  ];

  const filteredVehicles = fleetData.filter((item) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "GROUP TRAVEL") {
      return item.category === "GROUP TRAVEL" || item.category === "LARGE GROUP TRANSPORT";
    }
    return item.category === selectedCategory;
  });

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

  const handleDirectWhatsApp = (item: FleetItem) => {
    sendLeadToWebhook({
      serviceType: "Fleet Inquiry",
      vehicleType: item.title,
      customNotes: `Inquiring for ${item.title} (${item.subtitle}) booking.`,
    });
    const url = buildWhatsAppBookingUrl({
      vehicleType: item.title,
      customNotes: `Inquiring for ${item.title} (${item.subtitle}) booking.`,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-[#FFF9F0] border-t border-[#0F2D5B]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
            <span>TRAVEL IN COMFORT</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          
          <div className="mb-2 text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-widest">
            OUR FLEET | AUDICHYA TOURS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
            Find Your Perfect Ride
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-normal [text-wrap:balance]">
            From comfortable city rides to spacious SUVs and group transportation, discover the right vehicle for every journey across Udaipur and beyond.
          </p>
        </motion.div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14 px-2">
          {categoryFilters.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#0F2D5B] text-white shadow-md border border-[#0F2D5B]"
                  : "bg-white text-[#102A43] hover:text-[#0F2D5B] hover:bg-[#FFF9F0] border border-[#0F2D5B]/15 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 7 Vehicles Grid Layout (3-Column Desktop Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {filteredVehicles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#0F2D5B]/10 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                {/* Vehicle Image Container */}
                <div
                  onClick={() => setSelectedSpotlight(item)}
                  className="mb-6 w-full aspect-[4/3] rounded-2xl relative cursor-pointer group/img overflow-hidden bg-transparent"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} Cab Service in Udaipur`}
                    className={`block w-full h-full ${
                      item.objectFit === "contain"
                        ? "object-contain p-2 bg-[#0F2D5B]"
                        : "object-cover"
                    } transition-transform duration-500 group-hover/img:scale-105`}
                    style={{ objectPosition: item.objectPosition || "center" }}
                    loading="lazy"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 bg-[#0F2D5B]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white tracking-wider uppercase border border-white/10 shadow-sm">
                    {item.category}
                  </div>

                  {/* Quick View Overlay Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-[#0F2D5B] shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 border border-[#0F2D5B]/10">
                    <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>View Specifications</span>
                  </div>
                </div>

                {/* Vehicle Header & Title */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3
                      onClick={() => setSelectedSpotlight(item)}
                      className="text-2xl font-extrabold text-[#0F2D5B] tracking-tight group-hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#64748B] mb-6 font-normal leading-relaxed min-h-[40px]">
                  {item.description}
                </p>

                {/* Key Specifications Grid */}
                <div className="space-y-2.5 py-4 border-t border-[#0F2D5B]/10 mb-6 text-xs text-[#102A43]">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-[#0F2D5B] shrink-0" />
                    <span className="font-semibold text-[#0F2D5B]">{item.passengers}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-[#0F2D5B] shrink-0" />
                    <span>{item.luggage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wind className="w-4 h-4 text-[#0F2D5B] shrink-0" />
                    <span>{item.climateControl}</span>
                  </div>
                </div>

                {/* Key Features Bullet Points */}
                <ul className="space-y-2 mb-6 text-xs text-[#64748B]">
                  {item.features.slice(0, 3).map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#0F2D5B]/10 flex flex-col sm:flex-row gap-2.5 relative z-10">
                <button
                  onClick={() => onSelectVehicle(item.title)}
                  className="flex-1 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#0F2D5B] active:scale-[0.98] transition-all duration-200 shadow-md text-center flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none"
                >
                  <span>BOOK THIS RIDE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => handleDirectWhatsApp(item)}
                  className="py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F2D5B] bg-[#FFF9F0] hover:bg-[#E6F0FF] border border-[#0F2D5B]/20 transition-all duration-200 text-center cursor-pointer whitespace-nowrap focus-visible:outline-none"
                  title="Ask Quote via WhatsApp"
                >
                  GET A QUOTE
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Conversion Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0F2D5B] text-white border border-[#0F2D5B]/20 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl text-left relative z-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-3">
              EXPERT CAB ADVICE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              NOT SURE WHICH VEHICLE TO CHOOSE?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              Tell us about your journey, group size, and travel plans—we'll recommend the perfect vehicle for your Udaipur trip.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto relative z-10 shrink-0">
            <button
              onClick={() => onSelectVehicle("General Vehicle Consultation")}
              className="w-full sm:w-auto py-4 px-7 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F2D5B] bg-white hover:bg-[#D4AF37] hover:text-[#0F2D5B] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>FIND YOUR RIDE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${siteConfig.contact.rawPhone}`}
              className="w-full sm:w-auto py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2 text-center"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>CONTACT US</span>
            </a>
          </div>
        </div>
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
              aria-labelledby="spotlight-title"
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
                {/* Header Vehicle Image with Gallery Controls */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full bg-[#F3F7FB] group">
                  {(() => {
                    const galleryImages = selectedSpotlight.images || [selectedSpotlight.image];
                    const currentImg = galleryImages[activeImageIdx] || selectedSpotlight.image;
                    return (
                      <>
                        <img
                          key={currentImg}
                          src={currentImg}
                          alt={selectedSpotlight.title}
                          className={`block w-full h-full ${
                            selectedSpotlight.objectFit === "contain"
                              ? "object-contain p-2 bg-[#001429]"
                              : "object-cover"
                          } transition-all duration-300`}
                          style={{ objectPosition: selectedSpotlight.objectPosition || "center" }}
                        />

                        {/* Prev / Next Carousel Controls if multiple images exist */}
                        {galleryImages.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
                              }}
                              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-sm border border-white/20"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIdx((prev) => (prev + 1) % galleryImages.length);
                              }}
                              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-sm border border-white/20"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Thumbnail Dots Navigation */}
                            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 z-10">
                              {galleryImages.map((img, i) => (
                                <button
                                  key={img}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImageIdx(i);
                                  }}
                                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                                    i === activeImageIdx
                                      ? "bg-[#007FF0] w-6"
                                      : "bg-white/70 hover:bg-white"
                                  }`}
                                  aria-label={`Go to slide ${i + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}

                  <div className="absolute top-4 left-4 bg-[#002247]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white tracking-wider uppercase border border-white/10">
                    {selectedSpotlight.category}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#EAF5FF] text-[#007FF0] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#C2A03E]" />
                    <span>VERIFIED VEHICLE SPECIFICATIONS</span>
                  </div>
                  <h3 id="spotlight-title" className="text-3xl font-extrabold text-[#002247]">
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
