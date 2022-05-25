import React from "react";
import { Advantage, BuyFlow, Footer, Hero, Navbar, ProductCarousel } from "../components";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Advantage />
      <ProductCarousel />
      <BuyFlow />
      <Footer />
    </div>
  );
};

export default LandingPage;
