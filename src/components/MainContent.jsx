// First, install React Router if not already installed:
// Run in terminal: npm install react-router-dom
// or yarn add react-router-dom

// src/components/MainContent.jsx (new file for the landing page sections)
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AIServicesPage from "./AIServicesPage";
import PricingPage from "./PricingPage";
import HowWork from "./HowWork";
import Navbar from "./Navbar";
export default function MainContent() {
  return (
    <main className="pt-24">
      <Navbar/>
      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>
      <section id="services" className="scroll-mt-24">
        <ServicesSection />
      </section>
      <section id="ai-services" className="scroll-mt-24">
        <AIServicesPage />
      </section>
      <section id="how-it-works" className="scroll-mt-24">
        <HowWork />
      </section>
      <section id="pricing" className="scroll-mt-24">
        <PricingPage />
      </section>
    </main>
  );
}