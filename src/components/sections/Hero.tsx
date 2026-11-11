import React from "react";
import { ArrowRight, Compass, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { HeroScene } from "../three/HeroScene";

interface HeroProps {
  onOpenBooking: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:py-0 flex items-center bg-[#F7FAFC] overflow-hidden"
    >
      {/* Background Architectural Watermark / Ambient Wash */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EAF5FF]/60 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#007FF0]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Conversion */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#007FF0]/15 text-[11px] font-bold uppercase tracking-[0.2em] text-[#007FF0]">
              <span className="w-2 h-2 rounded-full bg-[#007FF0] animate-pulse" />
              <span>AUDICHYA TOURS · LIVE YOUR TRAVEL DREAMS RAJASTHAN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#002247] tracking-tight leading-[1.08] mb-4 [text-wrap:balance]">
              Explore Udaipur & Rajasthan <br />
              <span className="text-[#007FF0]">with Audichya Tours</span>
            </h1>

            {/* Supporting Copy */}
            <h2 className="text-sm sm:text-base md:text-lg text-[#002247] font-bold mb-2">
              Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] max-w-xl font-normal leading-relaxed mb-6 [text-wrap:balance]">
              Discover the beauty of Rajasthan with convenient travel, flexible itineraries and easy direct booking.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#007FF0]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007FF0] focus-visible:ring-offset-2"
              >
                <span>BOOK YOUR TAXI</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#002247] bg-white hover:bg-slate-50 border border-slate-200/90 active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007FF0]"
              >
                <Compass className="w-4 h-4 text-[#007FF0]" />
                <span>EXPLORE TOUR PACKAGES</span>
              </button>
            </div>

            {/* Prominent Phone Number */}
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#002247] bg-[#EAF5FF] px-4 py-2 rounded-xl mb-6 border border-[#007FF0]/20">
              <a href="tel:919772771118" className="hover:text-[#007FF0]">+91 97727 71118</a>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/90 w-full max-w-lg">
              <div className="grid grid-cols-3 gap-4 text-left">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#002247]">
                    LOCAL RIDES
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    City & lake tours
                  </span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#002247]">
                    AIRPORT TRANSFERS
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    UDR meet & greet
                  </span>
                </div>
                <div className="flex flex-col border-l border-slate-200 pl-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#002247]">
                    OUTSTATION TRIPS
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    Forts & hill routes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Future 3D Canvas Viewport (Stage 1 Placeholder) */}
          <div className="lg:col-span-6 w-full relative">
            <HeroScene className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
