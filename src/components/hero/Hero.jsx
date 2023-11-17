import React from "react";
import styles from "./hero.module.css";
import hero from "../../assets/imgs/Hero.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`container`}>
        <div className={`row align-items-center ${styles.hero_content}`}>
          <div className={`col-lg-6 ${styles.hero_text} `}>
            <h1>
              Great{" "}
              <span className={styles.gradient}>
                Product is <br />{" "}
              </span>
              <span className={styles.bold}>
                built by great
                <span className={styles.gradient}> teams</span>
              </span>
            </h1>
            <p>
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
            <button className={`btn ${styles.get_started}`}>
              Let’s get started!
            </button>
          </div>
          <div className={`col-lg-6`}>
            <img src={hero} alt="hero image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
