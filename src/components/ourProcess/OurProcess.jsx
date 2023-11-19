import "./ourProcess.css";

import React from "react";
import achievementImg from "../../assets/imgs/Trophy_perspective_matte.png";

const OurProcess = () => {
  return (
    <div className="our-process">
      <div className="container">
        <div className="our-process-content">
          <h2 className="section-header text-center">
            How development <br />
            <span className="bold">through Alcaline works </span>{" "}
          </h2>
          <div className="processes">
            <div className="process card">
              <h3>
                <span className="gradient">#1</span> Assemble the right team
              </h3>
              <p>
                We handle all aspects of vetting and choosing the right team
                that you don't have the time, expertise, or desire to do.
              </p>
            </div>
            <div className="process card">
              <h3>
                <span className="gradient">#2</span> Sprint planning
              </h3>
              <p>
                Sprint roadmap is a collective planning effort. Team members
                collaborate to clarify items and ensure shared understanding.
              </p>
            </div>
            <div className="process card">
              <h3>
                <span className="gradient">#3</span> Tech architecture
              </h3>
              <p>
                We break monolithic apps into microservices. Decoupling the code
                allows teams to move faster and more independently
              </p>
            </div>
            <div className="process card">
              <h3>
                <span className="gradient">#4</span> Standups & weekly demos
              </h3>
              <p>
                Standups, weekly demos, and weekly reviews make sure everyone is
                on the same page and can raise their concerns.
              </p>
            </div>
            <div className="process card">
              <h3>
                <span className="gradient">#5</span> Code reviews
              </h3>
              <p>
                Code reviews before release help detect issues like memory
                leaks, file leaks, performance signs, and general bad smells
              </p>
            </div>
            <div className="process card">
              <h3>
                <span className="gradient">#6 </span>Iterative delivery
              </h3>
              <p>
                We divide the implementation process into several checkpoints
                rather than a single deadline.
              </p>
            </div>
            <div className="achievement-img position-absolute">
              <img src={achievementImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
