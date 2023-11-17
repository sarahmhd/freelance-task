import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/imgs/Logo.svg";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src={logo} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <HashLink class="nav-link active" smooth to="/about-us/#section1">
                About us
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link active" smooth to="/about-us/#section1">
                Services
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link active" smooth to="/about-us/#section1">
                Case Studies
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link active" smooth to="/about-us/#section1">
                Blog
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link active" smooth to="/about-us/#section1">
                How it Works
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link active" smooth to="/about-us/#section1">
                Hire
              </HashLink>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li> */}
          </ul>
          <button class="btn">Contact us</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
