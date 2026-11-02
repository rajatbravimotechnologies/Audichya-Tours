import React from "react";
import { Plane, Car, MapPin, ArrowRight, ShieldCheck, Clock, Luggage, Navigation } from "lucide-react";
import { siteConfig, buildWhatsAppBookingUrl } from "../../config/site";

interface AirportTransferProps {
  onOpenBooking: () => void;
}

export const AirportTransfer: React.FC<AirportTransferProps> = ({ onOpenBooking }) => {
  const handleDirectAirportWhatsApp = () => {
    const url = buildWhatsAppBookingUrl({
      pickup: "Maharana Pratap Airport (UDR)",
      drop: "Hotel / Destination in Udaipur",
      customNotes: "Inquiry for Udaipur Airport (UDR) pickup service.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="airport" className="py-20 lg:py-28 bg-[#FFF9F0] relative overflow-hidden border-t border-[#0F2D5B]/10">
      {/* Decorative ambient curves */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#0F2D5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <Plane className="w-4 h-4 text-[#D4AF37]" />
              <span>Maharana Pratap Airport (UDR) Transfers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Landing in Udaipur?
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] font-normal leading-relaxed mb-8 [text-wrap:balance]">
              Start your journey with a comfortable airport pickup. No long taxi lines, no haggling, and no delays—just a dedicated driver awaiting your arrival.
            </p>

            {/* Airport Transfer Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl border border-[#0F2D5B]/10 shadow-xs">
                <Clock className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wide">
                  Flight Tracking
                </h4>
                <p className="text-[11px] text-[#64748B] mt-1">
                  We monitor flight arrivals for delays
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#0F2D5B]/10 shadow-xs">
                <Luggage className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wide">
                  Luggage Assist
                </h4>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Chauffeur assistance from terminal exit
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#0F2D5B]/10 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h4 className="text-xs font-bold text-[#102A43] uppercase tracking-wide">
                  Fixed Pricing
                </h4>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Transparent quote, toll inclusive options
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] active:scale-[0.98] transition-all shadow-md shadow-[#0F2D5B]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>BOOK AIRPORT TRANSFER</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDirectAirportWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F2D5B] bg-white hover:bg-[#FFF9F0] border border-[#0F2D5B]/20 transition-all cursor-pointer"
              >
                <span>WhatsApp Airport Desk</span>
              </button>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-3xl p-8 border border-[#0F2D5B]/10 shadow-xl relative">
              <div className="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-6 text-center">
                Seamless Transfer Concept
              </div>

              {/* Step Sequence Flow */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 my-6">
                {/* Visual Step 1: Airport */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-[#0F2D5B] text-white flex items-center justify-center mb-3 shadow-md group hover:scale-105 transition-transform">
                    <Plane className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs font-bold uppercase text-[#102A43]">
                    01. Airport Terminal
                  </span>
                  <span className="text-[11px] text-[#64748B] mt-0.5">
                    Maharana Pratap (UDR)
                  </span>
                </div>

                {/* Connecting Arrow */}
                <div className="hidden md:flex flex-1 items-center justify-center text-[#D4AF37] -mt-6">
                  <div className="w-full border-t-2 border-dashed border-[#D4AF37]/40 relative">
                    <Car className="w-5 h-5 text-[#D4AF37] absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white px-0.5" />
                  </div>
                </div>

                {/* Visual Step 2: Cab */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37] text-[#102A43] flex items-center justify-center mb-3 shadow-md group hover:scale-105 transition-transform">
                    <Car className="w-8 h-8 text-[#102A43]" />
                  </div>
                  <span className="text-xs font-bold uppercase text-[#102A43]">
                    02. Chauffeur Cab
                  </span>
                  <span className="text-[11px] text-[#64748B] mt-0.5">
                    AC Sedan or SUV
                  </span>
                </div>

                {/* Connecting Arrow */}
                <div className="hidden md:flex flex-1 items-center justify-center text-[#D4AF37] -mt-6">
                  <div className="w-full border-t-2 border-dashed border-[#D4AF37]/40 relative">
                    <Navigation className="w-4 h-4 text-[#D4AF37] absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-0.5" />
                  </div>
                </div>

                {/* Visual Step 3: Destination */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-[#0F2D5B] text-white flex items-center justify-center mb-3 shadow-md group hover:scale-105 transition-transform">
                    <MapPin className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs font-bold uppercase text-[#102A43]">
                    03. Destination
                  </span>
                  <span className="text-[11px] text-[#64748B] mt-0.5">
                    Hotel, Resort or Ghat
                  </span>
                </div>
              </div>

              {/* Status Note Box */}
              <div className="mt-8 p-4 rounded-xl bg-[#FFF9F0] border border-[#0F2D5B]/10 flex items-center justify-between text-xs text-[#102A43]">
                <span className="font-medium">Direct transfers to Lake Pichola, Fatehsagar & Old City hotels</span>
                <span className="font-mono text-[#D4AF37] font-bold text-[11px]">24/7 ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
