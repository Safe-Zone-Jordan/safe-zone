import React from "react";
import PrefCard from "../components/homePage/PrefCard";
import Carousal from "../components/homePage/Carousal";
import CompanyMission from "../components/homePage/CompanyMission";
import PartnersHomePage from "./PartnersHomePage";
import Clients from "./Clients";

export default function HomePage() {
  return (
    <div>
      <Carousal />
      <CompanyMission />
      <PrefCard />
      <PartnersHomePage />
      <Clients class="section-bg" />
    </div>
  );
}
