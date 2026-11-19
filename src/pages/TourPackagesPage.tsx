import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { SEO } from "../components/ui/SEO";
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
import { WhatsAppIcon } from "../components/ui/WhatsAppIcon";
import { buildWhatsAppBookingUrl } from "../config/site";
import { tourPackagesData, destinationShowcase } from "../data/tourPackages";
import { PackageCard } from "../components/packages/PackageCard";
import { CustomTourEnquiryForm } from "../components/packages/CustomTourEnquiryForm";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";
import { UdaipurPalaceLineArt } from "../components/ui/UdaipurPalaceLineArt";
import { AravalliMountainLineArt } from "../components/ui/AravalliMountainLineArt";
import { GoldDetailsOverlay } from "../components/ui/GoldDetailsOverlay";

interface TourPackagesPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const TourPackagesPage: React.FC<TourPackagesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "udaipur" | "rajasthan" | "multi-city" | "outstation">("all");

  const categories = [
    { id: "all", label: "All Packages" },
    { id: "udaipur", label: "Udaipur Tour Packages" },
    { id: "rajasthan", label: "Rajasthan Tour Packages" },
    { id: "multi-city", label: "Multi-City Tours" },
    { id: "outstation", label: "Outstation Tours" },
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

  const handleWhatsApp = () => {
    const url = buildWhatsAppBookingUrl({
      serviceType: "Tour Packages Inquiry",
      customNotes: "Namaste Audichya Tours, I am exploring your Rajasthan & Outstation Tour Packages and would like to get a personalized quote and itinerary advice.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
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
      <SEO
        title="Rajasthan Tour Packages from Udaipur | Private Sightseeing Itineraries"
        description="Customized Rajasthan tour packages and Udaipur sightseeing trips with private chauffeur-driven vehicles and flexible day-wise itineraries."
        canonicalPath="/tour-packages"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Tour Packages", url: "/tour-packages" },
        ]}
      />

      {/* =========================================================================
          1. CINEMATIC HERO SECTION
      ========================================================================= */}
      <section className="relative text-white pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-slate-950">
        {/* Background Image: Original Vibrant Colors */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/Discover Udaipur Background.webp')`,
          }}
        />

        {/* Soft, Natural Vignette Overlay for Clear Contrast Without Muddy Darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />

        {/* Ambient Gold Radial Flare */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[38rem] h-[22rem] bg-[#C2A03E]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Main Hero Headline with Royal Gold Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white font-serif max-w-4xl"
          >
            <span className="block [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)]">
              Discover Rajasthan,
            </span>
            <span className="text-[#D4AF37] block mt-2 [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_0_24px_rgba(0,0,0,0.85)] font-black">
              One Journey at a Time.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base lg:text-lg text-slate-100 max-w-2xl font-medium leading-relaxed [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]"
          >
            Explore majestic royal palaces, tranquil lakes, golden desert sand dunes, and sacred pilgrimage shrines with custom itineraries & verified private chauffeurs.
          </motion.p>

          {/* 3 Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            {/* Primary CTA: Explore Tour Packages */}
            <button
              onClick={handleScrollToCategories}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#0F2D5B]/50 cursor-pointer border border-[#D4AF37]/40"
            >
              <Compass className="w-4 h-4 text-[#D4AF37] group-hover:text-[#102A43] transition-colors" />
              <span>EXPLORE PACKAGES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: Plan Your Trip */}
            <button
              onClick={handleScrollToCustom}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#002247] bg-white hover:bg-[#FFF9F0] active:scale-[0.98] transition-all duration-200 shadow-xl border border-white/90 backdrop-blur-md cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C2A03E]" />
              <span>CUSTOM ITINERARY</span>
            </button>

            {/* Tertiary CTA: WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#25D366]/30 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WHATSAPP EXPERT</span>
            </button>
          </motion.div>

          {/* Bottom Trust Indicators Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12 pt-6 border-t border-white/20 w-full max-w-3xl flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-white/90 font-medium"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Private Tours</span>
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Verified Chauffeurs</span>
            </span>
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Tailored Sightseeing</span>
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#D4AF37]" />
              <span>24/7 Dispatch Desk</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. TOUR PACKAGE CATEGORIES & CARDS
      ========================================================================= */}
      <section id="tour-categories" className="py-20 lg:py-28 bg-[#FFF9F0] border-t border-[#0F2D5B]/10 relative overflow-hidden">
        {/* Prominent Background Line Artwork */}
        {/* Layer 1 — Udaipur Palace Line Art */}
        <div className="absolute top-0 right-0 lg:right-0 z-0 pointer-events-none opacity-85">
          <UdaipurPalaceLineArt opacity={0.9} className="w-[500px] sm:w-[700px] md:w-[950px] lg:w-[1150px] h-auto object-contain" />
        </div>

        {/* Layer 2 — Aravalli Mountain Line Art */}
        <div className="absolute top-0 -left-6 md:left-0 z-0 pointer-events-none hidden sm:block opacity-75">
          <AravalliMountainLineArt opacity={0.75} color="#D4AF37" className="w-[420px] md:w-[620px] lg:w-[780px] h-auto" />
        </div>

        {/* Layer 3 — Subtle Gold Micro Details */}
        <GoldDetailsOverlay />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <span className="w-5 h-[2px] bg-[#D4AF37]" />
              <span>CURATED TRAVEL PACKAGES</span>
              <span className="w-5 h-[2px] bg-[#D4AF37]" />
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
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${selectedCategory === cat.id
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
              className="px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37]/15 to-[#007FF0]/15 text-[#002247] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#102A43] transition-all cursor-pointer shadow-xs"
            >
              Customized Tour Packages ✨
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

