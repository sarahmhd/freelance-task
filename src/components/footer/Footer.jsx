import "./footer.css";

import {
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import React from "react";
import googleImg from "../../assets/imgs/google-page-speed 1.png";
import logo from "../../assets/imgs/Logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer-col footer-col d-flex flex-column">
              <a href="#" className="logo">
                <img src={logo} />
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <div className="">
                <img src={googleImg} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-col footer-col">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 footer-col footer-col">
              <h4>Contact us</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <p>+923183561921</p>
            </div>
            <div className="col-md-6 col-lg-3 footer-col socials">
              <div className="social-links">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom d-flex justify-content-center align-items-center">
        <p className="m-0">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
