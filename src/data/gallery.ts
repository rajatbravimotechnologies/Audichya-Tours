export interface GalleryTestimonial {
  id: string;
  name: string;
  location?: string;
  avatar?: string;
  rating: number;
  review: string;
  destination: string;
  dateNote: string;
  verified: boolean;
}

export interface GalleryVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: "travel-video";
  locationTag?: string;
}

export interface GalleryReel {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: "reel";
  locationTag?: string;
}

export const galleryTestimonials: GalleryTestimonial[] = [
  {
    id: "test-1",
    name: "Vikramaditya & Radhika Singhal",
    location: "New Delhi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Our full-day Udaipur heritage tour with Audichya Tours was absolutely sublime. The Innova Crysta was spotless, chilled, and our chauffeur knew the best photographic angles around Lake Pichola and Fateh Sagar. Unmatched hospitality!",
    destination: "Udaipur Heritage & Lake Circuit",
    dateNote: "October 2026",
    verified: true,
  },
  {
    id: "test-2",
    name: "Dr. Ananya & Rajesh Mehta",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Booking the Kumbhalgarh and Ranakpur day trip was effortlessly managed over WhatsApp. Driving through the curvy Aravalli hills was smooth, safe, and punctual. Couldn't have asked for a better travel experience in Rajasthan.",
    destination: "Kumbhalgarh Fort & Ranakpur Jain Temple",
    dateNote: "November 2026",
    verified: true,
  },
  {
    id: "test-3",
    name: "Siddharth & Priya Kulkarni",
    location: "Bangalore",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "We hired the Force Urbania 17-seater for our 14-member family gathering in Udaipur. The comfort, individual charging ports, and massive luggage space blew everyone away. Audichya Tours is truly the gold standard.",
    destination: "Family Royal Group Tour (Force Urbania)",
    dateNote: "September 2026",
    verified: true,
  },
  {
    id: "test-4",
    name: "Sunil & Meenakshi Joshi",
    location: "Ahmedabad",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Prompt airport pickup right at Maharana Pratap Airport arrival terminal. Driver waited patiently despite our flight delay and navigated the narrow old city gates directly to our boutique hotel without any fuss.",
    destination: "Udaipur Airport Transfer & City Cab",
    dateNote: "August 2026",
    verified: true,
  },
  {
    id: "test-5",
    name: "Rohan & Sneha Agarwal",
    location: "Pune",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Booked the Chittorgarh Fort excursion. The car was in pristine mechanical condition, chilled AC on high heat, and our driver provided wonderful recommendations for authentic Rajasthani Dal Baati Churma along the highway.",
    destination: "Chittorgarh Fort Royal Tour",
    dateNote: "October 2026",
    verified: true,
  },
  {
    id: "test-6",
    name: "Gaurav Sen & Family",
    location: "Kolkata",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review:
      "Three consecutive days of private cab service across Udaipur, Sajjangarh Monsoon Palace, and Nathdwara Shrinathji temple. Transparent pricing, polite drivers, and 100% reliable. Highly recommend to everyone!",
    destination: "Multi-Day Rajasthan Excursion",
    dateNote: "November 2026",
    verified: true,
  },
];

export const travelVideos: GalleryVideo[] = [
  {
    id: "video-1",
    title: "Cinematic Udaipur: City of Lakes & Royal Ghats",
    description: "Experience the magic of Udaipur's waterfront palaces, sunset ghats, and royal luxury cab journeys.",
    thumbnail: "/images/Lake Pichola.webp",
    videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    duration: "3:40",
    category: "travel-video",
    locationTag: "Lake Pichola, Udaipur",
  },
  {
    id: "video-2",
    title: "Aravalli Mountain Drive: Kumbhalgarh to Ranakpur",
    description: "Take in the breathtaking curves and lush greenery of the Aravalli hills in our luxury chauffeur-driven fleet.",
    thumbnail: "/images/Kumbhalgarh Fort.webp",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    duration: "4:15",
    category: "travel-video",
    locationTag: "Kumbhalgarh Fort Circuit",
  },
  {
    id: "video-3",
    title: "The Force Urbania & Innova Hycross Showcase",
    description: "A detailed walkthrough of our luxury executive vans and premium hybrid SUVs built for group comfort.",
    thumbnail: "/images/Urbania-1.webp",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    duration: "2:50",
    category: "travel-video",
    locationTag: "Audichya Fleet Showcase",
  },
  {
    id: "video-4",
    title: "Chittorgarh Fort: The Legend of Mewar Royalty",
    description: "A scenic road trip from Udaipur across historic Mewar landscapes, majestic bastions, and royal Vijay Stambh.",
    thumbnail: "/images/Chittorgarh Fort.webp",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
    duration: "3:10",
    category: "travel-video",
    locationTag: "Chittorgarh Excursion",
  },
];

export const reelsAndShorts: GalleryReel[] = [
  {
    id: "reel-1",
    title: "Golden Hour at Lake Pichola ✨",
    description: "Witnessing sunset over the Taj Lake Palace and Jag Mandir from our private lakeside cab drop.",
    thumbnail: "/images/Udaipur Sunset by the Lake.png",
    videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    duration: "0:45",
    category: "reel",
    locationTag: "Ambrai Ghat, Udaipur",
  },
  {
    id: "reel-2",
    title: "Monsoon Drive to Sajjangarh Palace 🌧️",
    description: "Cloud-kissed mountain winding roads leading to the historic Monsoon Palace high above the lakes.",
    thumbnail: "/images/Sajjangarh.webp",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    duration: "0:58",
    category: "reel",
    locationTag: "Sajjangarh Monsoon Palace",
  },
  {
    id: "reel-3",
    title: "Inside The Force Urbania Luxury Cabin 🚐",
    description: "Reclining leather bucket seats, ambient roof lighting, and chilled multi-zone air vents for VIP groups.",
    thumbnail: "/images/Urbania-2.webp",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    duration: "0:35",
    category: "reel",
    locationTag: "Executive Fleet Tour",
  },
  {
    id: "reel-4",
    title: "Night View of Bagore Ki Haveli & Gangaur Ghat 🌙",
    description: "Traditional Dharohar folk performances and illuminated palaces in the heart of old Udaipur.",
    thumbnail: "/images/Bagore Ki Haveli.webp",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso",
    duration: "0:42",
    category: "reel",
    locationTag: "Gangaur Ghat, Old City",
  },
  {
    id: "reel-5",
    title: "Scenic Road to Mount Abu Hill Station 🌄",
    description: "Escaping into the misty pine forests and Nakki Lake aboard our smooth highway cruisers.",
    thumbnail: "/images/Mount Abu.webp",
    videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    duration: "0:50",
    category: "reel",
    locationTag: "Mount Abu, Rajasthan",
  },
  {
    id: "reel-6",
    title: "Badi Lake (Bahubali Hills) Sunrise Trek 🌅",
    description: "Early morning calm waters and cliffside viewpoints just 25 minutes from central Udaipur.",
    thumbnail: "/images/Badi Lake (Bahubali Hills).webp",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    duration: "0:38",
    category: "reel",
    locationTag: "Badi Lake, Udaipur",
  },
];

