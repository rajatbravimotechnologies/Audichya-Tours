import React from "react";
import { BookingForm } from "../components/sections/BookingForm";
import { siteConfig, buildWhatsAppBookingUrl } from "../config/site";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, ArrowDown, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "../components/ui/WhatsAppIcon";
import { UdaipurPalaceLineArt } from "../components/ui/UdaipurPalaceLineArt";
import { AravalliMountainLineArt } from "../components/ui/AravalliMountainLineArt";
import { GoldDetailsOverlay } from "../components/ui/GoldDetailsOverlay";

export const ContactPage: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FFF9F0]">
      {/* =========================================================================
          HERO BANNER: Luxury Cinematic Contact & Dispatch Showcase
      ========================================================================= */}
      <section className="relative text-white pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-32 overflow-hidden bg-[#001833]">
        {/* Cinematic Panoramic Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/images/Udaipur Sunset by the Lake.png')` }}
        />

        {/* Multi-Stop Royal Gradient Overlay for Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001833]/85 via-[#002247]/65 to-[#001833]/95" />

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
              AUDICHYA TOURS · 24/7 DISPATCH & BOOKING DESK
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[11px] font-medium text-white/80">Udaipur, Rajasthan</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-serif drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)] max-w-4xl mx-auto"
          >
            Get in Touch <span className="text-[#D4AF37]">& Plan Your Journey</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-[#FFF9F0]/90 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
          >
            Reach out via phone, WhatsApp, or instant reservation form for immediate taxi dispatch, sightseeing packages, and customized Rajasthan holiday tours.
          </motion.p>

          {/* Trust Highlights Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90"
          >
            <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Instant WhatsApp Quote in 10 Mins</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>24/7 Live Helpline & Dispatch</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Transparent Direct Operator Pricing</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`tel:${siteConfig.contact.rawPhone1}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#007FF0] hover:bg-[#006bd1] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#007FF0]/30 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>CALL: {siteConfig.contact.phone1}</span>
            </a>

            <a
              href={buildWhatsAppBookingUrl({
                customNotes: "Namaste Audichya Tours, I would like to inquire about taxi booking and tour availability.",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>FAST WHATSAPP CHAT</span>
            </a>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>ONLINE RESERVATION FORM</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Contact Information & Booking Form */}
      <section id="contact-form" className="py-16 lg:py-24 bg-[#FFF9F0] border-t border-[#0F2D5B]/10 relative overflow-hidden scroll-mt-20">
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
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <span className="w-6 h-[2px] bg-[#D4AF37]" />
              <span>DIRECT TAXI & TOUR BOOKING</span>
              <span className="w-6 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight leading-tight font-serif">
              Plan Your Journey with Audichya Tours
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#64748B] font-normal leading-relaxed">
              Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
            </p>
          </div>

          {/* 2-Column Balanced Grid: Perfectly Top-Aligned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Contact Info Card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#002247]/10 shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
                {/* Subtle Top Accent Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#002247] via-[#D4AF37] to-[#002247]" />

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#002247]/10 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#002247] font-serif">
                        Direct Contact Channels
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        Fast response from local Mewar travel desk
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>24/7 Active</span>
                    </span>
                  </div>

                  <div className="space-y-5 text-left">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF9F0] text-[#007FF0] border border-[#002247]/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#007FF0]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-0.5">
                          Primary Helpline & Booking Desk
                        </span>
                        <a href={`tel:${siteConfig.contact.rawPhone1}`} className="text-base font-bold text-[#002247] hover:text-[#007FF0] transition-colors">
                          {siteConfig.contact.phone1}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#25D366]/15 text-[#128C7E] border border-[#25D366]/20 flex items-center justify-center shrink-0">
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-0.5">
                          WhatsApp (Instant Chat & Itinerary)
                        </span>
                        <a
                          href={buildWhatsAppBookingUrl({
                            customNotes: "Namaste Audichya Tours, I would like to inquire about taxi booking and tour availability.",
                          })}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-bold text-[#002247] hover:text-[#25D366] transition-colors"
                        >
                          {siteConfig.contact.whatsappDisplay}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF9F0] text-[#D4AF37] border border-[#002247]/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-0.5">
                          Official Email Support
                        </span>
                        <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-[#002247] hover:text-[#D4AF37] transition-colors">
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF9F0] text-[#007FF0] border border-[#002247]/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#007FF0]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-0.5">
                          Head Office & Fleet Hub
                        </span>
                        <span className="text-sm font-medium text-[#002247] leading-relaxed block">
                          {siteConfig.contact.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Quick Action Buttons inside the card */}
                <div className="mt-7 pt-5 border-t border-[#002247]/10">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <a
                      href={`tel:${siteConfig.contact.rawPhone1}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#007FF0] hover:bg-[#006bd1] text-white text-xs font-bold tracking-wide transition-all shadow-sm active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Helpline</span>
                    </a>
                    <a
                      href={buildWhatsAppBookingUrl({
                        customNotes: "Namaste Audichya Tours, I would like to inquire about taxi booking and tour availability.",
                      })}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide transition-all shadow-sm active:scale-95"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFF9F0] border border-[#D4AF37]/30 text-left">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <p className="text-[11px] text-[#002247] font-medium leading-relaxed">
                      Available 24/7 across Udaipur, Airport transfers & all Rajasthan routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Booking Form */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <BookingForm isCardOnly={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
