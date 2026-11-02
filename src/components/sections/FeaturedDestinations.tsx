import React from "react";
import { destinationsData, DestinationItem } from "../../data/destinations";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface FeaturedDestinationsProps {
  onSelectDestination: (destName: string) => void;
  onExploreAllDestinations: () => void;
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  onSelectDestination,
  onExploreAllDestinations,
}) => {
  // Select top 4 destinations: City Palace, Lake Pichola, Fateh Sagar Lake, Sajjangarh Palace
  const featuredList = destinationsData.slice(0, 4);

  return (
    <section 
      id="explore-preview" 
      className="relative w-full min-h-[580px] lg:min-h-[640px] bg-[#FFF9F0] border-t border-[#0F2D5B]/10 overflow-hidden flex flex-col justify-between py-12 lg:py-16 px-4 sm:px-6 lg:px-12"
    >
      {/* Layer 1: Main Panoramic Background Image (City Palace & Richness concentrated on Right, Negative Space on Left) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/images/Discover_background.png')` }}
      />

      {/* Layer 2: Soft Subtle Gradient Overlay on Left to preserve High Text Readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#FFF9F0]/95 via-[#FFF9F0]/70 to-transparent max-w-3xl pointer-events-none"
      />

      {/* Top Left Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 sm:pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left max-w-[580px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            <span className="w-8 h-[1.5px] bg-[#D4AF37]" />
            <span>THE CITY OF LAKES</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#08264A] tracking-tight leading-[1.15] mb-4">
            Discover the Beauty of Udaipur
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed max-w-[540px] mb-6">
            Explore royal palaces, peaceful lakes, historic streets and unforgettable sunset views with our chauffeur-driven travel services.
          </p>

          {/* Explore All Tour Packages CTA Button */}
          <button
            onClick={onExploreAllDestinations}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider text-[#0F2D5B] bg-white border-2 border-[#0F2D5B]/20 hover:border-[#0F2D5B] hover:bg-[#0F2D5B] hover:text-white transition-all duration-200 shadow-md cursor-pointer"
          >
            <span>EXPLORE ALL TOUR PACKAGES</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Horizontal Row of 4 Destination Cards */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-8 lg:mt-14">
        {/* Mobile Horizontally Scrollable Row / Desktop 4-Column Grid */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
          {featuredList.map((dest: DestinationItem, index: number) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={() => onSelectDestination(dest.name)}
              className="snap-start shrink-0 w-[275px] sm:w-[295px] lg:w-full h-[96px] sm:h-[102px] lg:h-[90px] bg-white/95 backdrop-blur-md rounded-[16px] p-3 border border-white/90 shadow-[0_8px_24px_rgba(8,38,74,0.1)] hover:shadow-[0_12px_32px_rgba(8,38,74,0.16)] transition-all duration-300 flex items-center gap-3.5 cursor-pointer group"
            >
              {/* Card Left: Thumbnail Image */}
              <div className="w-[82px] sm:w-[90px] h-full rounded-[12px] overflow-hidden relative shrink-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Right: Title & Duration */}
              <div className="flex-1 min-w-0 text-left pr-1">
                <h3 className="text-base sm:text-lg font-bold text-[#08264A] group-hover:text-[#007FF0] transition-colors truncate mb-1.5">
                  {dest.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0" />
                  <span className="truncate font-semibold text-xs sm:text-sm text-[#102A43]">
                    {dest.idealDuration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
