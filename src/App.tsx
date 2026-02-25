/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import PropertiesPage from "./pages/PropertiesPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import RealEstateSales from "./pages/RealEstateSales";
import PropertyDevelopment from "./pages/PropertyDevelopment";
import PropertyManagement from "./pages/PropertyManagement";
import BuildingConstruction from "./pages/BuildingConstruction";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/real-estate-sales" element={<RealEstateSales />} />
            <Route path="/services/property-development" element={<PropertyDevelopment />} />
            <Route path="/services/property-management" element={<PropertyManagement />} />
            <Route path="/services/building-construction" element={<BuildingConstruction />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
