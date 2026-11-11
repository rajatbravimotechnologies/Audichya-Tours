import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, Calendar, Users, MapPin, Phone, User, Clock, FileText } from "lucide-react";
import { buildWhatsAppBookingUrl, sendLeadToWebhook, siteConfig } from "../../config/site";

export const CustomTourEnquiryForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [numTravellers, setNumTravellers] = useState("2 Travellers");
  const [preferredDestinations, setPreferredDestinations] = useState("Udaipur + Kumbhalgarh");
  const [travelDays, setTravelDays] = useState("3 Days / 2 Nights");
  const [requirements, setRequirements] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !startDate) {
      setError("Please fill out your name, contact phone number, and start date.");
      return;
    }

    setError("");

    const customNotes = `Custom Tour Plan Request:\n- Travellers: ${numTravellers}\n- Duration: ${travelDays}\n- Preferred Destinations: ${preferredDestinations}\n${requirements ? `- Specific Notes: ${requirements}` : ""}`;

    sendLeadToWebhook({
      serviceType: "Custom Rajasthan Tour Plan",
      pickup: "Rajasthan Tour Consultation",
      drop: preferredDestinations,
      date: startDate,
      passengers: numTravellers,
      customNotes: `Client Name: ${fullName} | Phone: ${phone}\n${customNotes}`,
    });

    const url = buildWhatsAppBookingUrl({
      serviceType: "Custom Rajasthan Tour Plan",
      pickup: "Hotel / Arrival Point",
      drop: preferredDestinations,
      date: startDate,
      passengers: numTravellers,
      customNotes: `Namaste Audichya Tours, my name is ${fullName} (${phone}).\nI would like to request a customized tour plan:\n- Duration: ${travelDays}\n- Destinations: ${preferredDestinations}\n${requirements ? `- Notes: ${requirements}` : ""}`,
    });

    setIsSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="custom-enquiry" className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#002247]/10 shadow-xl overflow-hidden text-left">
      {/* Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#007FF0] via-[#C2A03E] to-[#002247]" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
            <Sparkles className="w-4 h-4" />
            <span>TAILORED RAJASTHAN TRAVEL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
            Design Your Custom Itinerary
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Tell us your travel dates, preferred destinations, and group size. Our local Rajasthan experts will craft an itinerary tailored to your schedule.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-xl font-bold text-emerald-900 font-serif">
              Tour Plan Request Sent!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
              Thank you, {fullName}. We have forwarded your tour requirements to our dedicated travel desk. You can also chat with us directly on WhatsApp.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#007FF0]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Vikramaditya Singhal"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-[#FFF9F0]/50"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#007FF0]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-[#FFF9F0]/50"
                />
              </div>
            </div>

            {/* Row 2: Start Date & Travellers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#007FF0]" />
                  <span>Travel Start Date *</span>
                </label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-[#FFF9F0]/50"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#007FF0]" />
                  <span>Number of Travellers</span>
                </label>
                <select
                  value={numTravellers}
                  onChange={(e) => setNumTravellers(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-[#FFF9F0]/50"
                >
                  <option value="1 Traveller (Solo)">1 Traveller (Solo)</option>
                  <option value="2 Travellers (Couple)">2 Travellers (Couple)</option>
                  <option value="3-4 Travellers (Family)">3-4 Travellers (Family)</option>
                  <option value="5-7 Travellers (SUV Group)">5-7 Travellers (SUV Group)</option>
                  <option value="8-12 Group (Tempo Traveller)">8-12 Group (Tempo Traveller)</option>
                  <option value="13-17 VIP Group (Urbania)">13-17 VIP Group (Force Urbania)</option>
                  <option value="18+ Large Group / Wedding">18+ Large Group</option>
                </select>
              </div>
            </div>

            {/* Row 3: Destinations & Number of Days */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C2A03E]" />
                  <span>Preferred Destinations</span>
                </label>
                <input
                  type="text"
                  value={preferredDestinations}
                  onChange={(e) => setPreferredDestinations(e.target.value)}
                  placeholder="e.g. Udaipur, Kumbhalgarh, Mount Abu"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-[#FFF9F0]/50"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C2A03E]" />
                  <span>Number of Travel Days</span>
                </label>
                <select
                  value={travelDays}
                  onChange={(e) => setTravelDays(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-[#FFF9F0]/50"
                >
                  <option value="1 Day Tour">1 Day Tour</option>
                  <option value="2 Days / 1 Night">2 Days / 1 Night</option>
                  <option value="3 Days / 2 Nights">3 Days / 2 Nights</option>
                  <option value="4 Days / 3 Nights">4 Days / 3 Nights</option>
                  <option value="5 Days / 4 Nights">5 Days / 4 Nights</option>
                  <option value="6 Days / 5 Nights">6 Days / 5 Nights</option>
                  <option value="7+ Days Grand Circuit">7+ Days Grand Circuit</option>
                </select>
              </div>
            </div>

            {/* Row 4: Additional Requirements */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#002247] mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#007FF0]" />
                <span>Additional Requirements (Optional)</span>
              </label>
              <textarea
                rows={3}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Share any special preferences (e.g. child seats, elderly mobility assistance, preferred vehicle Innova/Urbania, airport transfer timings)..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#007FF0] bg-[#FFF9F0]/50 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] active:scale-[0.98] transition-all shadow-lg shadow-[#007FF0]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST MY TOUR PLAN</span>
              </button>
              <p className="mt-2.5 text-[11px] text-slate-500 text-center">
                Our destination planners reply with a detailed day-wise itinerary & guaranteed transparent quotation within 15 minutes.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

