import React from "react";
import { Play, Sparkles, MapPin } from "lucide-react";
import { GalleryReel } from "../../data/gallery";
import { motion } from "motion/react";

interface ReelCardProps {
  reel: GalleryReel;
  onPlay: (reel: GalleryReel) => void;
}

export const ReelCard: React.FC<ReelCardProps> = ({ reel, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={() => onPlay(reel)}
      className="group cursor-pointer relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-slate-950 border border-[#002247]/15 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left select-none"
    >
      {/* Background Thumbnail */}
      <img
        src={reel.thumbnail}
        alt={reel.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 group-hover:from-black/95 transition-colors" />

      {/* Top Bar: Reel Indicator & Duration */}
      <div className="relative z-10 p-3.5 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/15">
          <Sparkles className="w-3 h-3 text-[#C2A03E]" />
          <span>Reel</span>
        </div>
        <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono border border-white/10">
          {reel.duration}
        </span>
      </div>

      {/* Center Play Button Overlay */}
      <div className="relative z-10 flex items-center justify-center my-auto">
        <div className="w-12 h-12 rounded-full bg-white/80 group-hover:bg-[#C2A03E] text-[#002247] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-115">
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </div>
      </div>

      {/* Bottom Content: Title & Caption */}
      <div className="relative z-10 p-4 sm:p-5">
        {reel.locationTag && (
          <div className="inline-flex items-center gap-1 text-[#C2A03E] text-[11px] font-semibold mb-1.5">
            <MapPin className="w-3 h-3" />
            <span className="line-clamp-1">{reel.locationTag}</span>
          </div>
        )}

        <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 drop-shadow-sm">
          {reel.title}
        </h3>

        {reel.description && (
          <p className="mt-1 text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
            {reel.description}
          </p>
        )}

        <div className="mt-2.5 flex items-center text-[10px] font-bold text-[#007FF0] group-hover:text-white transition-colors">
          <span>Tap to Watch Full Reel &rarr;</span>
        </div>
      </div>
    </motion.div>
  );
};

