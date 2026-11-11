import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Clock,
  MapPin,
  Check,
  X,
  Car,
  Calendar,
  MessageCircle,
  PhoneCall,
  ArrowLeft,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";
import { tourPackagesData } from "../data/tourPackages";
import { siteConfig, buildWhatsAppBookingUrl } from "../config/site";
import { fleetData } from "../data/fleet";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";

interface PackageDetailPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ onOpenBooking }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const tour = tourPackagesData.find((p) => p.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-[#FFF9F0]">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002247] font-serif">
          Tour Package Not Found
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-md">
          The requested Rajasthan tour package does not exist or may have been updated.
        </p>
        <Link
          to="/tour-packages"
          className="mt-6 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#002247] hover:bg-[#C2A03E] transition-all"
        >
          &larr; Return to Tour Packages
        </Link>
      </div>
    );
  }

  // Filter recommended vehicles from existing fleet
  const matchingVehicles = fleetData.filter((v) =>
    tour.recommendedVehicles.some(
      (rv) => rv.toLowerCase().includes(v.title.toLowerCase()) || v.title.toLowerCase().includes(rv.toLowerCase())
    )
  );

  const handleWhatsAppEnquiry = () => {
    const url = buildWhatsAppBookingUrl({
      serviceType: tour.title,
      drop: tour.destinationsCovered.join(", "),
      customNotes: `Namaste Audichya Tours, I am interested in inquiring about the "${tour.title}" (${tour.duration}). Please share customized itinerary details and vehicle options.`,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full bg-[#FFF9F0] min-h-screen text-[#002247] selection:bg-[#007FF0] selection:text-white">
      {/* 1. Cinematic Hero Header */}
      <section className="relative text-white pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#002247]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${tour.heroImage || tour.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002247]/90 via-[#002247]/80 to-[#002247]/95" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#F7F4ED]/80 font-medium">
            <Link to="/tour-packages" className="hover:text-[#C2A03E] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tour Packages</span>
            </Link>
            <span>/</span>
            <span className="text-[#C2A03E] font-bold">{tour.categoryLabel}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C2A03E]/40 mb-4 text-xs font-bold uppercase tracking-widest text-[#FFF9F0]">
              <Clock className="w-3.5 h-3.5 text-[#C2A03E]" />
              <span>{tour.duration}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif drop-shadow-md">
              {tour.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
              {tour.overview}
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking(tour.recommendedVehicles[0], tour.title)}
                className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] active:scale-[0.98] transition-all shadow-lg shadow-[#007FF0]/30 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK THIS TOUR</span>
              </button>

              <button
                onClick={handleWhatsAppEnquiry}
                className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP ITINERARY</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Body: Content & Sidebar */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 text-left">
          {/* Left Column: Itinerary, Places Covered, Inclusions (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Places Covered Pills */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#002247]/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                <MapPin className="w-4 h-4" />
                <span>PLACES COVERED IN THIS TOUR</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {tour.destinationsCovered.map((place, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFF9F0] border border-[#C2A03E]/20 text-xs font-semibold text-[#002247]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007FF0]" />
                    {place}
                  </span>
                ))}
              </div>
            </div>

            {/* Day-Wise Itinerary */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                <Compass className="w-4 h-4" />
                <span>DETAILED SCHEDULE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002247] font-serif mb-6">
                Day-Wise Itinerary
              </h2>

              <div className="space-y-6">
                {tour.dayWiseItinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-[#002247]/10 shadow-sm relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#002247] text-[#C2A03E] font-black text-lg flex items-center justify-center shrink-0 border border-[#C2A03E]/30 font-serif">
                        D{day.day}
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#007FF0] block mb-0.5">
                          Day {day.day} Schedule
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#002247] font-serif">
                          {day.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {day.description}
                        </p>

                        {day.highlights && day.highlights.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                            {day.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                              >
                                <Check className="w-3 h-3 text-[#C2A03E]" />
                                {h}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#002247]/10 shadow-sm">
                <h3 className="text-base font-bold text-[#002247] font-serif mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span>Inclusions (Confirmed)</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#002247]/10 shadow-sm">
                <h3 className="text-base font-bold text-[#002247] font-serif mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center font-bold">
                    ✕
                  </span>
                  <span>Exclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {tour.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Fleet Preview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#002247]/10 shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                <Car className="w-4 h-4" />
                <span>RECOMMENDED VEHICLES FOR THIS ROUTE</span>
              </div>
              <h3 className="text-xl font-bold text-[#002247] font-serif mb-6">
                Chauffeur-Driven Travel Fleet
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {(matchingVehicles.length > 0 ? matchingVehicles : fleetData.slice(0, 3)).map((car) => (
                  <div
                    key={car.id}
                    className="p-4 rounded-2xl bg-[#FFF9F0] border border-slate-200/80 flex flex-col justify-between"
                  >
                    <img
                      src={car.image}
                      alt={car.title}
                      className="w-full h-28 object-cover rounded-xl mb-3"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#002247] leading-snug">
                        {car.title}
                      </h4>
                      <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">
                        {car.passengers}
                      </span>
                    </div>
                    <button
                      onClick={() => onOpenBooking(car.title, tour.title)}
                      className="mt-3 w-full py-2 rounded-lg bg-white hover:bg-[#007FF0] hover:text-white text-[#007FF0] border border-[#007FF0]/30 text-[11px] font-bold uppercase tracking-wider transition-colors"
                    >
                      Choose Vehicle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Quick Enquiry Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 border border-[#C2A03E]/40 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#007FF0] block">
                  Audichya Tours Rajasthan
                </span>
                <h3 className="text-xl font-bold text-[#002247] font-serif mt-1">
                  Enquire About This Tour
                </h3>
                <p className="mt-1.5 text-xs text-slate-600">
                  Contact our destination specialist for customized schedules, group sizes, and instant quotes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#C2A03E]/20 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Duration:</span>
                  <span className="font-bold text-[#002247]">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Category:</span>
                  <span className="font-bold text-[#002247]">{tour.categoryLabel}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Starting From:</span>
                  <span className="font-bold text-[#C2A03E]">Best Guaranteed Quote</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenBooking(tour.recommendedVehicles[0], tour.title)}
                  className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>CUSTOMIZE & BOOK TOUR</span>
                </button>

                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>INQUIRE VIA WHATSAPP</span>
                </button>

                <a
                  href={`tel:${siteConfig.contact.rawPhone1}`}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#002247] bg-[#FFF9F0] hover:bg-[#002247] hover:text-white border border-[#002247]/15 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#C2A03E]" />
                  <span>CALL {siteConfig.contact.phone1}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero cancellation fees up to 24 hrs prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent vehicle fuel & toll coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Final Cinematic CTA */}
      <CinematicFinalCTA onOpenBooking={() => onOpenBooking(undefined, tour.title)} />
    </div>
  );
};

