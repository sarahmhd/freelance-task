import "./header.css";

import React, { useState } from "react";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo.svg";

const Header = () => {
  const [lang, setLang] = useState("");
  const [direction, setDirection] = useState("");

  const changeDirection = (e) => {
    setLang(e.target.value);
    document.documentElement.dir = lang === "ar" ? "ltr" : "rtl";
    console.log(document.documentElement.dir, e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler toggler"
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
              <HashLink className="nav-link active" smooth to="#about-us">
                About us
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link active" smooth to="#services">
                Services
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link active" smooth to="#case-studies">
                Case Studies
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link active" smooth to="#blog">
                Blog
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link active" smooth to="#how-works">
                How it Works
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link active" smooth to="#hire">
                Hire
              </HashLink>
            </li>
          </ul>
          <button className="btn contact_btn">Contact us</button>
          <select name="lang" id="lang" onChange={changeDirection}>
            <option value="en">En</option>
            <option value="ar">ar</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
