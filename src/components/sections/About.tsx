import React from "react";
import { Compass, Car, HeartHandshake, ShieldCheck, Award, Route } from "lucide-react";

export const About: React.FC = () => {
  const supportingPoints = [
    {
      title: "All-Route Drivers",
      description: "Our chauffeurs possess extensive driving experience across all Rajasthan highways, ghat roads, hill stations, and city routes.",
      icon: Route,
    },
    {
      title: "Trusted Since 2005",
      description: "Over 20 years of continuous service excellence, punctual dispatches, transparent pricing, and thousands of satisfied travelers.",
      icon: Award,
    },
    {
      title: "Comfortable Rides",
      description: "Modern, spotless, air-conditioned vehicles inspected regularly for safety, hygiene, and climate control.",
      icon: Car,
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
              <span>PROVIDING TAXI SERVICES SINCE 2005</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002247] tracking-tight leading-tight mb-6 font-serif [text-wrap:balance]">
              Born in Udaipur, Providing Trusted Taxi Services Since 2005
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#64748B] font-normal leading-relaxed">
              <p>
                Since <strong className="text-[#002247] font-semibold">2005</strong>, Audichya Tours has been a trusted provider of cab and taxi services in Udaipur and across Rajasthan. With over two decades of dedicated on-ground experience, we help travelers discover the beauty, culture, and royal heritage of Mewar with utmost comfort and reliability.
              </p>
              <p>
                From Udaipur local sightseeing and 24/7 airport transfers to outstation trips across Rajasthan and neighboring states, every journey is led by our <strong className="text-[#002247] font-semibold">all-route experienced drivers</strong> who ensure safe, smooth, and memorable travel experiences.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0F2D5B]/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0F2D5B] flex items-center justify-center shrink-0 border border-[#0F2D5B]/10 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <p className="text-xs text-[#102A43] font-medium">
                Rooted in Udaipur since 2005 · All-route experienced chauffeurs, verified commercial fleet, and authentic Rajasthani hospitality.
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
