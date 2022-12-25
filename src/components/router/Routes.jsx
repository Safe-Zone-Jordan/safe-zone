import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "../about/AboutUs";
import ContactUs from "../about/ContactUs";
import Footer from "../footer/Footer";
import HomePage from "../homePage/HomePage";
import NavBar from "../navBar/NavBar";

export default function AppRoutes() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about-us/*" element={<AboutUs />} />
          <Route path="/contact-us/*" element={<ContactUs />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
