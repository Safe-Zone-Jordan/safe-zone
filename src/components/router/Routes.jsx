import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "../about/AboutUs";
import ContactUs from "../about/ContactUs";
import Footer from "../footer/Footer";
import HomePage from "../../pages/HomePage";
import NavBar from "../navBar/NavBar";
import Medical from "../../pages/Medical";
import LowCurrent from "../../pages/LowCurrent";
import ServiceFullPage from "../ServiceFullPage";
import ScrollToTop from "../../ScrollToTop";
import Partners from "../../pages/Partners";
import Clients from "../partners/Clients";

export default function AppRoutes() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/about-us/*" element={<AboutUs />} />
          <Route path="/contact-us/*" element={<ContactUs />} />
          <Route path="/Low-Current/:id" element={<ServiceFullPage  />} />
          <Route path="/Low-Current" element={<LowCurrent />} />
          <Route path="/Medical/*" element={<Medical />} />
          <Route path="/Partners/*" element={<Partners />} />
          <Route path="/clients/*" element={<Clients />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
