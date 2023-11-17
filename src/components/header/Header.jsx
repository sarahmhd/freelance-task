import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/imgs/Logo.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} />
        </Link>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <HashLink
                className="nav-link active"
                smooth
                to="/about-us/#section1"
              >
                About us
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link active"
                smooth
                to="/about-us/#section1"
              >
                Services
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link active"
                smooth
                to="/about-us/#section1"
              >
                Case Studies
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link active"
                smooth
                to="/about-us/#section1"
              >
                Blog
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link active"
                smooth
                to="/about-us/#section1"
              >
                How it Works
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link active"
                smooth
                to="/about-us/#section1"
              >
                Hire
              </HashLink>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li> */}
          </ul>
          <button className={`btn ${styles.contact_btn}`}>Contact us</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
