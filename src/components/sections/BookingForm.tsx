import React, { useState } from "react";
import { siteConfig, buildWhatsAppBookingUrl, sendLeadToWebhook } from "../../config/site";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Car,
  MessageCircle,
  Calculator,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface BookingFormProps {
  id?: string;
  defaultVehicle?: string;
  defaultDestination?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  id = "booking-section",
  defaultVehicle = "Toyota Etios",
  defaultDestination = "",
}) => {
  const defaultVehicleName = siteConfig.bookingOptions.vehicleTypes.find(
    (v) => v.name.toLowerCase() === defaultVehicle.toLowerCase() || v.id === defaultVehicle.toLowerCase()
  )?.name || siteConfig.bookingOptions.vehicleTypes[0]?.name || "Toyota Etios";

  const [pickup, setPickup] = useState("Maharana Pratap Airport (UDR)");
  const [drop, setDrop] = useState(defaultDestination || "City Palace / Old City Area");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("10:00");
  const [passengers, setPassengers] = useState("2 Passengers");
  const [vehicleType, setVehicleType] = useState(defaultVehicleName);
  const [quoteRequested, setQuoteRequested] = useState(false);
  const [formError, setFormError] = useState("");

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim()) {
      setFormError("Please enter both pickup and drop destinations.");
      return;
    }
    setFormError("");

    sendLeadToWebhook({
      serviceType: "Cab Booking",
      pickup,
      drop,
      date,
      time,
      passengers,
      vehicleType,
    });

    const url = buildWhatsAppBookingUrl({
      pickup,
      drop,
      date,
      time,
      passengers,
      vehicleType,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim()) {
      setFormError("Please enter both pickup and drop destinations.");
      return;
    }
    setFormError("");
    setQuoteRequested(true);
  };

  return (
    <section id={id} className="relative py-16 lg:py-24 bg-[#FFF9F0] border-y border-[#0F2D5B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
            <span>DIRECT TAXI & TOUR BOOKING</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
            Plan Your Journey with Audichya Tours
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] font-normal [text-wrap:balance]">
            Comfortable Taxi Services, Memorable Sightseeing and Personalized Rajasthan Tour Packages.
          </p>
        </div>

        {/* Premium Booking Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#0F2D5B]/10 shadow-xl relative overflow-hidden">
          {/* Subtle Top Brand Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0F2D5B] via-[#D4AF37] to-[#0F2D5B]" />

          {formError && (
            <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleWhatsAppBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Pickup Location */}
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Pickup Location</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    list="pickup-options"
                    placeholder="e.g. Maharana Pratap Airport (UDR)"
                    required
                    className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
                  />
                  <datalist id="pickup-options">
                    {siteConfig.bookingOptions.popularPickups.map((loc) => (
                      <option key={loc} value={loc} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Drop Location */}
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Drop Location</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    list="drop-options"
                    placeholder="e.g. City Palace / Lake Pichola"
                    required
                    className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
                  />
                  <datalist id="drop-options">
                    {siteConfig.bookingOptions.popularDrops.map((loc) => (
                      <option key={loc} value={loc} />
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Travel Date */}
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Travel Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
                />
              </div>

              {/* Travel Time */}
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Travel Time</span>
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
                />
              </div>

              {/* Passengers */}
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Passengers</span>
                </label>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
                >
                  <option value="1 Passenger">1 Passenger</option>
                  <option value="2 Passengers">2 Passengers</option>
                  <option value="3-4 Passengers">3 - 4 Passengers</option>
                  <option value="5-7 Passengers">5 - 7 Passengers (SUV)</option>
                  <option value="8+ Group">8+ Wedding / Group</option>
                </select>
              </div>

              {/* Vehicle Type */}
              <div className="flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Vehicle Type</span>
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
                >
                  {siteConfig.bookingOptions.vehicleTypes.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} ({v.capacity})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quote Drawer / Feedback Modal */}
            {quoteRequested && (
              <div className="p-6 rounded-2xl bg-[#E6F0FF] border border-[#0F2D5B]/10 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0F2D5B]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <span>Route Verified · Instant Dispatch Available</span>
                    </div>
                    <p className="text-sm text-[#102A43]">
                      Journey: <span className="font-semibold">{pickup}</span> ⟶ <span className="font-semibold">{drop}</span>
                    </p>
                    <p className="text-xs text-[#64748B]">
                      Vehicle: <span className="font-semibold text-[#102A43]">{vehicleType}</span> ({passengers}) on{" "}
                      <span className="font-semibold text-[#102A43]">{date}</span> at{" "}
                      <span className="font-semibold text-[#102A43]">{time}</span>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuoteRequested(false)}
                    className="text-xs font-semibold text-[#64748B] hover:text-[#0F2D5B]"
                  >
                    Dismiss
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-[#0F2D5B]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#64748B]">
                    Click below to transmit this itinerary directly to our 24/7 WhatsApp dispatch desk for the exact fixed fare.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4">
              <button
                type="button"
                onClick={handleGetQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F2D5B] bg-[#E6F0FF] hover:bg-[#D4AF37] hover:text-[#102A43] border border-[#0F2D5B]/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <Calculator className="w-4 h-4 text-[#D4AF37]" />
                <span>GET A QUOTE</span>
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] active:scale-[0.98] transition-all duration-150 shadow-md shadow-[#0F2D5B]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>BOOK ON WHATSAPP</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
