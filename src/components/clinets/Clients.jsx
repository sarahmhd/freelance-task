import "./clients.css";

import LogosCarousel from "../logosCarousel/LogosCarousel";
import React from "react";

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients-section-top">
        <div className="container">
          <h2 className="section-header">
            Meet the People
            <br /> <span className="bold">We are Working With </span>
          </h2>
        </div>
      </div>
      <LogosCarousel />
    </div>
  );
};

export default Clients;
