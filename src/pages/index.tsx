import React from "react";
import { Element } from "react-scroll";
import {
  About,
  Consultation,
  Footer,
  Gallery,
  Hero,
  Navbar,
  ProductCarousel,
  Testimonial,
} from "../components";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Element name="#hero">
        <Hero />
      </Element>

      <Element name="#konsultasi">
        <Consultation />
      </Element>

      <Element name="#produk">
        <ProductCarousel />
      </Element>

      <Element name="#tentang-kami">
        <About />
      </Element>

      <Element name="#galeri-kami">
        <Gallery />
      </Element>

      <Element name="#testimoni">
        <Testimonial />
      </Element>

      <Footer />
    </>
  );
};

export default LandingPage;
