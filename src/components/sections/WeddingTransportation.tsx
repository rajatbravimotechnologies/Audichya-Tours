import React from "react";
import { Sparkles, Users, Crown, ArrowRight, Heart, Hotel, Plane } from "lucide-react";
import { buildWhatsAppBookingUrl } from "../../config/site";

interface WeddingProps {
  onOpenBooking: () => void;
}

export const WeddingTransportation: React.FC<WeddingProps> = ({ onOpenBooking }) => {
  const weddingServices = [
    { title: "Guest Transfers", desc: "Coordinated fleet pickups across Udaipur for arriving guests.", icon: Users },
    { title: "Airport Pickup", desc: "Dedicated reception desk & luggage assistance at UDR airport.", icon: Plane },
    { title: "Hotel Transfers", desc: "Shuttle between luxury hotels, heritage villas, and homestays.", icon: Hotel },
    { title: "Venue Transfers", desc: "Punctual convoy to Jagmandir, City Palace, or lakeside lawns.", icon: Crown },
    { title: "Group Transportation", desc: "Spacious SUVs and tempo arrangements for baraat and family.", icon: Sparkles },
  ];

  const handleWeddingWhatsApp = () => {
    const url = buildWhatsAppBookingUrl({
      customNotes: "Inquiry for Udaipur Destination Wedding Guest Fleet & Transport Planning.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full">
      {/* 1. Uncluttered Hero Banner letting the wedding background image breathe */}
      <section id="weddings" className="pt-32 lg:pt-44 pb-24 lg:pb-36 text-white relative overflow-hidden bg-[#002247]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/wedding-transport-background.webp')` }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-[#0F2D5B] bg-white/90 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-md">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>AUDICHYA TOURS · WEDDING RENTAL TAXI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Royal Rajasthan Wedding Transportation
          </h1>

          <p className="text-base sm:text-xl text-white font-semibold leading-relaxed mb-10 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Audichya Tours provides luxury cars, Innova Crysta, and premium Force Urbania fleets for royal palace wedding guest transfers across Udaipur.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWeddingWhatsApp}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#002247] bg-[#C2A03E] hover:bg-[#b08e2f] active:scale-[0.98] transition-all shadow-xl cursor-pointer"
            >
              <span>PLAN WEDDING TRANSPORTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 transition-all cursor-pointer"
            >
              <span>Book Guest Cabs</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Next Section: Cards & Palace Protocol below Hero */}
      <section className="py-16 lg:py-24 bg-[#FFF9F0] border-t border-[#0F2D5B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Dedicated Wedding Logistics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2D5B]">
              Wedding Transportation, Perfectly Coordinated
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] mt-3">
              Comprehensive chauffeur-driven fleet options tailored for luxury destination wedding guests across Udaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* 5 Cards Layout */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {weddingServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`p-6 rounded-3xl bg-white border border-[#0F2D5B]/10 shadow-sm hover:shadow-md hover:border-[#D4AF37]/60 transition-all text-left ${
                      idx === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] text-[#0F2D5B] border border-[#0F2D5B]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0F2D5B]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F2D5B] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Palace Protocol Box */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-3xl p-8 bg-[#0F2D5B] text-white border border-[#D4AF37]/40 shadow-xl text-left relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    Udaipur Palace Venues
                  </span>
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                </div>

                <div className="py-4 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]/30">
                    <Crown className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    The Royal Wedding Protocol
                  </h3>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                    Dedicated fleet coordinator, real-time driver tracking for family liaisons, and polite uniform-clad chauffeurs honoring your royal hospitality.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-2 text-[11px] text-slate-200">
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">City Palace</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">Jagmandir Island</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">The Leela Palace</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">Taj Lake Palace</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">Oberoi Udaivilas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
