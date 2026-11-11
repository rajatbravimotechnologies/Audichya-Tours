import React, { useState, useEffect } from "react";
import { siteConfig, buildWhatsAppBookingUrl, sendLeadToWebhook } from "../../config/site";
import {
  X,
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
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedVehicle = "Toyota Etios",
  preselectedDestination = "",
}) => {
  const defaultVehicleName =
    siteConfig.bookingOptions.vehicleTypes.find(
      (v) => v.name.toLowerCase() === preselectedVehicle.toLowerCase() || v.id === preselectedVehicle.toLowerCase()
    )?.name || siteConfig.bookingOptions.vehicleTypes[0]?.name || "Toyota Etios";

  // Form Fields
  const [pickup, setPickup] = useState("Maharana Pratap Airport (UDR)");
  const [drop, setDrop] = useState(preselectedDestination || "City Palace / Lake Pichola");

  const getInitialDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}T10:00`;
  };

  const [dateTime, setDateTime] = useState(getInitialDateTime);
  const [passengers, setPassengers] = useState("2 Passengers");
  const [vehicleType, setVehicleType] = useState(defaultVehicleName);
  const [error, setError] = useState("");

  // Update fields when modal opens
  useEffect(() => {
    if (isOpen) {
      setPickup("Maharana Pratap Airport (UDR)");
      setDrop(preselectedDestination || "City Palace / Lake Pichola");

      if (preselectedVehicle) {
        const matched = siteConfig.bookingOptions.vehicleTypes.find(
          (v) =>
            v.name.toLowerCase() === preselectedVehicle.toLowerCase() ||
            v.id.toLowerCase() === preselectedVehicle.toLowerCase()
        )?.name || preselectedVehicle;
        setVehicleType(matched);
      }
    }
  }, [isOpen, preselectedVehicle, preselectedDestination]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

    const serviceName = "General Cab Booking";

    sendLeadToWebhook({
      serviceType: serviceName,
      pickup,
      drop,
      date: dateStr,
      time: timeStr,
      passengers,
      vehicleType,
    });

    const url = buildWhatsAppBookingUrl({
      serviceType: serviceName,
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
                list="modal-pickups"
                required
                placeholder="e.g. Airport, Railway Station, Hotel"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              />
              <datalist id="modal-pickups">
                {siteConfig.bookingOptions.popularPickups.map((p) => (
                  <option key={p} value={p} />
                ))}
              </datalist>
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
                list="modal-drops"
                required
                placeholder="e.g. Lake Pichola, Fatehsagar, Kumbhalgarh"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              />
              <datalist id="modal-drops">
                {siteConfig.bookingOptions.popularDrops.map((d) => (
                  <option key={d} value={d} />
                ))}
              </datalist>
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

          {/* Passengers & Vehicle */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#007FF0]" /> Passengers
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              >
                <option value="1 Passenger">1 Passenger</option>
                <option value="2 Passengers">2 Passengers</option>
                <option value="3-4 Passengers">3 - 4 Passengers</option>
                <option value="5-7 Passengers">5 - 7 Passengers</option>
                <option value="8-17 Group">8 - 17 Passengers</option>
                <option value="18-32 Urbania">18 - 32 Passengers</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#007FF0]" /> Vehicle
              </label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              >
                {siteConfig.bookingOptions.vehicleTypes.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name}
                  </option>
                ))}
              </select>
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
