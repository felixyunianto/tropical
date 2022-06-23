import React from "react";
import { Consultation, Hero, Navbar, ProductCarousel } from "../components";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Consultation/>
      {/* <Advantage /> */}
      <ProductCarousel />
      {/* <BuyFlow /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
