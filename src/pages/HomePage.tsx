import React from "react";
import { useNavigate } from "react-router-dom";
import { CinematicHero } from "../components/sections/CinematicHero";
import { TrustBar } from "../components/sections/TrustBar";
import { FeaturedFleet } from "../components/sections/FeaturedFleet";
import { FeaturedDestinations } from "../components/sections/FeaturedDestinations";
import { FeaturedServices } from "../components/sections/FeaturedServices";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Process } from "../components/sections/Process";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";

interface HomePageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F7FAFC]">
      {/* 1. Cinematic Hero */}
      <CinematicHero
        onOpenBooking={() => onOpenBooking()}
        onExploreFleetClick={() => navigate("/tour-packages")}
      />

      {/* 2. Key Stats & Trust Metrics */}
      <TrustBar />

      {/* 3. Featured Fleet Showcase */}
      <FeaturedFleet
        onSelectVehicle={(category) => onOpenBooking(category)}
        onExploreFullFleet={() => navigate("/fleet")}
      />

      {/* 4. Explore Udaipur Destination Showcase */}
      <FeaturedDestinations
        onSelectDestination={(destName) => onOpenBooking(undefined, destName)}
        onExploreAllDestinations={() => navigate("/explore")}
      />

      {/* 5. Our Services Preview */}
      <FeaturedServices
        onSelectService={(serviceTitle) => onOpenBooking(undefined, serviceTitle)}
        onExploreAllServices={() => navigate("/taxi-services")}
      />

      {/* 6. Why Choose Audichya Tours */}
      <WhyChooseUs />

      {/* 7. How It Works (3-Step Booking) */}
      <Process />

      {/* 8. Final Booking CTA */}
      <CinematicFinalCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
