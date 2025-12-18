import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import LegalNotice from "./components/LegalNotice";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Impressum from "./components/Impressum";
import CookieConsent from "./components/CookieConsent"; // <-- Add this

export default function App() {
  return (
    <div className="min-h-screen bg-black relative"> {/* relative for positioning */}
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

        {/* Cookie Consent Banner - shown on all pages */}
        <CookieConsent />
      </Router>
    </div>
  );
}