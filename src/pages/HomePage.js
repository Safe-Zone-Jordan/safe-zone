import React from "react";
import PrefCard from "../components/homePage/PrefCard";
import Carousal from "../components/homePage/Carousal";
import CompanyMission from "../components/homePage/CompanyMission";
import Partners from "./Partners";
import Clients from "./Clients";
import Carousal2 from "../components/homePage/Carousal2";

export default function HomePage() {
  return (
    <div>
      {/* <Carousal /> */}
      <Carousal2 />
      <CompanyMission />
      <PrefCard />
      <Partners />
      <Clients />
    </div>
  );
}
