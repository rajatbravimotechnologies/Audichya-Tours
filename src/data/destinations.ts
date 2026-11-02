export interface DestinationItem {
  id: string;
  name: string;
  hindiName?: string;
  type: string;
  tagline: string;
  description: string;
  distanceFromCenter: string;
  idealDuration: string;
  suggestedCab: string;
  imagePlaceholderId: string;
  category?: 'local' | 'outstation';
  image?: string;
}

export const destinationsData: DestinationItem[] = [
  // --- Local Udaipur Destinations ---
  {
    id: "city-palace",
    name: "City Palace",
    hindiName: "सिटी पैलेस",
    type: "Royal Heritage",
    tagline: "400 years of Mewar royal architecture",
    description: "A monumental palace complex overlooking Lake Pichola with ornate balconies, towering courtyards, and mirror work.",
    distanceFromCenter: "1.5 km from City Center",
    idealDuration: "2 - 3 Hours",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "palace",
    category: "local",
    image: "/images/City Palace.webp"
  },
  {
    id: "lake-pichola",
    name: "Lake Pichola",
    hindiName: "पिछोला झील",
    type: "Iconic Lake",
    tagline: "Serene waters and palace reflections",
    description: "An artificial freshwater lake famous for boat cruises past Jag Mandir, Taj Lake Palace, and romantic sunset vistas.",
    distanceFromCenter: "2 km from Old City",
    idealDuration: "1 - 2 Hours (Sunset)",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "lake",
    category: "local",
    image: "/images/Lake Pichola.webp"
  },
  {
    id: "fateh-sagar-lake",
    name: "Fateh Sagar Lake",
    hindiName: "फतह सागर झील",
    type: "Scenic Promenade",
    tagline: "Breezy lakeside drives and Nehru Park",
    description: "Nestled against the Aravalli hills, popular for scenic Rani Road drives, solar observatory views, and lakeside cafes.",
    distanceFromCenter: "4.5 km from Central Udaipur",
    idealDuration: "1 - 2 Hours",
    suggestedCab: "Local Sightseeing Cab",
    imagePlaceholderId: "fatehsagar",
    category: "local",
    image: "/images/Fateh Sagar Lake.webp"
  },
  {
    id: "sajjangarh-monsoon-palace",
    name: "Sajjangarh / Monsoon Palace",
    hindiName: "सज्जनगढ़ मानसून पैलेस",
    type: "Hilltop Vista",
    tagline: "Panoramic Aravalli sunsets from 3,100 ft",
    description: "Perched high on Bansdara peak, built by Maharana Sajjan Singh to watch monsoon clouds and 360-degree sunset panoramas.",
    distanceFromCenter: "9 km via scenic ghat road",
    idealDuration: "2 Hours (Sunset)",
    suggestedCab: "SUV or Power Sedan",
    imagePlaceholderId: "monsoon",
    category: "local",
    image: "/images/Sajjangarh.webp"
  },
  {
    id: "jagdish-temple",
    name: "Jagdish Temple",
    hindiName: "जगदीश मंदिर",
    type: "Spiritual Monument",
    tagline: "17th-century Indo-Aryan carved temple",
    description: "A grand 3-story Hindu temple carved with mythological figures, elephants, and dancers, right at the heart of old Udaipur.",
    distanceFromCenter: "Center of Old City",
    idealDuration: "45 Minutes",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "temple",
    category: "local",
    image: "/images/Jagdish Temple.webp"
  },
  {
    id: "saheliyon-ki-bari",
    name: "Saheliyon-ki-Bari",
    hindiName: "सहेलियों की बाड़ी",
    type: "Historic Royal Gardens",
    tagline: "Garden of the Maids with marble fountains",
    description: "Built for royal maidens, featuring lush green lawns, marble elephant fountains, lotus pools, and tranquil shaded walks.",
    distanceFromCenter: "4 km from City Center",
    idealDuration: "1 Hour",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "gardens",
    category: "local",
    image: "/images/Saheliyon-ki-Bari.webp"
  },
  {
    id: "bagore-ki-haveli",
    name: "Bagore Ki Haveli",
    hindiName: "बाग़ोर की हवेली",
    type: "Waterfront Haveli & Culture",
    tagline: "Gangaur Ghat evening folk dance shows",
    description: "An 18th-century mansion directly on Gangaur Ghat, hosting Dharohar folk dances, puppet performances, and Mewari artifacts.",
    distanceFromCenter: "Gangaur Ghat, Old City",
    idealDuration: "1.5 Hours (Evening)",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "haveli",
    category: "local",
    image: "/images/Bagore Ki Haveli.webp"
  },
  {
    id: "shilpgram",
    name: "Shilpgram",
    hindiName: "शिल्पग्राम",
    type: "Rural Arts & Crafts Complex",
    tagline: "Living museum of western Indian village culture",
    description: "A rural arts and crafts complex celebrating indigenous pottery, weaving, tribal huts, and Rajasthani artisan heritage.",
    distanceFromCenter: "7 km from Udaipur Center",
    idealDuration: "2 - 3 Hours",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "crafts",
    category: "local",
    image: "/images/Shilpgram.webp"
  },
  {
    id: "ahar-cenotaphs",
    name: "Ahar Cenotaphs",
    hindiName: "आहड़ छतरियां",
    type: "Historical Monument",
    tagline: "Royal marble cenotaphs of Mewar Maharanas",
    description: "Royal marble cenotaphs of Mewar's Maharanas, featuring intricate domes and beautiful historic architecture.",
    distanceFromCenter: "3–4 km from City Center",
    idealDuration: "45 min – 1 hour",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "ahar",
    category: "local",
    image: "/images/Ahar Cenotaphs.webp"
  },
  {
    id: "badi-lake",
    name: "Badi Lake (Bahubali Hills)",
    hindiName: "बड़ी झील",
    type: "Nature & Viewpoint",
    tagline: "Peaceful lake & panoramic hill views",
    description: "A peaceful lake surrounded by the Aravalli hills, with a scenic hilltop viewpoint offering breathtaking panoramic views.",
    distanceFromCenter: "12–15 km from City Center",
    idealDuration: "1.5–2 hours",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "badilake",
    category: "local",
    image: "/images/Badi Lake (Bahubali Hills).webp"
  },
  {
    id: "doodh-talai",
    name: "Doodh Talai Musical Garden",
    hindiName: "दूध तलाई",
    type: "Garden & Viewpoint",
    tagline: "Lakeside views & musical fountain garden",
    description: "A charming lakeside garden with elevated viewpoints, sunset scenery and beautiful views of Lake Pichola.",
    distanceFromCenter: "2 km from City Center",
    idealDuration: "30–45 min",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "doodhtalai",
    category: "local",
    image: "/images/Doodh Talai Musical Garden.webp"
  },
  {
    id: "karni-mata",
    name: "Karni Mata Temple & Ropeway",
    hindiName: "करणी माता मंदिर",
    type: "Temple & Ropeway",
    tagline: "Aerial Pichola vistas via hilltop ropeway",
    description: "A hilltop temple accessible by ropeway, offering spectacular aerial views of Lake Pichola, City Palace and the city skyline.",
    distanceFromCenter: "2–3 km from City Center",
    idealDuration: "1–1.5 hours",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "karnimata",
    category: "local",
    image: "/images/Karni Mata Temple & Ropeway.webp"
  },
  {
    id: "gulab-bagh",
    name: "Gulab Bagh & Zoo",
    hindiName: "गुलाब बाग",
    type: "Garden & Family Attraction",
    tagline: "Lush historic garden & family zoo",
    description: "A historic garden with lush greenery, walking paths and a zoo, ideal for families and a relaxing visit.",
    distanceFromCenter: "1–2 km from City Center",
    idealDuration: "1–2 hours",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "gulabbagh",
    category: "local",
    image: "/images/Gulab Bagh & Zoo.avif"
  },
  {
    id: "neemach-mata",
    name: "Neemach Mata Temple",
    hindiName: "नीमच माता मंदिर",
    type: "Hilltop Temple",
    tagline: "Tranquil hilltop temple overlooking Fatehsagar",
    description: "A hilltop temple near Fateh Sagar Lake, popular for its peaceful atmosphere, scenic views and uphill walking trail.",
    distanceFromCenter: "5–6 km from City Center",
    idealDuration: "1–1.5 hours",
    suggestedCab: "Local City Cab",
    imagePlaceholderId: "neemachmata",
    category: "local",
    image: "/images/Neemach Mata Temple.webp"
  },

  // --- Outstation & Nearby Destinations ---
  {
    id: "eklingji-temple",
    name: "Eklingji Temple",
    hindiName: "एकलिंगजी मंदिर",
    type: "Religious Heritage",
    tagline: "Mewar dynasty's 108-temple complex",
    description: "A magnificent temple complex dedicated to Lord Shiva, known for its intricately carved architecture and deep spiritual significance to the Mewar royal family.",
    distanceFromCenter: "22 km from Udaipur",
    idealDuration: "1–2 hours",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "eklingji",
    category: "outstation",
    image: "/images/Eklingji Temple.webp"
  },
  {
    id: "nagda-saas-bahu",
    name: "Nagda & Saas-Bahu Temples",
    hindiName: "नागदा मंदिर",
    type: "Ancient Architecture",
    tagline: "10th-century carved stone heritage",
    description: "Ancient temple ruins with remarkable stone carvings, intricate pillars and a peaceful historical atmosphere near the Eklingji temple complex.",
    distanceFromCenter: "23–25 km from Udaipur",
    idealDuration: "1 hour",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "nagda",
    category: "outstation",
    image: "/images/Nagda & Saas-Bahu Temples.webp"
  },
  {
    id: "nathdwara",
    name: "Nathdwara – Shrinathji Temple",
    hindiName: "नाथद्वारा",
    type: "Pilgrimage & Culture",
    tagline: "Vibrant Krishna pilgrimage town & art",
    description: "One of India's most revered Krishna temples, famous for its devotional traditions, colourful markets and vibrant spiritual atmosphere.",
    distanceFromCenter: "48 km from Udaipur",
    idealDuration: "3–5 hours",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "nathdwara",
    category: "outstation",
    image: "/images/Nathdwara – Shrinathji Temple.avif"
  },
  {
    id: "haldighati",
    name: "Haldighati",
    hindiName: "हल्दीघाटी",
    type: "Historical & Heritage",
    tagline: "Historic pass of Maharana Pratap's valour",
    description: "The historic mountain pass associated with the Battle of Haldighati and Maharana Pratap, surrounded by the rugged Aravalli landscape.",
    distanceFromCenter: "40–45 km from Udaipur",
    idealDuration: "1–2 hours",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "haldighati",
    category: "outstation",
    image: "/images/Haldighati.webp"
  },
  {
    id: "jaisamand-lake",
    name: "Jaisamand Lake (Dhebar Lake)",
    hindiName: "जयसमंद झील",
    type: "Lake & Nature",
    tagline: "Second-largest artificial lake in Asia",
    description: "A vast artificial lake surrounded by forested hills, featuring scenic shorelines, island views and beautiful nature escapes.",
    distanceFromCenter: "48–55 km from Udaipur",
    idealDuration: "3–5 hours",
    suggestedCab: "SUV or Power Sedan",
    imagePlaceholderId: "jaisamand",
    category: "outstation",
    image: "/images/Jaisamand Lake (Dhebar Lake).webp"
  },
  {
    id: "rajsamand-lake",
    name: "Rajsamand Lake",
    hindiName: "राजसमंद झील",
    type: "Historic Lake",
    tagline: "Marble pavilions & royal Toranas",
    description: "A historic lake built by Maharana Raj Singh, featuring beautiful marble embankments, ornate pavilions and peaceful waterside scenery.",
    distanceFromCenter: "65–70 km from Udaipur",
    idealDuration: "1–2 hours",
    suggestedCab: "Sedan or SUV",
    imagePlaceholderId: "rajsamand",
    category: "outstation",
    image: "/images/Rajsamand Lake.webp"
  },
  {
    id: "kumbhalgarh-fort",
    name: "Kumbhalgarh Fort",
    hindiName: "कुंभलगढ़ किला",
    type: "UNESCO Heritage",
    tagline: "World's 2nd longest continuous wall",
    description: "A majestic UNESCO World Heritage Hill Fort, renowned for its enormous defensive walls, historic palaces and sweeping Aravalli mountain views.",
    distanceFromCenter: "85–90 km from Udaipur",
    idealDuration: "3–4 hours at the fort",
    suggestedCab: "SUV or Power Sedan",
    imagePlaceholderId: "kumbhalgarh",
    category: "outstation",
    image: "/images/Kumbhalgarh Fort.webp"
  },
  {
    id: "ranakpur-temple",
    name: "Ranakpur Jain Temple",
    hindiName: "रणकपुर जैन मंदिर",
    type: "Jain Heritage",
    tagline: "1,444 uniquely carved marble pillars",
    description: "A spectacular marble temple complex featuring elaborate pillars, intricately carved ceilings and exceptional 15th-century Jain architecture.",
    distanceFromCenter: "90–95 km from Udaipur",
    idealDuration: "1–2 hours",
    suggestedCab: "SUV or Executive Sedan",
    imagePlaceholderId: "ranakpur",
    category: "outstation",
    image: "/images/Ranakpur Jain Temple.webp"
  },
  {
    id: "chittorgarh-fort",
    name: "Chittorgarh Fort",
    hindiName: "चित्तौड़गढ़ किला",
    type: "UNESCO Heritage",
    tagline: "India's grandest fort & Vijay Stambh",
    description: "One of India's most iconic forts, featuring the Vijay Stambh, historic palaces, ancient temples and stories of Rajput valour.",
    distanceFromCenter: "115 km from Udaipur",
    idealDuration: "4–6 hours sightseeing",
    suggestedCab: "SUV or Power Sedan",
    imagePlaceholderId: "chittorgarh",
    category: "outstation",
    image: "/images/Chittorgarh Fort.webp"
  },
  {
    id: "mount-abu",
    name: "Mount Abu",
    hindiName: "माउंट आबू",
    type: "Hill Station & Nature",
    tagline: "Nakki lake, Dilwara temples & cool heights",
    description: "Rajasthan's famous hill station, offering Nakki Lake, the Dilwara Jain Temples, lush green hills and beautiful sunset viewpoints.",
    distanceFromCenter: "160–170 km from Udaipur",
    idealDuration: "Full day or overnight",
    suggestedCab: "SUV or Executive Sedan",
    imagePlaceholderId: "mountabu",
    category: "outstation",
    image: "/images/Mount Abu.webp"
  },
  {
    id: "jawai-leopard-safari-destination",
    name: "Jawai Leopard Safari & Dam",
    hindiName: "जवाई लेपर्ड सफारी",
    type: "Wildlife & Safari",
    tagline: "Granite hills, 4x4 leopard safari & migratory birds",
    description: "Experience Rajasthan's famous leopard country. Unique granite hill terrain, 4x4 open jeep safaris, Rabari tribal culture, and Jawai Dam crocodile & bird watching.",
    distanceFromCenter: "135–150 km from Udaipur (3 Hours)",
    idealDuration: "Day excursion or 1-night stay",
    suggestedCab: "SUV / Innova Crysta / Urbania",
    imagePlaceholderId: "wildlife",
    category: "outstation",
    image: "/images/Jawai.webp"
  }
];

export interface TourPackageItem {
  id: string;
  code: string;
  title: string;
  duration: string;
  description: string;
  placesCovered: string[];
  suggestedCab: string;
  image: string;
}

export const tourPackagesData: TourPackageItem[] = [
  {
    id: "pkg-udaipur-local",
    code: "PKG A",
    title: "Udaipur Local Sightseeing",
    duration: "Full Day (8-10 Hours)",
    description: "Experience the timeless highlights of the City of Lakes with a comfortable chauffeur-driven taxi.",
    placesCovered: ["City Palace", "Lake Pichola", "Jagdish Temple", "Saheliyon Ki Bari", "Fateh Sagar Lake"],
    suggestedCab: "Sedan / Ertiga / Innova Crysta",
    image: "/images/City Palace.webp"
  },
  {
    id: "pkg-udaipur-heritage",
    code: "PKG B",
    title: "Udaipur Heritage Tour",
    duration: "Full Day",
    description: "Deep dive into Mewar royal architecture, ornate havelis, historic cenotaphs, and evening cultural performances.",
    placesCovered: ["Bagore Ki Haveli", "Ahar Cenotaphs", "City Palace Museum", "Vintage Car Collection"],
    suggestedCab: "Sedan / Innova Crysta / Force Urbania",
    image: "/images/Bagore Ki Haveli.webp"
  },
  {
    id: "pkg-udaipur-mount-abu",
    code: "PKG C",
    title: "Udaipur to Mount Abu",
    duration: "Same Day or 2 Days / 1 Night",
    description: "Scenic drive from Udaipur up the Aravalli hills to Rajasthan's premier hill station.",
    placesCovered: ["Nakki Lake", "Dilwara Jain Temples", "Guru Shikhar", "Sunset Point"],
    suggestedCab: "SUV / Innova Crysta / Tempo Traveller",
    image: "/images/Mount Abu.webp"
  },
  {
    id: "pkg-udaipur-chittorgarh",
    code: "PKG D",
    title: "Udaipur to Chittorgarh",
    duration: "Same Day Excursion (7-8 Hours)",
    description: "Journey to India's largest fort complex celebrating tales of Rajput honour, sacrifice, and architectural grandeur.",
    placesCovered: ["Vijay Stambh", "Kirti Stambh", "Rani Padmini Palace", "Kalika Mata Temple"],
    suggestedCab: "Sedan / Innova Crysta / Tempo Traveller",
    image: "/images/Chittorgarh Fort.webp"
  },
  {
    id: "pkg-kumbhalgarh-ranakpur",
    code: "PKG E",
    title: "Kumbhalgarh & Ranakpur Tour",
    duration: "Full Day Excursion (9-10 Hours)",
    description: "Explore the UNESCO Great Wall of Kumbhalgarh followed by the marble architecture of Ranakpur Jain Temple.",
    placesCovered: ["Kumbhalgarh Fort (Badal Mahal)", "Great Wall", "Ranakpur 1,444-Pillar Temple"],
    suggestedCab: "Innova Crysta / Ertiga / Force Urbania",
    image: "/images/Kumbhalgarh Fort.webp"
  },
  {
    id: "pkg-nathdwara-haldighati",
    code: "PKG F",
    title: "Udaipur Nathwara Haldighati Tour",
    duration: "Same Day (6-8 Hours)",
    description: "Spiritual darshan at Shrinathji temple paired with the battlegrounds and museum of Maharana Pratap at Haldighati.",
    placesCovered: ["Shrinathji Temple Nathdwara", "Statue of Belief", "Haldighati Pass & Museum", "Chetak Samadhi"],
    suggestedCab: "Dzire / Etios / Ertiga / Innova Crysta",
    image: "/images/Haldighati.webp"
  },
  {
    id: "pkg-jawai-safari",
    code: "PKG G",
    title: "Udaipur Jawai (Leopard Safari) Tour",
    duration: "Same Day or 2 Days / 1 Night",
    description: "Witness wild leopards roaming free in raw granite hills with 4x4 open jeep safaris and Jawai Dam bird watching.",
    placesCovered: ["Granite Leopard Hills", "Open 4x4 Jeep Safari", "Jawai Dam Crocodiles", "Rabari Village Culture"],
    suggestedCab: "Innova Crysta / Force Urbania",
    image: "/images/Jaisamand Lake (Dhebar Lake).webp"
  },
  {
    id: "pkg-customized-rajasthan",
    code: "PKG H",
    title: "Customized Rajasthan Multi-City Tour",
    duration: "Flexible (3 to 10 Days)",
    description: "Personalized multi-city itineraries spanning Udaipur, Jodhpur, Jaisalmer, Jaipur, Pushkar, and Bikaner.",
    placesCovered: ["Multi-City Customized Circuit", "Flexible Pickups & Drops", "Choice of Stays & Sightseeing"],
    suggestedCab: "Innova Crysta / Hycross / Force Urbania Luxury",
    image: "/images/Discover_background.png"
  },
  {
    id: "pkg-all-india-multistate",
    code: "PKG I",
    title: "All India & Multi State Tours",
    duration: "Flexible Itinerary",
    description: "Reliable outstation tour packages connecting Rajasthan with Gujarat, Delhi, Agra, MP, and destinations across India.",
    placesCovered: ["Udaipur to Gujarat Circuit", "Golden Triangle Routes", "Long-Distance Interstate Travel"],
    suggestedCab: "Force Tempo Traveller / Force Urbania / Innova Crysta",
    image: "/images/Discover Udaipur Background.webp"
  },
  {
    id: "pkg-jodhpur-jaisalmer",
    code: "PKG J",
    title: "Jodhpur- Jaisalmer Tour",
    duration: "4 to 5 Days",
    description: "The classic Royal Desert circuit: Blue City heritage and Golden City desert sand dunes with camel safari.",
    placesCovered: ["Mehrangarh Fort", "Jaswant Thada", "Jaisalmer Fort", "Sam Sand Dunes & Desert Camp"],
    suggestedCab: "Innova Crysta / Ertiga / Force Urbania",
    image: "/images/Kumbhalgarh Fort.webp"
  }
];

