import React from "react";
import PrefCard from "../components/homePage/body/PrefCard";
import Carousal from "../components/homePage/hero/Carousal";
import CompanyMission from "../components/homePage/hero/CompanyMission";
import Partners from "./Partners";


export default function HomePage() {
  return (
    <div>
      <Carousal />
      <CompanyMission />
      <PrefCard/>
      <Partners />
    </div>
  );
}
