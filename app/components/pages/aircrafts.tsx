import React from "react";
import AircraftPreview, { AircraftDetails } from "../ui/AircraftPreview";

const Aircrafts = () => {
  return (
    <div className="h-screen px-11 gap-6 pt-6 flex">
      <AircraftPreview />
      <AircraftDetails />
    </div>
  );
};

export default Aircrafts;
