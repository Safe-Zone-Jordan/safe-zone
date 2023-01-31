import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import NavBar from "./NavBar";
import ScrollToTop from "../ScrollToTop";
import Partners from "../pages/Partners";
import Clients from "../pages/Clients";
import AboutUs from "../pages/AboutUs";
import ScrollBut from "./homePage/ScrollBut";
import AudioVideoSystems from "./solutions/AudioVideoSystems";
import AutomaticEntrance from "./solutions/AutomaticEntrance";
import OtherELV from "./solutions/ELVSolutions";
import FireDetection from "./solutions/FireDetection";
import HomeAutomation from "./solutions/HomeAutomation";
import PublicAddress from "./solutions/PublicAddress";
import SecuritySystem from "./solutions/SecuritySystem";
import NotFound from "./solutions/notFound/NotFound";

export default function AppRoutes() {
  return (
    <div className="App">
      <Router>
        <ScrollBut />
        <NavBar />
        <ScrollToTop />
        <Routes>

          <Route path="/services/Audio-Video-Systems/*" element={<AudioVideoSystems />} />
          <Route path="/services/Public-Address-&-Voice-Evacuation-Systems/*" element={<PublicAddress />} />
          <Route path="/services/Fire-Detection-Alarm-System/*" element={<FireDetection />} />
          <Route path="/services/Security-System/*" element={<SecuritySystem />} />
          <Route path="/services/Home-Automation-&-Smart-Homes/*" element={<HomeAutomation />} />
          <Route path="/services/Automatic-Entrance-Solutions/*" element={<AutomaticEntrance />} />
          <Route path="/services/Other-ELV-Solutions/*" element={<OtherELV />} />

          <Route path="/services/*" element={<NotFound />} />

          <Route path="/Partners" element={<Partners />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/Partners/*" element={<Navigate to="/Partners" />} />
          <Route path="/clients/*" element={<Navigate to="/clients" />} />
          <Route path="/about-us/*" element={<Navigate to="/about-us" />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
