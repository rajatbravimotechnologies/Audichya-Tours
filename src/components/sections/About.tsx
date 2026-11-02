import React from "react";
import { Compass, Car, MessageCircle, HeartHandshake, ShieldCheck } from "lucide-react";

export const About: React.FC = () => {
  const supportingPoints = [
    {
      title: "Local Knowledge",
      description: "Our chauffeurs know Udaipur's historic lanes, ghats, traffic rhythms, and hidden panoramic lake spots.",
      icon: Compass,
    },
    {
      title: "Comfortable Rides",
      description: "Modern, spotless, air-conditioned vehicles inspected regularly for safety, hygiene, and climate control.",
      icon: Car,
    },
    {
      title: "Easy Booking",
      description: "No complicated apps or rigid subscriptions—confirm your ride in seconds via WhatsApp or direct phone call.",
      icon: MessageCircle,
    },
    {
      title: "Customer Focus",
      description: "Courteous Rajasthani hospitality, punctual pickups, transparent quotes, and tailored travel flexibility.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFF9F0] border-t border-[#0F2D5B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <span className="w-5 h-[2px] bg-[#D4AF37]" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight mb-6 [text-wrap:balance]">
              About Audichya Tours
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#64748B] font-normal leading-relaxed">
              <p>
                Audichya Tours helps travellers discover the beauty, culture and heritage of Udaipur and Rajasthan with convenient taxi services and personalized travel experiences. From local sightseeing and airport transfers to outstation journeys and holiday packages, we aim to make every journey comfortable, convenient and memorable.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0F2D5B]/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0F2D5B] flex items-center justify-center shrink-0 border border-[#0F2D5B]/10 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <p className="text-xs text-[#102A43] font-medium">
                Rooted in Udaipur, Rajasthan · Dedicated to authentic Rajasthani hospitality, verified drivers, and reliable journeys.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Supporting Points Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {supportingPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="p-6 rounded-2xl bg-white border border-[#0F2D5B]/10 shadow-sm hover:shadow-md transition-shadow text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFF9F0] text-[#0F2D5B] flex items-center justify-center mb-4 border border-[#0F2D5B]/10">
                      <Icon className="w-6 h-6 text-[#0F2D5B]" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F2D5B] mb-2 uppercase tracking-wide">
                      {point.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
