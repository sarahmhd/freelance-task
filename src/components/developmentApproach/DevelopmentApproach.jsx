import "./developmentApproach.css";

import React from "react";
import icon1 from "../../assets/imgs/Rocket_perspective.png";
import icon2 from "../../assets/imgs/Code_perspective.png";
import icon3 from "../../assets/imgs/Heart_rate_perspective.png";
import icon4 from "../../assets/imgs/Shield_perspective.png";
import icon5 from "../../assets/imgs/Success_perspective.png";
import icon6 from "../../assets/imgs/Padlock_perspective.png";

const DevelopmentApproach = () => {
  return (
    <div className="developmentApproach">
      <div className="container">
        <div className="developmentApproach-content">
          <h2 className="section-header text-center">
            Our design and <br />
            <span className="bold">development approach</span>{" "}
          </h2>
          <div className="row cards">
            <div className="col-lg-6">
              <div className="card d-flex">
                <div className="img">
                  <img src={icon1} alt="" />
                </div>
                <div className="card-text">
                  <h4>UX Driven Engineering</h4>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="img">
                  <img src={icon2} alt="" />
                </div>
                <div className="card-text">
                  <h4>UX Driven Engineering</h4>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="img">
                  <img src={icon3} alt="" />
                </div>
                <div className="card-text">
                  <h4>UX Driven Engineering</h4>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="img">
                  <img src={icon4} alt="" />
                </div>
                <div className="card-text">
                  <h4>UX Driven Engineering</h4>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="img">
                  <img src={icon5} alt="" />
                </div>
                <div className="card-text">
                  <h4>UX Driven Engineering</h4>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="img">
                  <img src={icon6} alt="" />
                </div>
                <div className="card-text">
                  <h4>UX Driven Engineering</h4>
                  <p>
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentApproach;
