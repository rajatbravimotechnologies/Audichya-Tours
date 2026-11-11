import React from "react";
import { Link } from "react-router-dom";
import { Services } from "../components/sections/Services";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";
import { Car, Plane, Crown, MapPin, Building, ShieldCheck, ArrowRight, Compass } from "lucide-react";

interface ServicesPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-[#FFF9F0]">
      {/* Header Banner with Clean Custom Image Background (No Overlay/Filters) */}
      <div className="relative text-white pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-[#0F2D5B]">
        {/* Background Image - Clean with no filter */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/Service-page-background.webp')` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Our Taxi & Tour Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white max-w-2xl mx-auto font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/taxi-services"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] transition-all shadow-md flex items-center gap-2"
            >
              <Car className="w-4 h-4" />
              <span>Dedicated Taxi Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/tour-packages"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#002247] bg-white hover:bg-[#D4AF37] hover:text-white transition-all shadow-md flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Curated Tour Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Services Grid */}
      <Services
        onSelectService={(serviceTitle) => {
          onOpenBooking(undefined, serviceTitle);
        }}
      />

      {/* Detailed Services Deep Dive */}
      <section className="py-16 bg-[#FFF9F0] border-t border-[#0F2D5B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0F2D5B]">Tailored Travel Packages</h2>
            <p className="text-sm text-[#64748B] mt-2">
              Every ride comes with experienced local drivers, clean vehicles, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#0F2D5B]/10 text-left space-y-4 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] text-[#0F2D5B] border border-[#0F2D5B]/10 flex items-center justify-center font-bold">
                <Plane className="w-6 h-6 text-[#0F2D5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2D5B]">Airport Pickup & Drop</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                24/7 transfers to/from Maharana Pratap Airport (UDR). Flight arrival monitoring ensures your driver is waiting at the terminal.
              </p>
              <button
                onClick={() => onOpenBooking("Sedan", "Maharana Pratap Airport (UDR)")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2D5B] hover:text-[#D4AF37]"
              >
                <span>Book Airport Taxi ⟶</span>
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#0F2D5B]/10 text-left space-y-4 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] text-[#D4AF37] border border-[#0F2D5B]/10 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2D5B]">Full-Day Sightseeing</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Flexible 8hr / 80km packages covering City Palace, Lake Pichola, Fatehsagar, Sajjangarh Sunset Palace, and Jagdish Temple.
              </p>
              <button
                onClick={() => onOpenBooking(undefined, "Udaipur Full Day Sightseeing")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2D5B] hover:text-[#D4AF37]"
              >
                <span>Book Sightseeing Tour ⟶</span>
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#0F2D5B]/10 text-left space-y-4 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] text-[#0F2D5B] border border-[#0F2D5B]/10 flex items-center justify-center font-bold">
                <Crown className="w-6 h-6 text-[#0F2D5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2D5B]">Palace Wedding Transport</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Dedicated fleet management for wedding guests arriving at luxury resort venues across Jagmandir, Leela, and Udaivilas.
              </p>
              <button
                onClick={() => onOpenBooking("Premium", "Palace Wedding Venue")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2D5B] hover:text-[#D4AF37]"
              >
                <span>Plan Wedding Fleet ⟶</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <CinematicFinalCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
