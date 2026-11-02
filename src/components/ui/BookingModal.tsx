import React, { useState, useEffect } from "react";
import { siteConfig, buildWhatsAppBookingUrl, sendLeadToWebhook } from "../../config/site";
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Users,
  Car,
  MessageCircle,
  AlertCircle,
  Plane,
  Train,
  Camera,
  Compass,
  Sparkles,
  Building2,
  Tag,
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
  const [activeTab, setActiveTab] = useState<
    "general" | "airport" | "railway" | "sightseeing" | "outstation" | "wedding" | "hotel" | "jawai"
  >("general");

  const defaultVehicleName =
    siteConfig.bookingOptions.vehicleTypes.find(
      (v) => v.name.toLowerCase() === preselectedVehicle.toLowerCase() || v.id === preselectedVehicle.toLowerCase()
    )?.name || siteConfig.bookingOptions.vehicleTypes[0]?.name || "Toyota Etios";

  // Form Fields
  const [pickup, setPickup] = useState("Maharana Pratap Airport (UDR)");
  const [drop, setDrop] = useState(preselectedDestination || "City Palace / Lake Pichola");
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("10:00");
  const [passengers, setPassengers] = useState("2 Passengers");
  const [vehicleType, setVehicleType] = useState(defaultVehicleName);
  
  // Service-Specific Specialized Fields
  const [flightOrTrainNo, setFlightOrTrainNo] = useState("");
  const [packageDuration, setPackageDuration] = useState("8 Hours / 80 KM Full Day");
  const [outstationTripType, setOutstationTripType] = useState("Round Trip");
  const [weddingRequirement, setWeddingRequirement] = useState("Guest Convoy & Airport Shuttles");
  const [error, setError] = useState("");

  // Detect and set active tab / form fields based on preselectedDestination/Title
  useEffect(() => {
    if (isOpen) {
      const dest = preselectedDestination.toLowerCase();
      
      if (dest.includes("jawai") || dest.includes("safari") || dest.includes("leopard")) {
        setActiveTab("jawai");
        setPickup("Udaipur City / Hotel");
        setDrop("JAWAI LEOPARD SAFARI (150 KM)");
      } else if (dest.includes("airport") || dest.includes("udr")) {
        setActiveTab("airport");
        setPickup("Maharana Pratap Airport (UDR)");
        setDrop("Hotel / Destination in Udaipur");
      } else if (dest.includes("railway") || dest.includes("udz") || dest.includes("train")) {
        setActiveTab("railway");
        setPickup("Udaipur City Railway Station (UDZ)");
        setDrop("Hotel / City Center");
      } else if (dest.includes("sightseeing") || dest.includes("tour") || dest.includes("pichola")) {
        setActiveTab("sightseeing");
        setPickup("Hotel / Pickup Point");
        setDrop(preselectedDestination || "Udaipur Full Day Sightseeing");
      } else if (dest.includes("outstation") || dest.includes("kumbhalgarh") || dest.includes("ranakpur") || dest.includes("chittorgarh") || dest.includes("mount abu")) {
        setActiveTab("outstation");
        setPickup("Udaipur Pick-up Point");
        setDrop(preselectedDestination || "Kumbhalgarh / Ranakpur / Mount Abu");
      } else if (dest.includes("wedding") || dest.includes("palace venue")) {
        setActiveTab("wedding");
        setPickup("Airport / Railway Station");
        setDrop(preselectedDestination || "Palace Wedding Venue / Resort");
      } else if (dest.includes("hotel") || dest.includes("resort")) {
        setActiveTab("hotel");
        setPickup("Airport / Railway Station");
        setDrop(preselectedDestination || "Taj Lake Palace / Oberoi Udaivilas");
      } else {
        setActiveTab("general");
        setPickup("Maharana Pratap Airport (UDR)");
        setDrop(preselectedDestination || "City Palace / Lake Pichola");
      }

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

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setError("");
    switch (tab) {
      case "jawai":
        setPickup("Udaipur City / Hotel");
        setDrop("JAWAI LEOPARD SAFARI (150 KM)");
        break;
      case "airport":
        setPickup("Maharana Pratap Airport (UDR)");
        setDrop("Hotel / Destination in Udaipur");
        break;
      case "railway":
        setPickup("Udaipur City Railway Station (UDZ)");
        setDrop("Hotel / City Center");
        break;
      case "sightseeing":
        setPickup("Hotel / Pickup Point");
        setDrop("Udaipur Full Day Sightseeing");
        break;
      case "outstation":
        setPickup("Udaipur Pick-up Point");
        setDrop("Kumbhalgarh / Ranakpur / Mount Abu");
        break;
      case "wedding":
        setPickup("Airport / Railway Station");
        setDrop("Palace Wedding Venue / Resort");
        break;
      case "hotel":
        setPickup("Airport / Railway Station");
        setDrop("Taj Lake Palace / Oberoi Udaivilas");
        break;
      default:
        setPickup("Maharana Pratap Airport (UDR)");
        setDrop("City Palace / Lake Pichola");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup.trim() || !drop.trim()) {
      setError("Please fill out both pickup and drop locations.");
      return;
    }
    setError("");

    let serviceName = "Cab Booking";
    let extraNotes = "";

    if (activeTab === "jawai") {
      serviceName = "Jawai Leopard Safari Tour";
      extraNotes = "Includes Private Cab + 4x4 Jeep Safari Assistance";
    } else if (activeTab === "airport") {
      serviceName = "Airport Transfer";
      if (flightOrTrainNo) extraNotes = `Flight No: ${flightOrTrainNo}`;
    } else if (activeTab === "railway") {
      serviceName = "Railway Station Transfer";
      if (flightOrTrainNo) extraNotes = `Train No: ${flightOrTrainNo}`;
    } else if (activeTab === "sightseeing") {
      serviceName = "Udaipur Sightseeing Tour";
      extraNotes = `Package: ${packageDuration}`;
    } else if (activeTab === "outstation") {
      serviceName = "Outstation Cab Ride";
      extraNotes = `Trip Type: ${outstationTripType}`;
    } else if (activeTab === "wedding") {
      serviceName = "Wedding Transportation Fleet";
      extraNotes = `Requirement: ${weddingRequirement}`;
    } else if (activeTab === "hotel") {
      serviceName = "Luxury Hotel Transfer";
    }

    sendLeadToWebhook({
      serviceType: serviceName,
      pickup,
      drop,
      date,
      time,
      passengers,
      vehicleType,
      flightOrTrainNo: flightOrTrainNo || undefined,
      customNotes: extraNotes || undefined,
    });

    const url = buildWhatsAppBookingUrl({
      serviceType: serviceName,
      pickup,
      drop,
      date,
      time,
      passengers,
      vehicleType,
      flightOrTrainNo: flightOrTrainNo || undefined,
      customNotes: extraNotes || undefined,
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
              Select your service type for an instant custom WhatsApp quote.
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

        {/* Service Type Selector Tabs */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "general", label: "General Cab", icon: Car },
            { id: "jawai", label: "Jawai Safari", icon: Compass },
            { id: "airport", label: "Airport", icon: Plane },
            { id: "railway", label: "Railway", icon: Train },
            { id: "sightseeing", label: "Sightseeing", icon: Camera },
            { id: "outstation", label: "Outstation", icon: Compass },
            { id: "wedding", label: "Weddings", icon: Sparkles },
            { id: "hotel", label: "Hotel Transfer", icon: Building2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id as typeof activeTab)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#002247] text-white shadow-md scale-[1.02]"
                    : "bg-[#F7FAFC] text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#007FF0]" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
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
                <span>
                  {activeTab === "airport"
                    ? "Airport / Pickup"
                    : activeTab === "railway"
                    ? "Station / Pickup"
                    : "Pickup Location"}
                </span>
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
                <span>
                  {activeTab === "airport"
                    ? "Hotel / Drop"
                    : activeTab === "railway"
                    ? "Drop Location"
                    : "Drop Location / Tour"}
                </span>
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

          {/* Service-Specific Special Fields */}
          {(activeTab === "airport" || activeTab === "railway") && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#007FF0]" />
                <span>{activeTab === "airport" ? "Flight Number (Optional)" : "Train Number / Name (Optional)"}</span>
              </label>
              <input
                type="text"
                value={flightOrTrainNo}
                onChange={(e) => setFlightOrTrainNo(e.target.value)}
                placeholder={activeTab === "airport" ? "e.g. 6E-2134 (For arrival tracking)" : "e.g. 12963 Mewar Express"}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              />
            </div>
          )}

          {activeTab === "sightseeing" && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#007FF0]" />
                <span>Sightseeing Package Duration</span>
              </label>
              <select
                value={packageDuration}
                onChange={(e) => setPackageDuration(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              >
                <option value="8 Hours / 80 KM Full Day">8 Hours / 80 KM Full Day Tour</option>
                <option value="4 Hours / 40 KM Half Day">4 Hours / 40 KM Half Day Tour</option>
                <option value="12 Hours Sunset Special">12 Hours Sunset & Night View Tour</option>
              </select>
            </div>
          )}

          {activeTab === "outstation" && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#007FF0]" />
                <span>Outstation Trip Type</span>
              </label>
              <select
                value={outstationTripType}
                onChange={(e) => setOutstationTripType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              >
                <option value="Round Trip">Same Day Round Trip</option>
                <option value="One Way Drop">One-Way Drop</option>
                <option value="Multi-Day Rajasthan Tour">Multi-Day Custom Rajasthan Tour</option>
              </select>
            </div>
          )}

          {activeTab === "wedding" && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C2A03E]" />
                <span>Wedding Fleet Requirement</span>
              </label>
              <select
                value={weddingRequirement}
                onChange={(e) => setWeddingRequirement(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              >
                <option value="Guest Convoy & Airport Shuttles">Guest Convoy & Airport Shuttles</option>
                <option value="Bride & Groom Luxury Car">Bride & Groom Luxury Executive Car</option>
                <option value="Baraat & Large Group Buses">Baraat Tempo / Urbania Group Travel</option>
                <option value="Full Wedding Logistics Package">Full Wedding Logistics Management</option>
              </select>
            </div>
          )}

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#007FF0]" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#007FF0]" /> Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              />
            </div>
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
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
              >
                <option value="1 Passenger">1 Passenger</option>
                <option value="2 Passengers">2 Passengers</option>
                <option value="3-4 Passengers">3 - 4 Passengers</option>
                <option value="5-7 Passengers">5 - 7 Passengers (SUV)</option>
                <option value="8-17 Group">8 - 17 Tempo Traveller</option>
                <option value="18-32 Urbania">18 - 32 Force Urbania</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#007FF0]" /> Vehicle
              </label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0]"
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
