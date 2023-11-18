import "./about.css";

import { FaArrowRight } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import React from "react";
import imgVid from "../../assets/imgs/about-vid.png";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content row align-items-center">
          <div className="about-text col-lg-6">
            <h2 className="section-header">
              Leading companies trust us <br />
              <span className="bold">to develop software</span>{" "}
            </h2>
            <p>
              We <span className="gradient">add development capacity</span> to
              tech teams. Our value isn’t limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>
            <a
              href="#"
              className="text-decoration-none d-flex justify-content-center align-items-center"
            >
              See more Informations <FaArrowRight />
            </a>
          </div>
          <div className="about-video col-lg-6 position-relative">
            <img src={imgVid} alt="" />
            <div className="video-icon position-absolute d-flex justify-content-center align-items-center">
              <FaCirclePlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
