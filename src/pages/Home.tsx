// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroFilters from "../components/HeroFilters";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedProperties from "../components/FeaturedProperties";
import StartJourney from "../components/StartJourney";
import AboutSection from "../components/AboutSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BestPropertiesForSale from "../components/BestPropertiesForSale";
import BestPropertiesForRent from "../components/BestPropertiesForRent";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Filters */}
      <section>
        <HeroFilters />
      </section>

      {/* Buy Section */}
      <section id="buy">
        <BestPropertiesForSale navigate={navigate} />
      </section>

      {/* Rent Section */}
      <section id="rent">
        <BestPropertiesForRent navigate={navigate} />
      </section>

      {/* Sell Section */}
      <section id="sell">
        <FeaturedProperties />
      </section>

      {/* About Us Section */}
      <section id="about">
        <WhatWeDo />
        <StartJourney />
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Newsletter />
        <Footer />
      </section>
    </div>
  );
}
