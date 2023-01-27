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
// import Medical from "../pages/Medical";
import ServiceFullPage from "./ServiceFullPage";
import ScrollToTop from "../ScrollToTop";
import Partners from "../pages/Partners";
import Clients from "../pages/Clients";
import AboutUs from "../pages/AboutUs";

export default function AppRoutes() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/services/:name/*" element={<ServiceFullPage />} />
          {/* <Route path="/services/Medical/*" element={<Medical />} /> */}

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
