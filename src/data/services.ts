export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'MapPin' | 'Plane' | 'Camera' | 'Compass' | 'Sparkles' | 'Building2' | 'Train' | 'Briefcase' | 'GraduationCap' | 'Hotel' | 'Sliders' | 'Globe';
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
    id: "hotel-transfers",
    title: "HOTEL & RESORT TRANSFERS",
    tagline: "Doorstep Arrival & Luggage Assist",
    description: "Seamless point-to-point transfers between airport, railway platforms, and premier lake resorts, heritage palace hotels, and boutique stays across Udaipur.",
    iconName: "Hotel",
    highlights: ["Doorstep pickup & luggage handling", "Direct palace & lake resort drops", "Fleet of sedans, SUVs & luxury vans"]
  },
  {
    id: "corporate-events",
    title: "CORPORATE EVENT & MICE TRANSPORT",
    tagline: "Executive Fleets & Delegate Shuttles",
    description: "Executive sedans and luxury tempo convoys for corporate conferences, business delegations, summit transfers, and MICE events with GST billing.",
    iconName: "Briefcase",
    highlights: ["Uniformed executive chauffeurs", "Corporate invoicing & GST billing", "Multi-vehicle convoy coordination"]
  },
  {
    id: "educational-tours",
    title: "EDUCATIONAL & STUDENT STUDY TOURS",
    tagline: "School & College Excursions",
    description: "Safe, GPS-monitored, and spacious group transportation for school excursions, university heritage trails, architectural field visits, and college research tours.",
    iconName: "GraduationCap",
    highlights: ["High-capacity Tempo Travellers & Urbanias", "Verified safety-first highway captains", "Budget-friendly institutional packages"]
  },
  {
    id: "customise-taxi-services",
    title: "CUSTOMISE TAXI & HOURLY RENTALS",
    tagline: "Bespoke Schedule & Routes",
    description: "Design your travel route on your terms with flexible schedules, custom multi-stop itineraries, scenic detours, and dedicated private chauffeurs.",
    iconName: "Sliders",
    highlights: ["Flexible hourly & full-day travel", "Zero route restrictions", "Dedicated chauffeur at your disposal"]
  },
  {
    id: "all-india-taxi-services",
    title: "ALL INDIA & INTERSTATE TAXI",
    tagline: "Nationwide Highway Journeys",
    description: "Long-distance interstate taxi service connecting Udaipur with Gujarat, Maharashtra, MP, Delhi NCR, and pilgrimage circuits across India.",
    iconName: "Globe",
    highlights: ["All-India national tourist permits", "Experienced interstate highway chauffeurs", "24/7 journey support & breakdown assist"]
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
    id: "family-holiday-tours",
    title: "FAMILY HOLIDAY TOURS",
    tagline: "Safe & Memorable Vacation Packages",
    description: "Family-friendly travel with spacious vehicles, comfortable pacing, and child- and senior-safe itineraries.",
    iconName: "Building2",
    highlights: ["Spacious MUVs & Tempo Travellers", "Relaxed family itinerary pace", "Experienced courteous chauffeurs"]
  }
];
