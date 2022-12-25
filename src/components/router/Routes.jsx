import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "../about/AboutUs";
import ContactUs from "../about/ContactUs";
import Footer from "../footer/Footer";
import HomePage from "../../pages/HomePage";
import NavBar from "../navBar/NavBar";
import Medical from "../../pages/Medical";
import LowCurrent from "../../pages/LowCurrent";

export default function AppRoutes() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about-us/*" element={<AboutUs />} />
          <Route path="/contact-us/*" element={<ContactUs />} />
          <Route path="/Low-Current/*" element={<LowCurrent />} />
          <Route path="/Medical/*" element={<Medical />} />
          <Route path="/Partners/*" element={<ContactUs />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
