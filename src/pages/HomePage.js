import React from "react";
import PrefCard from "../components/homePage/PrefCard";
import Carousal from "../components/homePage/Carousal";
import CompanyMission from "../components/homePage/CompanyMission";
import Partners from "./Partners";
import Clients from "./Clients";

export default function HomePage() {
  return (
    <div>
      <Carousal />
      <CompanyMission />
      <PrefCard />
      <Partners />
      <Clients />
    </div>
  );
}
