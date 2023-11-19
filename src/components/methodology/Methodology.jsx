import "./methodology.css";

import React from "react";
import methodologyImg1 from "../../assets/imgs/methodology1.png";
import methodologyImg2 from "../../assets/imgs/methodology2.png";
import methodologyImg3 from "../../assets/imgs/methodology3.png";
import quoter1 from "../../assets/imgs/quoter1.png";
import quoter2 from "../../assets/imgs/quoter2.png";
import quoter3 from "../../assets/imgs/quoter3.png";

const Methodology = () => {
  return (
    <div className="methodology">
      <div className="container">
        <div className="methodology-content">
          <h2 className="section-header text-center">
            Way of building
            <br /> <span className="bold">Great Software </span>
          </h2>
          <div className="row section-row align-items-center">
            <div className="col-lg-6 row-text">
              <h3>Build the right team to scale</h3>
              <p>
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <p>
                Our <span className="gradient">delivery model</span> helps you
                cut costs and deliver within budget.
              </p>
              <div className="quote gradient">
                <q>
                  Simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules
                </q>
              </div>
              <div className="quoter d-flex align-items-center">
                <div className="quoter-img">
                  <img src={quoter1} alt="" />
                </div>
                <div className="quoter-info d-flex flex-column">
                  <h6 className="m-0">Jeewa markram</h6>
                  <span>CEO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 row-img">
              <img src={methodologyImg1} alt="" />
            </div>
          </div>
          <div className="row section-row align-items-center">
            <div className="col-lg-6 row-img">
              <img src={methodologyImg2} alt="" />
            </div>
            <div className="col-lg-6 row-text">
              <h3>Build the right team to scale</h3>
              <p>
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <p>
                Our <span className="gradient">delivery model</span> helps you
                cut costs and deliver within budget.
              </p>
              <div className="quote gradient">
                <q>
                  Simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules
                </q>
              </div>
              <div className="quoter d-flex align-items-center">
                <div className="quoter-img">
                  <img src={quoter2} alt="" />
                </div>
                <div className="quoter-info d-flex flex-column">
                  <h6 className="m-0">Jeewa markram</h6>
                  <span>CEO</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row section-row align-items-center">
            <div className="col-lg-6 row-text">
              <h3>Build the right team to scale</h3>
              <p>
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <p>
                Our <span className="gradient">delivery model</span> helps you
                cut costs and deliver within budget.
              </p>
              <div className="quote gradient">
                <q>
                  Simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules
                </q>
              </div>
              <div className="quoter d-flex align-items-center">
                <div className="quoter-img">
                  <img src={quoter3} alt="" />
                </div>
                <div className="quoter-info d-flex flex-column">
                  <h6 className="m-0">Jeewa markram</h6>
                  <span>CEO</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 row-img">
              <img src={methodologyImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
