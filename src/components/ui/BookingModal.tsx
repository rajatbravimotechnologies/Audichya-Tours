import React, { useState, useEffect } from "react";
import { siteConfig, buildWhatsAppBookingUrl, sendLeadToWebhook } from "../../config/site";
import { fleetData } from "../../data/fleet";
import {
  X,
  User,
  Phone,
  MapPin,
  Calendar,
  Users,
  Car,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVehicle?: string;
  preselectedDestination?: string;
  isSpecificFleetSelection?: boolean;
}

// Auto-mapping rule as requested:
// 1 Passenger -> Sedan
// 2 Passengers -> Sedan
// 3 - 4 Passengers -> Sedan
// 5 - 8 Passengers -> MPV
// More than 8 -> Mini Van
export const mapPassengersToVehicle = (pCount: string): string => {
  if (pCount.includes("5 - 8")) return "MPV";
  if (pCount.includes("More than 8")) return "Mini Van";
  return "Sedan";
};

// Helper to reliably find matching fleet vehicle title from fleetData
export const findFleetVehicleTitle = (inputName?: string): string => {
  if (!inputName) return fleetData[0]?.title || "Toyota Etios";
  const clean = inputName.trim().toLowerCase();

  // 1. Exact match on title or id
  const exact = fleetData.find(
    (item) =>
      item.title.toLowerCase() === clean ||
      item.id.toLowerCase() === clean
  );
  if (exact) return exact.title;

  // 2. High-priority keyword matches
  if (clean.includes("urbania")) return "The Force Urbania Luxury";
  if (clean.includes("tempo") || clean.includes("traveller")) return "Force Tempo Traveller";
  if (clean.includes("hycross")) return "Toyota Innova Hycross";
  if (clean.includes("crysta") || clean.includes("innova")) return "Toyota Innova Crysta";
  if (clean.includes("carens") || clean.includes("kia")) return "Kia Carens";
  if (clean.includes("ertiga")) return "Maruti Suzuki Ertiga";
  if (clean.includes("aura")) return "Hyundai Aura";
  if (clean.includes("etios")) return "Toyota Etios";
  if (clean.includes("dzire") || clean.includes("swift")) return "Maruti Suzuki Swift Dzire";

  // 3. Category match fallbacks
  if (clean.includes("sedan")) return "Maruti Suzuki Swift Dzire";
  if (clean.includes("mpv")) return "Maruti Suzuki Ertiga";
  if (clean.includes("suv") || clean.includes("premium")) return "Toyota Innova Crysta";
  if (clean.includes("luxury") || clean.includes("van") || clean.includes("bus")) return "The Force Urbania Luxury";

  // 4. Loose substring match
  const loose = fleetData.find(
    (item) => item.title.toLowerCase().includes(clean) || clean.includes(item.title.toLowerCase())
  );
  if (loose) return loose.title;

  return fleetData[0]?.title || "Toyota Etios";
};

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedVehicle = "",
  preselectedDestination = "",
  isSpecificFleetSelection = false,
}) => {
  // Contact details
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  // Journey details
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState(preselectedDestination || "");

  const getInitialDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}T10:00`;
  };

  const [dateTime, setDateTime] = useState(getInitialDateTime);
  const [passengers, setPassengers] = useState("2 Passengers");
  const [vehicleType, setVehicleType] = useState(() => {
    if (isSpecificFleetSelection && preselectedVehicle) {
      return findFleetVehicleTitle(preselectedVehicle);
    }
    return mapPassengersToVehicle("2 Passengers");
  });
  const [error, setError] = useState("");

  // Update fields when modal opens or preselected props change
  useEffect(() => {
    if (isOpen) {
      // Keep pickup empty by default so customer enters their location
      setPickup("");
      // Set drop destination if provided (e.g. tour packages or taxi service destinations) or keep blank
      setDrop(preselectedDestination || "");
      if (isSpecificFleetSelection && preselectedVehicle) {
        setVehicleType(findFleetVehicleTitle(preselectedVehicle));
      } else {
        setVehicleType(mapPassengersToVehicle(passengers));
      }
    }
  }, [isOpen, preselectedVehicle, preselectedDestination, isSpecificFleetSelection]);

  if (!isOpen) return null;

  // Handle passenger change with auto-selection of vehicle
  const handlePassengerChange = (newPassengers: string) => {
    setPassengers(newPassengers);
    // If not locked to a specific car from /fleet, automatically set the vehicle based on passenger count
    if (!isSpecificFleetSelection) {
      setVehicleType(mapPassengersToVehicle(newPassengers));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setError("Please provide your name and contact phone number so our team can reach you.");
      return;
    }
    if (!pickup.trim() || !drop.trim()) {
      setError("Please fill out both pickup and drop locations.");
      return;
    }
    setError("");

    let dateStr = "";
    let timeStr = "";
    if (dateTime) {
      const parts = dateTime.split("T");
      dateStr = parts[0] || "";
      timeStr = parts[1] || "";
    }

    const serviceName = isSpecificFleetSelection
      ? `Fleet Booking (${vehicleType})`
      : "General Cab Booking";

    // 1. Send lead asynchronously to Google Sheet + Email (audichyapiyush1401@gmail.com)
    sendLeadToWebhook({
      serviceType: serviceName,
      name: customerName,
      phone: customerPhone,
      pickup,
      drop,
      date: dateStr,
      time: timeStr,
      passengers,
      vehicleType,
    });

    // 2. Open WhatsApp with complete details including Name & Phone
    const url = buildWhatsAppBookingUrl({
      serviceType: serviceName,
      name: customerName,
      phone: customerPhone,
      pickup,
      drop,
      date: dateStr,
      time: timeStr,
      passengers,
      vehicleType,
    });

    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#007FF0] via-[#C2A03E] to-[#002247]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#002247]">
              Book Your Cab in Udaipur
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Instant custom WhatsApp quote with verified chauffeurs.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-left">
          {/* Customer Name & Mobile Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#007FF0]" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-white text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Mobile / WhatsApp No.</span>
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                required
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-white text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Pickup & Drop Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#007FF0]" />
                <span>Pickup Location</span>
              </label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
                placeholder="e.g. Maharana Pratap Airport (UDR)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C2A03E]" />
                <span>Drop Location / Tour</span>
              </label>
              <input
                type="text"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                required
                placeholder="e.g. City Palace / Lake Pichola"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              />
            </div>
          </div>

          {/* Date & Time combined in one field */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#007FF0]" />
              <span>Date & Time</span>
            </label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] text-slate-700 bg-white"
            />
          </div>

          {/* Passengers & Auto-Mapped Vehicle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#007FF0]" />
                <span>Passengers</span>
              </label>
              <select
                value={passengers}
                onChange={(e) => handlePassengerChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-white cursor-pointer font-medium text-slate-800"
              >
                <option value="1 Passenger">1 Passenger</option>
                <option value="2 Passengers">2 Passengers</option>
                <option value="3 - 4 Passengers">3 - 4 Passengers</option>
                <option value="5 - 8 Passengers">5 - 8 Passengers</option>
                <option value="More than 8">More than 8</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#007FF0]" />
                  <span>Vehicle / Fleet</span>
                </span>
                {isSpecificFleetSelection ? (
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Fleet Selection
                  </span>
                ) : (
                  <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Auto-Selected
                  </span>
                )}
              </label>
              <div className="relative">
                {isSpecificFleetSelection ? (
                  /* Specific Fleet Selection (Triggered from /fleet page) */
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-white cursor-pointer font-bold text-[#002247]"
                  >
                    <optgroup label="Sedan Fleet (Up to 4 Passengers)">
                      <option value="Maruti Suzuki Swift Dzire">Maruti Suzuki Swift Dzire</option>
                      <option value="Toyota Etios">Toyota Etios</option>
                      <option value="Hyundai Aura">Hyundai Aura</option>
                    </optgroup>
                    <optgroup label="MPV Fleet (6–7 Passengers)">
                      <option value="Maruti Suzuki Ertiga">Maruti Suzuki Ertiga</option>
                      <option value="Kia Carens">Kia Carens</option>
                    </optgroup>
                    <optgroup label="Premium SUV (6–7 Passengers)">
                      <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                      <option value="Toyota Innova Hycross">Toyota Innova Hycross</option>
                      <option value="Toyota Fortuner">Toyota Fortuner</option>
                    </optgroup>
                    <optgroup label="Luxury Group Vans & Coaches">
                      <option value="The Force Urbania Luxury">The Force Urbania Luxury (9–17 Seater)</option>
                      <option value="Force Tempo Traveller">Force Tempo Traveller (9–25 Seater)</option>
                    </optgroup>
                  </select>
                ) : (
                  /* General Form Auto-Mapped Vehicle Selection */
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-white cursor-pointer font-bold text-[#002247]"
                  >
                    <option value="Sedan">Sedan</option>
                    <option value="MPV">MPV</option>
                    <option value="Mini Van">Mini Van</option>
                  </select>
                )}
              </div>
            </div>
          </div>

          <div className="pt-3 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Itinerary via WhatsApp</span>
            </button>
            <p className="text-[11px] text-slate-500 text-center">
              Our 24/7 team will reply with immediate driver details & guaranteed transparent quote.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
