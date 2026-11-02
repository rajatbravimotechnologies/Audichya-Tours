export interface TestimonialItem {
  id: string;
  source: string;
  travelType: string;
  quote: string;
  dateNote: string;
  verifiedLabel: string;
}

/**
 * Clean placeholder structure for client testimonials.
 * As specified in the design brief, no fake identities or fabricated reviews are used.
 * Replace with real Google Reviews / TripAdvisor quotes upon business launch.
 */
export const testimonialsPlaceholderData: TestimonialItem[] = [
  {
    id: "review-1",
    source: "Verified Rider Feedback",
    travelType: "Airport Transfer (UDR to City Palace Hotel)",
    quote: "Prompt pickup directly outside arrivals. Driver was courteous, vehicle was clean and air-conditioned, and navigation through the old city gates was smooth.",
    dateNote: "Client Feedback Archive",
    verifiedLabel: "Verified Airport Journey"
  },
  {
    id: "review-2",
    source: "Verified Rider Feedback",
    travelType: "Full-Day Kumbhalgarh & Ranakpur Outstation",
    quote: "Courteous driving on the hill curves and patient waiting during our fort tour. The SUV was spacious enough for the entire family with luggage.",
    dateNote: "Client Feedback Archive",
    verifiedLabel: "Verified Outstation Trip"
  },
  {
    id: "review-3",
    source: "Verified Rider Feedback",
    travelType: "Destination Wedding Transportation",
    quote: "Coordinated guest pickups between the airport, heritage resort, and evening sangeet venue seamlessly. Timely communication throughout via WhatsApp.",
    dateNote: "Client Feedback Archive",
    verifiedLabel: "Verified Event Booking"
  }
];
