import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Clock, MapPin, Check, ArrowRight, MessageCircle } from "lucide-react";
import { TourPackage } from "../../data/tourPackages";

interface PackageCardProps {
  tourPackage: TourPackage;
  onEnquire: (packageName: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ tourPackage, onEnquire }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-3xl overflow-hidden border border-[#002247]/10 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left"
    >
      {/* Top Image Viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <img
          src={tourPackage.image}
          alt={tourPackage.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Duration Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#002247]/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-[#C2A03E]/40 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#C2A03E]" />
          <span>{tourPackage.duration}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1 text-[11px] text-white/90 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#C2A03E] shrink-0" />
          <span className="truncate">{tourPackage.destinationsCovered.slice(0, 3).join(" • ")}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-mono font-bold text-[#007FF0] uppercase tracking-wider mb-1">
            {tourPackage.categoryLabel}
          </div>

          <h3 className="text-xl font-bold text-[#002247] font-serif leading-snug group-hover:text-[#007FF0] transition-colors">
            {tourPackage.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
            {tourPackage.shortDescription}
          </p>

          {/* Key Highlights */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
              Package Highlights:
            </span>
            {tourPackage.highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-[#C2A03E] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: VIEW DETAILS & ENQUIRE NOW */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3">
          <Link
            to={`/tour-packages/${tourPackage.slug}`}
            className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#002247] bg-[#FFF9F0] hover:bg-[#002247] hover:text-white border border-[#002247]/15 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onEnquire(tourPackage.title)}
            className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>ENQUIRE NOW</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

