import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  MapPin,
  Sparkles,
  Calendar,
  Users,
  ShieldCheck,
  Award,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Building,
  HeartHandshake,
} from "lucide-react";
import { tourPackagesData, destinationShowcase } from "../data/tourPackages";
import { PackageCard } from "../components/packages/PackageCard";
import { CustomTourEnquiryForm } from "../components/packages/CustomTourEnquiryForm";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";

interface TourPackagesPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const TourPackagesPage: React.FC<TourPackagesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "udaipur" | "rajasthan" | "multi-city">("all");

  const categories = [
    { id: "all", label: "All Packages" },
    { id: "udaipur", label: "A. Udaipur Tour Packages" },
    { id: "rajasthan", label: "B. Rajasthan Tour Packages" },
    { id: "multi-city", label: "C. Multi-City Tours" },
  ];

  const filteredPackages = tourPackagesData.filter((pkg) => {
    if (selectedCategory === "all") return true;
    return pkg.category === selectedCategory;
  });

  const handleScrollToCategories = () => {
    const el = document.getElementById("tour-categories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToCustom = () => {
    const el = document.getElementById("custom-itinerary-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Why Travel With Us 6 Trust Pillars
  const trustPillars = [
    {
      title: "Personalized Itineraries",
      description: "Customized day-wise routes, flexible sightseeing hours, and tailored stops matched to your travel pace.",
      icon: Compass,
    },
    {
      title: "Comfortable Travel",
      description: "Spotless, sanitized, air-conditioned executive sedans, spacious Innova Crystas, and luxury Force Urbanias.",
      icon: ShieldCheck,
    },
    {
      title: "Local Destination Knowledge",
      description: "Verified chauffeurs with deep insights into heritage spots, secret sunset viewpoints, and authentic Mewar dining.",
      icon: Landmark,
    },
    {
      title: "Flexible Tour Planning",
      description: "Add spontaneous stops at ancient stepwells or hill temples without rigid corporate time constraints.",
      icon: Award,
    },
    {
      title: "Dedicated Travel Assistance",
      description: "Round-the-clock direct phone and WhatsApp assistance from trip planning to airport departure.",
      icon: Headphones,
    },
    {
      title: "Convenient Booking",
      description: "Direct instant confirmation with zero hidden costs, clear inclusions, and guaranteed vehicle dispatch.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full bg-[#FFF9F0] min-h-screen text-[#002247] selection:bg-[#007FF0] selection:text-white">
      {/* =========================================================================
          1. CINEMATIC HERO SECTION
      ========================================================================= */}
      <section className="relative text-white pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-[#002247]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/Discover Udaipur Background.webp')`,
          }}
        />

        {/* Dark Vignette Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002247]/90 via-[#002247]/80 to-[#002247]/95" />

        {/* Ambient Gold Halo */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-[#C2A03E]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C2A03E]/40 mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C2A03E]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFF9F0]">
              AUDICHYA TOURS · CURATED RAJASTHAN HOLIDAYS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md font-serif max-w-4xl mx-auto"
          >
            Discover Rajasthan, One Journey at a Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg lg:text-xl text-[#F7F4ED]/90 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm"
          >
            Explore royal palaces, beautiful lakes, golden deserts and unforgettable destinations with thoughtfully planned Rajasthan tour packages.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleScrollToCategories}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] active:scale-[0.98] transition-all shadow-xl shadow-[#007FF0]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>EXPLORE TOUR PACKAGES</span>
            </button>

            <button
              onClick={handleScrollToCustom}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#002247] bg-white hover:bg-[#C2A03E] hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C2A03E]" />
              <span>PLAN YOUR TRIP</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. TOUR PACKAGE CATEGORIES & CARDS
      ========================================================================= */}
      <section id="tour-categories" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
            <span className="w-5 h-[2px] bg-[#C2A03E]" />
            <span>CURATED TRAVEL PACKAGES</span>
            <span className="w-5 h-[2px] bg-[#C2A03E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight leading-tight font-serif">
            Choose Your Rajasthan Tour Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Whether you want a day of romantic lake exploration or an epic multi-day desert expedition, explore our thoughtfully planned tour itineraries.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as typeof selectedCategory)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#002247] text-white shadow-md border border-[#002247]"
                  : "bg-white text-slate-700 hover:text-[#002247] hover:bg-[#FFF9F0] border border-[#002247]/15 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}

          {/* Direct link to Customized Section */}
          <button
            onClick={handleScrollToCustom}
            className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C2A03E]/15 to-[#007FF0]/15 text-[#002247] border border-[#C2A03E]/40 hover:bg-[#C2A03E] hover:text-white transition-all cursor-pointer"
          >
            D. Customized Tour Packages ✨
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((tour) => (
            <PackageCard
              key={tour.slug}
              tourPackage={tour}
              onEnquire={(pkgTitle) => onOpenBooking(undefined, pkgTitle)}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          3. DESTINATION SHOWCASE: "Explore the Royal Land of Rajasthan"
      ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#002247]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
              <MapPin className="w-4 h-4" />
              <span>ICONIC RAJASTHAN DESTINATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight font-serif">
              Explore the Royal Land of Rajasthan
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Each city across Rajasthan holds a unique legacy. Discover the breathtaking palaces, historic forts, and sacred temples awaiting you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationShowcase.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 text-left"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                <div className="relative z-10">
                  <span className="px-2.5 py-1 rounded-md bg-[#C2A03E]/90 text-[#002247] text-[10px] font-bold uppercase tracking-widest inline-block mb-2">
                    {dest.tourCount}
                  </span>

                  <h3 className="text-2xl font-bold text-white font-serif leading-tight">
                    {dest.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-300 font-medium">
                    {dest.tagline}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/20 flex flex-wrap gap-1.5">
                    {dest.highlights.slice(0, 3).map((h, i) => (
                      <span key={i} className="text-[10px] text-white/80 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                        {h}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={handleScrollToCustom}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#C2A03E] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Explore Tours for {dest.name} &rarr;</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY TRAVEL WITH US: Trust Section
      ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
            <HeartHandshake className="w-4 h-4" />
            <span>THE AUDICHYA PROMISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight font-serif">
            Why Travel With Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We are not just a transport company; we are your local hospitality partners ensuring every moment in Rajasthan is comfortable, memorable, and safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#002247]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] text-[#002247] border border-[#C2A03E]/30 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#C2A03E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#002247] font-serif">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[#007FF0] text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Audichya Quality Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. CUSTOM TOUR ENQUIRY SECTION
      ========================================================================= */}
      <section id="custom-itinerary-section" className="py-20 lg:py-24 bg-white border-y border-[#002247]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CustomTourEnquiryForm />
        </div>
      </section>

      {/* =========================================================================
          6. FINAL TOUR PLANNER CTA
      ========================================================================= */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl overflow-hidden bg-[#002247] text-white p-8 sm:p-14 lg:p-16 border border-[#C2A03E]/40 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
            style={{ backgroundImage: `url('/images/Discover Udaipur Background.webp')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002247] via-[#002247]/90 to-[#002247]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
              <Sparkles className="w-4 h-4" />
              <span>LIVE YOUR TRAVEL DREAMS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white">
              Let's Plan Your Rajasthan Journey
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-200">
              From the romantic lakes of Udaipur to the golden dunes of Jaisalmer, let us help you experience Rajasthan with comfort, care, and royal hospitality.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleScrollToCustom}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] active:scale-[0.98] transition-all shadow-xl shadow-[#007FF0]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>PLAN YOUR TOUR</span>
              </button>

              <button
                onClick={() => onOpenBooking(undefined, "Custom Rajasthan Holiday")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#002247] bg-white hover:bg-[#C2A03E] hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C2A03E]" />
                <span>QUICK ENQUIRY MODAL</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Final CTA */}
      <CinematicFinalCTA onOpenBooking={() => onOpenBooking(undefined, "Rajasthan Tour Package")} />
    </div>
  );
};

