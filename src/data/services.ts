export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'MapPin' | 'Plane' | 'Camera' | 'Compass' | 'Sparkles' | 'Building2' | 'Train';
  highlights: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "udaipur-local-sightseeing",
    title: "UDAIPUR LOCAL SIGHTSEEING",
    tagline: "The City of Lakes Unhurried",
    description: "Explore City Palace, Lake Pichola, Saheliyon Ki Bari, and Fateh Sagar with local sightseeing experts.",
    iconName: "Camera",
    highlights: ["Customized sightseeing itineraries", "Courteous local driver guidance", "Full day & half day tour options"]
  },
  {
    id: "airport-pickup-drop",
    title: "AIRPORT PICKUP & DROP",
    tagline: "Maharana Pratap Airport (UDR)",
    description: "Punctual, 24/7 airport transfer taxi service in Udaipur with flight tracking and terminal meet & greet.",
    iconName: "Plane",
    highlights: ["Real-time flight tracking", "Meet & greet terminal assist", "Zero wait-time arrival service"]
  },
  {
    id: "railway-station-transfers",
    title: "RAILWAY STATION TRANSFERS",
    tagline: "Udaipur City (UDZ) & Rana Pratap Nagar",
    description: "Convenient train pickup and drop-off taxi service across Udaipur railway platforms with luggage assist.",
    iconName: "Train",
    highlights: ["Train schedule monitoring", "Platform exit assistance", "Reliable 24/7 transfers"]
  },
  {
    id: "one-way-taxi",
    title: "ONE-WAY TAXI SERVICE",
    tagline: "Flexible Intercity Travel",
    description: "Affordable one-way taxi from Udaipur to Ahmedabad, Jaipur, Jodhpur, Ajmer, Mount Abu, and Chittorgarh.",
    iconName: "Compass",
    highlights: ["Pay only for one-way distance", "Direct highway drop-offs", "Clean sanitized vehicles"]
  },
  {
    id: "round-trip-taxi",
    title: "ROUND-TRIP TAXI SERVICE",
    tagline: "Comfortable Return Trips",
    description: "Convenient round-trip taxi packages for outstation getaways, weekend tours, and family holidays.",
    iconName: "MapPin",
    highlights: ["Flexible sightseeing stops", "Dedicated car and driver", "Transparent all-inclusive rates"]
  },
  {
    id: "outstation-taxi",
    title: "OUTSTATION TAXI",
    tagline: "Rajasthan & Interstate Journeys",
    description: "Travel smoothly from Udaipur to Kumbhalgarh, Ranakpur, Nathdwara, Mount Abu, and Gujarat.",
    iconName: "Compass",
    highlights: ["Aravalli hill driving experts", "Doorstep pickup & drops", "Sedans, SUVs & Tempo Travellers"]
  },
  {
    id: "rajasthan-heritage-tours",
    title: "RAJASTHAN HERITAGE TOURS",
    tagline: "Palaces, Forts & Royal Culture",
    description: "Immersive multi-day heritage tours celebrating Rajput history, majestic forts, and cultural landmarks.",
    iconName: "Sparkles",
    highlights: ["Iconic forts & royal palaces", "Tailored cultural itineraries", "Comfortable heritage travel"]
  },
  {
    id: "udaipur-local-tour",
    title: "UDAIPUR LOCAL TOUR",
    tagline: "City Heart & Hidden Gems",
    description: "Point-to-point local taxi tours covering old city bazaars, ghats, cultural venues, and sunset spots.",
    iconName: "MapPin",
    highlights: ["Old city navigation experts", "Flexible hourly rental options", "Hassle-free parking & transit"]
  },
  {
    id: "family-holiday-tours",
    title: "FAMILY HOLIDAY TOURS",
    tagline: "Safe & Memorable Vacation Packages",
    description: "Family-friendly travel with spacious vehicles, comfortable pacing, and child- and senior-safe itineraries.",
    iconName: "Building2",
    highlights: ["Spacious MUVs & Tempo Travellers", "Relaxed family itinerary pace", "Experienced courteous chauffeurs"]
  },
  {
    id: "customized-tour-packages",
    title: "CUSTOMIZED TOUR PACKAGES",
    tagline: "Crafted Around Your Travel Dreams",
    description: "Personalized Rajasthan tour packages designed around your exact dates, interests, and preferences.",
    iconName: "Sparkles",
    highlights: ["100% flexible itineraries", "Bespoke hotel & vehicle combos", "Direct booking assistance"]
  },
  {
    id: "all-india-tour-packages",
    title: "ALL INDIA TOUR PACKAGES",
    tagline: "Nationwide & Multi-State Journeys",
    description: "Comprehensive multi-state journeys across Gujarat, Delhi, Agra, MP, and destinations throughout India.",
    iconName: "Compass",
    highlights: ["Long-distance verified fleet", "Interstate permits & tolls sorted", "24/7 journey support desk"]
  }
];
