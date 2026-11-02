import React from "react";
import { WeddingTransportation } from "../components/sections/WeddingTransportation";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";

interface WeddingsPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const WeddingsPage: React.FC<WeddingsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-[#FFF9F0]">
      <WeddingTransportation
        onOpenBooking={() => {
          onOpenBooking("Premium", "Palace Wedding Venue / Resort");
        }}
      />

      <CinematicFinalCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
