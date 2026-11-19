import React from "react";
import { Sparkles, Car, ShieldCheck, CheckCircle2, ArrowDown, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "../components/ui/SEO";
import { getFleetPageSchema } from "../config/seoSchemas";
import { Fleet } from "../components/sections/Fleet";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";
import { WhatsAppIcon } from "../components/ui/WhatsAppIcon";
import { siteConfig, buildWhatsAppBookingUrl } from "../config/site";

interface FleetPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const FleetPage: React.FC<FleetPageProps> = ({ onOpenBooking }) => {
  const scrollToFleet = () => {
    const el = document.getElementById("fleet");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FFF9F0]">
      <SEO
        title="Car Rental in Udaipur with Driver | Sedans, Innova & Urbania Fleets"
        description="Hire chauffeur-driven cars in Udaipur: Swift Dzire, Ertiga, Toyota Innova Crysta, Innova Hycross, Force Tempo Traveller, and Luxury Urbania."
        canonicalPath="/fleet"
        schema={getFleetPageSchema()}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Fleet", url: "/fleet" },
        ]}
      />

      {/* =========================================================================
          HERO BANNER: Luxury Cinematic Fleet Showcase
      ========================================================================= */}
      <section className="relative text-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-32 overflow-hidden bg-[#001833]">
        {/* Cinematic Panoramic Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/images/fleet-hero-cinematic.webp')` }}
        />

        {/* Multi-Stop Royal Gradient Overlay for Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001833]/85 via-[#002247]/60 to-[#001833]/95" />

        {/* Ambient Gold Radial Glow */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[42rem] h-[28rem] bg-[#D4AF37]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Royal Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 mb-5 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFF9F0]">
              AUDICHYA TOURS · PRESTIGE FLEET & LUXURY CHAUFFEURS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[11px] font-medium text-white/80">Udaipur & Pan-Rajasthan</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-serif drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] max-w-4xl mx-auto"
          >
            Our Premium Fleet <span className="text-[#D4AF37]">& Luxury Cabs</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-[#FFF9F0]/90 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
          >
            From executive sedans and family MPVs to luxury Innova Crysta, Hycross & Force Urbania — immaculate, sanitized, and chauffeured by courteous local experts for every journey.
          </motion.p>

          {/* Trust Highlights Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90"
          >
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Sanitized & Chilled AC</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Yellow Commercial Plates & Insured</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <Car className="w-4 h-4 text-[#D4AF37]" />
              <span>4 to 25 Seater Options</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={scrollToFleet}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#007FF0] hover:bg-[#006bd1] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#007FF0]/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Car className="w-4 h-4" />
              <span>EXPLORE VEHICLES</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>BOOK YOUR CAB</span>
            </button>

            <a
              href={buildWhatsAppBookingUrl({
                customNotes: "Namaste Audichya Tours, I am interested in inquiring about your fleet and cab availability.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>FAST WHATSAPP INQUIRY</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fleet Catalog Grid */}
      <Fleet
        onSelectVehicle={(vehicle) => {
          onOpenBooking(vehicle);
        }}
      />

      <CinematicFinalCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
