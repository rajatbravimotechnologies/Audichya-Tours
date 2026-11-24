import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { siteConfig, buildWhatsAppBookingUrl } from "../../config/site";
import { ArrowRight, MessageCircle, Phone, Shield, Compass, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface CinematicFinalCTAProps {
  onOpenBooking: () => void;
}

interface CTAPlace {
  title: string;
  location: string;
  image: string;
}

// 10 Curated destination places directly from Rajasthan & Udaipur Tour Packages (all 100% verified local assets)
const ctaPackagePlaces: CTAPlace[] = [
  {
    title: "Lake Pichola & City Palace",
    location: "Udaipur, Rajasthan",
    image: "/images/Udaipur Sunset by the Lake.png",
  },
  {
    title: "The Grand City Palace",
    location: "Udaipur Heritage Tour",
    image: "/images/City Palace.webp",
  },
  {
    title: "Kumbhalgarh Fort & Great Wall",
    location: "Mewar Heritage Circuit",
    image: "/images/Kumbhalgarh Fort.webp",
  },
  {
    title: "Chittorgarh Fort & Vijay Stambh",
    location: "Rajasthan Valour Heritage Tour",
    image: "/images/Chittorgarh Fort.webp",
  },
  {
    title: "Sajjangarh Monsoon Palace",
    location: "Aravalli Sunset Sightseeing",
    image: "/images/Sajjangarh.webp",
  },
  {
    title: "Mount Abu & Nakki Lake",
    location: "Rajasthan Lone Hill Retreat",
    image: "/images/Mount Abu.webp",
  },
  {
    title: "Ranakpur Jain Marble Temple",
    location: "1,444 Ornate Pillars Tour",
    image: "/images/Ranakpur Jain Temple.webp",
  },
  {
    title: "Fateh Sagar Lake & Rani Road",
    location: "Scenic Udaipur Lakeside Tour",
    image: "/images/Fateh Sagar Lake.webp",
  },
  {
    title: "Badi Lake (Bahubali Hills)",
    location: "Aravalli Mountain Panorama",
    image: "/images/Badi Lake (Bahubali Hills).webp",
  },
  {
    title: "Jagdish Temple & Old City",
    location: "Indo-Aryan Heritage Tour",
    image: "/images/Jagdish Temple.webp",
  },
];

export const CinematicFinalCTA: React.FC<CinematicFinalCTAProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Automatic smooth background slideshow every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % ctaPackagePlaces.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? ctaPackagePlaces.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % ctaPackagePlaces.length);
  };

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppBookingUrl({
      customNotes: "Hello! I am ready to book my Udaipur taxi journey.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleExploreFleet = () => {
    navigate("/tour-packages");
  };

  const currentPlace = ctaPackagePlaces[currentSlideIndex];

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-[#001429] flex items-center justify-center text-white">
      {/* Background Full Viewport Image Layers: Stacked Crossfade */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {ctaPackagePlaces.map((place, idx) => (
          <div
            key={place.title}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${idx === currentSlideIndex
              ? "opacity-100 z-10 scale-100"
              : "opacity-0 z-0 scale-105 pointer-events-none"
              }`}
          >
            <img
              src={place.image}
              alt={`${place.title} - ${place.location}`}
              className="w-full h-full object-cover object-center"
              loading={idx <= 1 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Original pure image colors without color filters */}
      </div>

      {/* Foreground Conversion Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Cinema Ambient Soft Shadow (Local to text, NOT on background image) */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 -inset-x-12 -inset-y-6 bg-black/65 blur-3xl -z-10 rounded-full pointer-events-none" />

          {/* Headline with High-Definition Cinema Text Shadows */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight [text-wrap:balance]">
            <span className="text-white block [text-shadow:_0_0_30px_#000,_0_0_12px_#000,_0_2px_4px_#000,_0_4px_18px_#000]">
              Live Your Travel Dreams
            </span>
            <span className="text-[#FFD700] block mt-1.5 [text-shadow:_0_0_30px_#000,_0_0_12px_#000,_0_2px_4px_#000,_0_4px_18px_#000] font-black">
              With Audichya Tours.
            </span>
          </h2>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-8">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#0F2D5B] active:scale-[0.98] transition-all shadow-2xl shadow-black/50 cursor-pointer border border-[#D4AF37]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>BOOK YOUR TAXI</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleExploreFleet}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0F2D5B] bg-white hover:bg-[#FFF9F0] active:scale-[0.98] transition-all shadow-2xl border-2 border-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>EXPLORE TOUR PACKAGES</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] transition-all shadow-2xl shadow-black/40 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Interactive Background Slide Controls & Indicator Dots */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrevSlide}
            className="w-8 h-8 rounded-full bg-black/75 hover:bg-[#0F2D5B] text-white border border-white/30 shadow-xl flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous background place"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Slide Dots */}
          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
            {ctaPackagePlaces.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlideIndex(dotIdx)}
                className={`transition-all duration-300 cursor-pointer ${dotIdx === currentSlideIndex
                  ? "w-6 h-2 rounded-full bg-[#FFD700] shadow-sm"
                  : "w-2 h-2 rounded-full bg-white/50 hover:bg-white"
                  }`}
                aria-label={`Slide to destination ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNextSlide}
            className="w-8 h-8 rounded-full bg-black/75 hover:bg-[#0F2D5B] text-white border border-white/30 shadow-xl flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next background place"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quiet Trust Markers */}
        <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold">
          <span className="flex items-center gap-2 text-white bg-black/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 shadow-xl">
            <Shield className="w-4 h-4 text-[#007FF0]" /> Licensed & Insured Fleet
          </span>
          <span className="flex items-center gap-2 text-white bg-black/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 shadow-xl">
            <Compass className="w-4 h-4 text-[#FFD700]" /> Local Chauffeur Expertise
          </span>
          <span className="flex items-center gap-2 text-white bg-black/65 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 shadow-xl">
            <Phone className="w-4 h-4 text-[#007FF0]" /> 24/7 Dispatch Desk
          </span>
        </div>
      </div>
    </section>
  );
};
