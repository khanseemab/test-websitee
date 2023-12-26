import React from "react";
import "./Footer.css";
import brand from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* header 7 newletter */}

      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <img
                className="footer_brand"
                src={brand}
                alt="K2 E-Commerce Solutions"
              />
              <p>
                Our mission is to empower our clients to use the internet to its
                full potential by providing affordable, effective, custom design
                and marketing solutions.
                <br />
                <Link target="_blank" to={'https://twitter.com/k2_e_solutions'}>

                <FaTwitter className="social-icon" /></Link> &nbsp;
                <Link target="_blank"
                  to={
                    "https://www.instagram.com/k2e_solutions/"
                  }
                >
                <FaInstagram className="social-icon" /></Link> &nbsp;
                <Link target="_blank" to={'https://www.facebook.com/profile.php?id=100092475399808'}>
                <FaFacebook className="social-icon" /></Link> &nbsp;
                <Link target="_blank" to={'#'}>

                <FaLinkedinIn className="social-icon" /></Link>
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>{" "}
                </li>
                <li>
                  <Link to="/services">Services</Link>{" "}
                </li>
                <li>
                  <Link to="/pricing">Packages</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3> Links</h3>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>{" "}
                </li>
                <li>
                  <Link to="/">Team</Link>{" "}
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <li>
                  SR-4 Phase, 1, Transport Nagar, Chandrabani, Dehradun, Sewla
                  Khurd, Uttarakhand 248001
                </li>
                <li>01 354061391</li>
                <li>Helpdesk@k2ecommercesolution.com</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="hr_footer" />
        <div className="footer-end">
          <h6 className="text-center">
            Copyright @2023 | k2ecommercesolution{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Footer;
