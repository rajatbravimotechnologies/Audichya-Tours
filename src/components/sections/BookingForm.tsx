import React, { useState } from "react";
import { siteConfig, buildWhatsAppBookingUrl, sendLeadToWebhook } from "../../config/site";
import { findFleetVehicleTitle, mapPassengersToVehicle } from "../ui/BookingModal";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Car,
  User,
  Phone,
  MessageCircle,
  Calculator,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface BookingFormProps {
  id?: string;
  defaultVehicle?: string;
  defaultDestination?: string;
  isCardOnly?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  id = "booking-section",
  defaultVehicle = "",
  defaultDestination = "",
  isCardOnly = false,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState(defaultDestination || "");

  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("10:00");
  const [passengers, setPassengers] = useState("2 Passengers");
  const [vehicleType, setVehicleType] = useState(() => {
    if (defaultVehicle) return findFleetVehicleTitle(defaultVehicle);
    return mapPassengersToVehicle("2 Passengers");
  });
  const [quoteRequested, setQuoteRequested] = useState(false);
  const [formError, setFormError] = useState("");

  const handlePassengerChange = (newPassengers: string) => {
    setPassengers(newPassengers);
    if (!defaultVehicle) {
      setVehicleType(mapPassengersToVehicle(newPassengers));
    }
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setFormError("Please enter your name and contact phone number so our team can connect with you.");
      return;
    }
    if (!pickup.trim() || !drop.trim()) {
      setFormError("Please enter both pickup and drop destinations.");
      return;
    }
    setFormError("");

    sendLeadToWebhook({
      serviceType: defaultVehicle ? `Fleet Booking (${vehicleType})` : "Cab Booking",
      name: customerName,
      phone: customerPhone,
      pickup,
      drop,
      date,
      time,
      passengers,
      vehicleType,
    });

    const url = buildWhatsAppBookingUrl({
      name: customerName,
      phone: customerPhone,
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
    if (!customerName.trim() || !customerPhone.trim()) {
      setFormError("Please enter your name and contact phone number to get a personalized quote.");
      return;
    }
    if (!pickup.trim() || !drop.trim()) {
      setFormError("Please enter both pickup and drop destinations.");
      return;
    }
    setFormError("");
    setQuoteRequested(true);
  };

  const renderCardContent = () => (
    <div className="w-full h-full bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#002247]/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
      {/* Subtle Top Brand Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#002247] via-[#D4AF37] to-[#002247]" />

      {/* Card Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#002247]/10 mb-6">
        <div>
          <h3 className="text-xl font-bold text-[#002247] font-serif">
            Instant Reservation Form
          </h3>
          <p className="text-xs text-[#64748B] mt-0.5">
            Select your itinerary & receive instant WhatsApp confirmation
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-[#002247] bg-[#FFF9F0] border border-[#D4AF37]/40 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>Live Dispatch</span>
        </span>
      </div>

      {formError && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      <form onSubmit={handleWhatsAppBooking} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Customer Name */}
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Your Name</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                required
                className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Customer Phone / WhatsApp */}
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Mobile / WhatsApp No.</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. +91 98765 43210"
                required
                className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
              />
            </div>
          </div>

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
                placeholder="e.g. Maharana Pratap Airport (UDR)"
                required
                className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
              />
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
                placeholder="e.g. City Palace / Lake Pichola"
                required
                className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs"
              />
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
              onChange={(e) => handlePassengerChange(e.target.value)}
              className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-medium text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs cursor-pointer"
            >
              <option value="1 Passenger">1 Passenger</option>
              <option value="2 Passengers">2 Passengers</option>
              <option value="3 - 4 Passengers">3 - 4 Passengers</option>
              <option value="5 - 8 Passengers">5 - 8 Passengers</option>
              <option value="More than 8">More than 8 Passengers</option>
            </select>
          </div>

          {/* Vehicle Type */}
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Vehicle / Fleet</span>
              </span>
              {defaultVehicle ? (
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Fleet Selected
                </span>
              ) : (
                <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Auto-Selected
                </span>
              )}
            </label>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full px-4 py-3 bg-[#FFF9F0]/60 rounded-xl border border-[#0F2D5B]/10 text-sm font-bold text-[#102A43] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all shadow-xs cursor-pointer"
            >
              <option value="Sedan">Sedan</option>
              <option value="MPV">MPV</option>
              <option value="Mini Van">Mini Van</option>
            </select>
          </div>
        </div>

        {/* Quote Drawer / Feedback Modal */}
        {quoteRequested && (
          <div className="p-5 rounded-2xl bg-[#E6F0FF] border border-[#0F2D5B]/10 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0F2D5B]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Route Verified · Instant Dispatch Available</span>
                </div>
                <p className="text-sm text-[#102A43]">
                  Guest: <span className="font-semibold">{customerName}</span> ({customerPhone})
                </p>
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
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3.5">
          <button
            type="button"
            onClick={handleGetQuote}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F2D5B] bg-[#E6F0FF] hover:bg-[#D4AF37] hover:text-[#102A43] border border-[#0F2D5B]/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span>GET A QUOTE</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] active:scale-[0.98] transition-all duration-150 shadow-md shadow-[#0F2D5B]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>BOOK ON WHATSAPP</span>
          </button>
        </div>
      </form>
    </div>
  );

  if (isCardOnly) {
    return renderCardContent();
  }

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
        <div className="max-w-5xl mx-auto">
          {renderCardContent()}
        </div>
      </div>
    </section>
  );
};
