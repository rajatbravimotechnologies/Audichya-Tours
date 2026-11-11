import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Car,
  Plane,
  Train,
  Compass,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  Briefcase,
  Wind,
  PhoneCall,
  MessageCircle,
  CheckCircle2,
  CalendarCheck,
  UserCheck,
  Headphones,
  MapPin,
} from "lucide-react";
import { fleetData } from "../data/fleet";
import { siteConfig } from "../config/site";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";

interface TaxiServicesPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const TaxiServicesPage: React.FC<TaxiServicesPageProps> = ({ onOpenBooking }) => {
  // 7 Core Transportation Services
  const taxiServices = [
    {
      id: "local-sightseeing",
      title: "Udaipur Local Sightseeing",
      description:
        "Explore City Palace, Lake Pichola, Saheliyon Ki Bari, Fateh Sagar and other attractions with flexible local taxi bookings.",
      image: "/images/City Palace.webp",
      icon: MapPin,
      badge: "Full & Half Day",
      defaultDestination: "Udaipur Local Sightseeing",
      defaultVehicle: "Sedan",
    },
    {
      id: "airport-transfers",
      title: "Airport Pickup & Drop",
      description:
        "Convenient airport transportation with pickup and drop services.",
      image: "/images/dzire.webp",
      icon: Plane,
      badge: "24/7 Available",
      defaultDestination: "Maharana Pratap Airport (UDR)",
      defaultVehicle: "Toyota Etios",
    },
    {
      id: "railway-transfers",
      title: "Railway Station Transfers",
      description:
        "Comfortable pickup and drop from Udaipur railway stations.",
      image: "/images/etios.webp",
      icon: Train,
      badge: "Punctual Meet & Greet",
      defaultDestination: "Udaipur City Railway Station (UDZ)",
      defaultVehicle: "Maruti Suzuki Swift Dzire",
    },
    {
      id: "outstation-taxi",
      title: "Outstation Taxi",
      description:
        "Comfortable intercity taxi services to destinations across Rajasthan and nearby states.",
      image: "/images/Kumbhalgarh Fort.webp",
      icon: Compass,
      badge: "Intercity Highway",
      defaultDestination: "Kumbhalgarh / Ranakpur / Mount Abu",
      defaultVehicle: "Toyota Innova Crysta",
    },
    {
      id: "one-way-taxi",
      title: "One-Way Taxi",
      description:
        "Convenient single-direction travel without requiring a return booking.",
      image: "/images/innova-crysta_1.webp",
      icon: ArrowRight,
      badge: "Single-Direction Drop",
      defaultDestination: "One-Way Outstation Drop",
      defaultVehicle: "Sedan",
    },
    {
      id: "round-trip-taxi",
      title: "Round-Trip Taxi",
      description:
        "Plan your return journey with a dedicated vehicle and driver.",
      image: "/images/innova-crysta_2.webp",
      icon: RotateCcw,
      badge: "Return Excursion",
      defaultDestination: "Round-Trip Outstation Tour",
      defaultVehicle: "Toyota Innova Crysta",
    },
    {
      id: "wedding-event-transport",
      title: "Wedding & Event Transportation",
      description:
        "Reliable transportation for wedding guests, family functions and special events.",
      image: "/images/Urbania-1.webp",
      icon: Sparkles,
      badge: "Luxury Group Fleet",
      defaultDestination: "Wedding Palace Venue / Resort",
      defaultVehicle: "The Force Urbania Luxury",
    },
  ];

  // 4-Step Booking Process
  const bookingSteps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Select from local sightseeing, airport transfers, one-way drops, or multi-day tours.",
      icon: Car,
    },
    {
      number: "02",
      title: "Share Pickup & Destination",
      description:
        "Provide your pickup location, desired drop point, travel date, and scheduled time.",
      icon: MapPin,
    },
    {
      number: "03",
      title: "Select Your Vehicle",
      description:
        "Pick from economical sedans, family MPVs, premium Innova Crystas, or luxury Urbanias.",
      icon: Users,
    },
    {
      number: "04",
      title: "Confirm Your Booking",
      description:
        "Receive instant WhatsApp confirmation with transparent quote and chauffeur details.",
      icon: CheckCircle2,
    },
  ];

  // 6 Why Choose Us Features
  const whyChooseFeatures = [
    {
      title: "Comfortable Vehicles",
      description:
        "Immaculately maintained, sanitized cars with high-performance air-conditioning and spacious luggage room.",
      icon: Car,
    },
    {
      title: "Experienced Drivers",
      description:
        "Polite, background-verified chauffeurs with deep knowledge of local routes, forts, and hill highways.",
      icon: UserCheck,
    },
    {
      title: "Flexible Travel Options",
      description:
        "Tailor your stops, departure times, and routes with flexible one-way, round-trip, and hourly rentals.",
      icon: Compass,
    },
    {
      title: "Reliable Pickup & Drop",
      description:
        "Zero cancellations and guaranteed on-time arrivals with live flight and train schedule tracking.",
      icon: Clock,
    },
    {
      title: "Personalized Assistance",
      description:
        "Direct local support via WhatsApp and phone to adjust itineraries and accommodate special travel needs.",
      icon: Headphones,
    },
    {
      title: "Easy Booking",
      description:
        "Hassle-free direct booking with transparent pricing, zero hidden charges, and immediate response.",
      icon: CalendarCheck,
    },
  ];

  const handleScrollToServices = () => {
    const el = document.getElementById("services-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FFF9F0] min-h-screen text-[#002247] selection:bg-[#007FF0] selection:text-white">
      {/* =========================================================================
          1. HERO SECTION: Full-Width Cinematic Hero
      ========================================================================= */}
      <section className="relative text-white pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-[#002247]">
        {/* Cinematic White Taxi Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/Udaipur Sunset by the Lake.png')`,
          }}
        />

        {/* Elegant Dark Vignette Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002247]/90 via-[#002247]/75 to-[#002247]/95" />

        {/* Ambient Gold Halo */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#C2A03E]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C2A03E]/40 mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C2A03E]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFF9F0]">
              AUDICHYA TOURS · 24/7 TAXI SERVICE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A03E]" />
            <span className="text-[11px] font-medium text-white/80">Udaipur & Rajasthan</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md font-serif max-w-4xl mx-auto"
          >
            Reliable Taxi Services Across Rajasthan
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg lg:text-xl text-[#F7F4ED]/90 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm"
          >
            Comfortable rides, professional drivers and hassle-free travel for every journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] active:scale-[0.98] transition-all shadow-xl shadow-[#007FF0]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Car className="w-4 h-4" />
              <span>BOOK YOUR TAXI</span>
            </button>

            <button
              onClick={handleScrollToServices}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#002247] bg-white hover:bg-[#C2A03E] hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#C2A03E] transition-transform group-hover:rotate-45" />
              <span>EXPLORE OUR SERVICES</span>
            </button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-6 border-t border-white/15 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-white/85"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C2A03E]" />
              <span>Verified Local Chauffeurs</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-[#007FF0]" />
              <span>Chilled Air-Conditioned Fleet</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C2A03E]" />
              <span>Guaranteed Punctual Pickups</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICES SECTION: 7 Premium Service Cards
      ========================================================================= */}
      <section id="services-section" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
            <span className="w-5 h-[2px] bg-[#C2A03E]" />
            <span>COMPREHENSIVE FLEET & ROUTE SERVICES</span>
            <span className="w-5 h-[2px] bg-[#C2A03E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight leading-tight font-serif">
            Transportation for Every Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            From city sightseeing and 24/7 airport transfers to intercity one-way drops and royal wedding convoys, enjoy transparent and comfortable travel.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taxiServices.map((service, idx) => {
            const Icon = service.icon;
            const isFeatured = idx === 0 || idx === 6;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group bg-white rounded-3xl overflow-hidden border border-[#002247]/10 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002247]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-[#C2A03E]/40 flex items-center gap-1.5">
                    <Icon className="w-3 h-3 text-[#C2A03E]" />
                    <span>{service.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFF9F0] text-[#002247] border border-[#C2A03E]/20 flex items-center justify-center mb-4 group-hover:bg-[#C2A03E] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#C2A03E] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-[#002247] group-hover:text-[#007FF0] transition-colors font-serif leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Action CTA Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenBooking(service.defaultVehicle, service.defaultDestination)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007FF0] hover:text-[#002247] group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      Instant Quote
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. HOW IT WORKS: 4-Step Booking Process
      ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#002247]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
              <span className="w-5 h-[2px] bg-[#C2A03E]" />
              <span>SEAMLESS 4-STEP RESERVATION</span>
              <span className="w-5 h-[2px] bg-[#C2A03E]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
              How It Works
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Booking your private taxi in Udaipur takes less than two minutes with our transparent system.
            </p>
          </div>

          {/* 4 Steps Horizontal (Desktop) / Vertical (Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {bookingSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative bg-[#FFF9F0] rounded-3xl p-6 sm:p-7 border border-[#002247]/10 flex flex-col justify-between text-left group hover:shadow-lg transition-all"
                >
                  {/* Step Number Top */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-[#C2A03E] font-serif opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white text-[#002247] flex items-center justify-center shadow-xs border border-[#002247]/10">
                      <Icon className="w-5 h-5 text-[#007FF0]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#002247] font-serif leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#002247] hover:bg-[#C2A03E] transition-all shadow-md cursor-pointer"
            >
              <Car className="w-4 h-4 text-[#C2A03E]" />
              <span>Book Your Cab Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE US: Trust-Building Features
      ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
            <span className="w-5 h-[2px] bg-[#C2A03E]" />
            <span>THE AUDICHYA ADVANTAGE</span>
            <span className="w-5 h-[2px] bg-[#C2A03E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight font-serif">
            Why Choose Audichya Tours
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            We are dedicated to delivering five-star reliability, transparent quotes, and unmatched hospitality on every Rajasthan route.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#002247]/10 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] text-[#002247] border border-[#C2A03E]/30 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#C2A03E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#002247] font-serif">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[#007FF0] text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Service Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          5. FLEET PREVIEW: Choose Your Perfect Ride
      ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#002247]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 text-left">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                <Car className="w-4 h-4" />
                <span>CHAUFFEUR-DRIVEN FLEET</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight font-serif">
                Choose Your Perfect Ride
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
                From economical executive sedans to spacious Innova Crystas and luxury Force Urbania coaches.
              </p>
            </div>

            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#002247] hover:bg-[#C2A03E] transition-all shadow-md cursor-pointer shrink-0"
            >
              <span>EXPLORE OUR FLEET</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.slice(0, 6).map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-[#FFF9F0] rounded-3xl overflow-hidden border border-[#002247]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Vehicle Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#002247]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-[#C2A03E]/30">
                    {vehicle.category}
                  </div>
                </div>

                {/* Specs */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#002247] font-serif leading-snug">
                      {vehicle.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 font-medium">
                      {vehicle.subtitle}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#002247]/10 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-white p-2 rounded-xl border border-slate-200/60">
                        <Users className="w-3.5 h-3.5 text-[#007FF0] mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-[#002247] block line-clamp-1">
                          {vehicle.passengers.split(" ")[0]} Seats
                        </span>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-slate-200/60">
                        <Briefcase className="w-3.5 h-3.5 text-[#C2A03E] mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-[#002247] block line-clamp-1">
                          Luggage
                        </span>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-slate-200/60">
                        <Wind className="w-3.5 h-3.5 text-[#007FF0] mx-auto mb-1" />
                        <span className="text-[10px] font-bold text-[#002247] block line-clamp-1">
                          Dual AC
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Vehicle Button */}
                  <button
                    onClick={() => onOpenBooking(vehicle.title)}
                    className="mt-6 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Book {vehicle.title.split(" ")[0]}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BOOKING BANNER CTA: Your Journey Starts Here
      ========================================================================= */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#002247] text-white p-8 sm:p-12 lg:p-16 text-center border border-[#C2A03E]/40 shadow-2xl">
          {/* Subtle Ambient Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
            style={{
              backgroundImage: `url('/images/Udaipur Sunset by the Lake.png')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002247] via-[#002247]/90 to-[#002247]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
              <Sparkles className="w-4 h-4" />
              <span>DIRECT CAB DISPATCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white">
              Your Journey Starts Here
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-200">
              Book a comfortable ride with Audichya Tours and explore Rajasthan with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] active:scale-[0.98] transition-all shadow-xl shadow-[#007FF0]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Car className="w-4 h-4" />
                <span>BOOK YOUR TAXI</span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Audichya%20Tours,%20I%20want%20to%20book%20a%20taxi%20service.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-slate-300">
              <span>📞 {siteConfig.contact.phone1}</span>
              <span>•</span>
              <span>📍 Udaipur, Rajasthan</span>
              <span>•</span>
              <span>⚡ Immediate Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Final CTA */}
      <CinematicFinalCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};

