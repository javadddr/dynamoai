// src/App.jsx (updated with routing)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent"; // New
import Footer from "./components/Footer";
import LegalNotice from "./components/LegalNotice";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Impressum from "./components/Impressum";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}