import React, { useState } from "react";
import { Car, Landmark, Plane, Sparkles, MapPin, Compass } from "lucide-react";

export type ImageTheme =
  | "sedan"
  | "suv"
  | "premium"
  | "city-palace"
  | "lake-pichola"
  | "fateh-sagar"
  | "monsoon-palace"
  | "jagdish-temple"
  | "saheliyon-ki-bari"
  | "bagore-ki-haveli"
  | "shilpgram"
  | "wedding"
  | "airport"
  | "hero"
  | (string & {});

interface ImagePlaceholderProps {
  theme: ImageTheme;
  title: string;
  subtitle?: string;
  src?: string;
  alt?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  className?: string;
}

/**
 * ImagePlaceholder:
 * Implements the Zero-Broken-Image Policy from the frontend-design constitution.
 * Displays high-aesthetic, branded SVG art with Rajasthan architectural cues,
 * or gracefully renders a real image when `src` is supplied.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  theme,
  title,
  subtitle,
  src,
  alt = title,
  aspectRatio = "4/3",
  className = "",
}) => {
  const [imgError, setImgError] = useState(false);

  const aspectClass =
    aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : aspectRatio === "1/1"
      ? "aspect-square"
      : aspectRatio === "3/2"
      ? "aspect-[3/2]"
      : "aspect-[4/3]";

  if (src && !imgError) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-[#002247] ${aspectClass} ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      </div>
    );
  }

  // Fallback high-fidelity thematic vector representations
  const renderThemeVisual = () => {
    switch (theme) {
      case "sedan":
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1726] via-[#002247] to-[#001730]">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#007FF0]/20 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <Car className="w-8 h-8 text-[#007FF0]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C2A03E]">
                Comfort Sedan Fleet
              </span>
              <span className="text-white font-bold text-lg mt-1">{title}</span>
              {subtitle && <span className="text-slate-300 text-xs mt-1">{subtitle}</span>}
            </div>
            {/* Sedan Silhouette */}
            <div className="absolute bottom-4 inset-x-8 h-10 border-b border-white/10 flex items-end justify-center">
              <span className="text-[10px] text-white/50 tracking-widest uppercase font-mono">
                AC · 4 Passengers · Dual Luggage
              </span>
            </div>
          </div>
        );

      case "suv":
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#002247] via-[#041d3b] to-[#011429]">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#C2A03E]/15 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <Compass className="w-8 h-8 text-[#C2A03E]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#007FF0]">
                Spacious SUV Fleet
              </span>
              <span className="text-white font-bold text-lg mt-1">{title}</span>
              {subtitle && <span className="text-slate-300 text-xs mt-1">{subtitle}</span>}
            </div>
            <div className="absolute bottom-4 inset-x-8 h-10 border-b border-white/10 flex items-end justify-center">
              <span className="text-[10px] text-white/50 tracking-widest uppercase font-mono">
                6-7 Passengers · Hill Route Comfort
              </span>
            </div>
          </div>
        );

      case "premium":
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B1726] via-[#05182d] to-[#001427]">
            <div className="absolute inset-0 bg-[radial-gradient(#C2A03E_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#C2A03E]/20 backdrop-blur-md border border-[#C2A03E]/40 flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-[#C2A03E]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C2A03E]">
                Executive Luxury
              </span>
              <span className="text-white font-bold text-lg mt-1">{title}</span>
              {subtitle && <span className="text-slate-300 text-xs mt-1">{subtitle}</span>}
            </div>
            <div className="absolute bottom-4 inset-x-8 h-10 border-b border-white/10 flex items-end justify-center">
              <span className="text-[10px] text-white/50 tracking-widest uppercase font-mono">
                VIP Chauffeur · Palace Arrivals
              </span>
            </div>
          </div>
        );

      case "wedding":
        return (
          <div className="relative w-full h-full flex flex-col justify-end p-8 bg-gradient-to-t from-[#001730] via-[#002247]/90 to-[#0B1726]">
            {/* Heritage Arch Jharokha Motif */}
            <div className="absolute top-6 inset-x-8 flex justify-center opacity-30">
              <svg viewBox="0 0 200 60" fill="none" className="w-48 h-auto">
                <path
                  d="M10 60 C10 30 50 10 100 10 C150 10 190 30 190 60"
                  stroke="#C2A03E"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#C2A03E] mb-1">
                Royal Destination Weddings
              </span>
              <h4 className="text-xl font-bold text-white font-serif tracking-tight">{title}</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-sm">{subtitle}</p>
            </div>
          </div>
        );

      case "airport":
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#002247] via-[#08305c] to-[#0B1726]">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span className="font-mono text-[#007FF0]">MAHARANA PRATAP AIRPORT (UDR)</span>
              <Plane className="w-4 h-4 text-[#C2A03E]" />
            </div>
            <div className="relative z-10 text-left my-auto">
              <h4 className="text-xl font-bold text-white">{title}</h4>
              <p className="text-xs text-slate-300 mt-1">{subtitle}</p>
            </div>
            <div className="text-[11px] text-[#007FF0] font-medium tracking-wide">
              Flight Monitoring · Terminal Meet & Greet
            </div>
          </div>
        );

      default:
        // Udaipur Heritage Destination Theme
        return (
          <div className="relative w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-[#002247] via-[#021833]/80 to-[#082344]">
            {/* Palace/Monument Motif */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C2A03E] border border-white/10">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="relative z-10 text-left">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#007FF0] flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Udaipur Destination
              </span>
              <h4 className="text-lg font-bold text-white mt-1">{title}</h4>
              {subtitle && <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">{subtitle}</p>}
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 ${aspectClass} ${className}`}
    >
      {renderThemeVisual()}
      {/* Subtle border highlight */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
    </div>
  );
};
