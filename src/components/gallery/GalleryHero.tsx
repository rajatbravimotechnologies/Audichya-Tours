import React from "react";
import { motion } from "motion/react";
import { Sparkles, Camera, Star } from "lucide-react";

export const GalleryHero: React.FC = () => {
  return (
    <div className="relative text-white pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-[#002247]">
      {/* Background Image with Cinematic Depth */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('/images/Udaipur Sunset by the Lake.png')`,
        }}
      />

      {/* Dark Navy / Charcoal Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002247]/85 via-[#002247]/75 to-[#002247]/95" />

      {/* Subtle Gold Decorative Ambient Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C2A03E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C2A03E]/40 mb-5"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C2A03E]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFF9F0]">
            AUDICHYA TOURS GALLERY
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C2A03E]" />
          <span className="text-[11px] font-medium text-white/80">Moments & Stories</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md font-serif"
        >
          Every Journey Has a Story
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg lg:text-xl text-[#F7F4ED]/90 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm"
        >
          Explore unforgettable journeys, real customer experiences and beautiful moments with Audichya Tours.
        </motion.p>

        {/* Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-white/90"
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#C2A03E] fill-[#C2A03E]" />
            <span>500+ Verified Travel Reviews</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#007FF0]" />
            <span>Cinematic Travel Features</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C2A03E]" />
            <span>Viral Instagram Reels</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

