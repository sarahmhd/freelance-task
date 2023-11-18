import React from "react";
import "./services.css";
import Carousel from "../carousel/Carousel";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="services_content position-relative">
          <h2 className="section_heading">Services we offer</h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Services;
