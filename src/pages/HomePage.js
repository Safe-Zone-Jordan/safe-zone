import React from "react";
import PrefCard from "../components/homePage/PrefCard";
import Carousal from "../components/homePage/Carousal";
import CompanyMission from "../components/homePage/CompanyMission";

export default function HomePage() {
  return (
    <div>
      <Carousal />
      <CompanyMission />
      <PrefCard/>
    </div>
  );
}
