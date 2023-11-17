import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Methodology from "../components/methodology/Methodology";
import AboutUs from "./../components/aboutUs/AboutUs";
import Clients from "./../components/clinets/Clients";
import Testimonials from "./../components/testimonials/Testimonials";
import DevelopmentApproach from "./../components/developmentApproach/DevelopmentApproach";
import OurProcess from "./../components/ourProcess/OurProcess";
import Hiring from "./../components/hiring/Hiring";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Clients />
      <Testimonials />
      <Methodology />
      <DevelopmentApproach />
      <OurProcess />
      <Hiring />
      <Footer />
    </>
  );
};

export default Home;
