import React from "react";
import { BookingForm } from "../components/sections/BookingForm";
import { siteConfig } from "../config/site";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FFF9F0]">
      {/* Header Banner */}
      <div className="bg-[#0F2D5B] text-white pt-28 lg:pt-36 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0F2D5B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-sm">
            <span>24/7 RESERVATIONS & CUSTOM TOURS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Plan Your Journey with Audichya Tours
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Reach out via phone, WhatsApp, or instant reservation form for immediate taxi dispatch, sightseeing packages, and customized Rajasthan tours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#0F2D5B]/10 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#0F2D5B] pb-4 border-b border-[#0F2D5B]/10">
                Plan Your Journey with Audichya Tours
              </h3>

              {/* Phone 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF9F0] text-[#0F2D5B] border border-[#0F2D5B]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0F2D5B]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] block">
                    Phone 1 (Direct Booking)
                  </span>
                  <a href={`tel:${siteConfig.contact.rawPhone1}`} className="text-base font-bold text-[#0F2D5B] hover:text-[#D4AF37]">
                    {siteConfig.contact.phone1}
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF9F0] text-[#0F2D5B] border border-[#0F2D5B]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0F2D5B]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] block">
                    Phone 2 (Support & Inquiries)
                  </span>
                  <a href={`tel:${siteConfig.contact.rawPhone2}`} className="text-base font-bold text-[#0F2D5B] hover:text-[#D4AF37]">
                    {siteConfig.contact.phone2}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#25D366]/15 text-[#128C7E] border border-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] block">
                    WhatsApp (Instant Chat)
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-bold text-[#0F2D5B] hover:text-[#25D366]"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF9F0] text-[#D4AF37] border border-[#0F2D5B]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] block">
                    Email Address
                  </span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-semibold text-[#0F2D5B] hover:text-[#D4AF37]">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF9F0] text-[#0F2D5B] border border-[#0F2D5B]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0F2D5B]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B] block">
                    Office Location
                  </span>
                  <span className="text-sm font-semibold text-[#0F2D5B]">
                    {siteConfig.contact.address}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F2D5B] text-white flex items-center gap-3 shadow-md border border-[#0F2D5B]/20">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
              <p className="text-xs text-slate-200 font-medium">
                Active 24 Hours a day, 7 days a week across Udaipur, Airport transfers, and all Rajasthan tour routes.
              </p>
            </div>
          </div>

          {/* Right: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm id="contact-form" />
          </div>
        </div>
      </div>
    </div>
  );
};
