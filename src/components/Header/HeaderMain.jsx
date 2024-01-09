import React, { useState, useEffect } from "react";
import "./HeaderMain1.css";
import "./HeaderMain.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Dropdown } from "react-bootstrap";
import Button from "@mui/material/Button";
import brand from "../../assets/logo.png";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  border: "1px solid #fe4c1c",
  color: "white",
  "&:hover": {
    color: "#fe4c1c",
    border: "1px solid white",
  },
});
const LightToggleButton = styled(Navbar.Toggle)({
  backgroundColor: "#fe4c1c", // White background
  color: "#fe4c1c", // Black color for the lines
  "&:hover": {
    backgroundColor: "#fe4c1c", // Light color on hover
    color: "white", // Black color for the lines on hover
  },
  "::after": {
    background: "#fe4c1c", // Black color for the lines
  },
});

const LightDropdown = styled(NavDropdown)({
  "& .nav-link": {
    color: "white",
  },
  "&:hover": {
    color: "#fe4c1c",
  },
  "::after": {
    color: "#ffffff",
  },
});

const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={` sticky-top${isScrolled ? " bg-True" : " bg-False"}`}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="col-md-1">
            <img
              src={brand}
              height="57px"
              className="main_logo p-0 ms-4 "
              alt="K2 e-commerce Solutions"
            />
          </Navbar.Brand>
          <LightToggleButton aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="offset-md-1 col-md-8">
              <nav
                id="navigation"
                expand="lg"
                className="site-navigation "
                role="navigation"
              >
                <ul className="menu">
                  <li className="menu-item">
                    <Link className="nav_items_main" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="#" className="nav_items_main" to="#">
                      Account Management
                    </Link>
                    <ul className="dropdown">
                      <li className="menu-item sub-menu">
                        <Link to="/flipkart-account-management">
                          Flipkart Account Management
                        </Link>
                      </li>
                      <li className="menu-item sub-menu">
                        <Link href="#">Amazon Account Management</Link>
                      </li>
                      <li className="menu-item sub-menu">
                        <Link href="#">Etsy Account Management</Link>
                      </li>
                      <li className="menu-item sub-menu">
                        <Link href="#">Meesho Account Management</Link>
                      </li>
                      <li className="menu-item sub-menu">
                        <Link href="#">Alibaba Account Management</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/about" className="nav_items_main">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="nav_items_main">
                      Services
                    </Link>
                    <ul>
                    <li>
                        <Link to="/services"> All Services</Link>
                      </li>
                      <li>
                        <Link to="/services/catalogue-services"> Catalogue Services</Link>
                      </li>
                      <li>
                        <Link to="/services/web-dev">Web Development</Link>
                      </li>{" "}
                      <li>
                        <Link to="/services/seo"> Search Engine Optimisation</Link>
                      </li>{" "}
                      <li>
                        <Link to="/services/smo"> Social Media Optimisation</Link>
                      </li>{" "}
                      <li>
                        <Link to="/services/sem"> Search Engine Marketing</Link>
                      </li>
                      <li>
                        <Link to="/services/digital-marketing"> Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="#"> Courier Services</Link>
                      </li>
                      <li>
                        <Link to="/services/packages"> Packages</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link
                      to="https://medium.com/@K2-Ecommerce-Solution"
                      className="nav_items_main"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="#" className="nav_items_main">
                      Payments
                    </Link>
                    <ul className="dropdown">
                      <li className="menu-item sub-menu">
                        <Link to="/savings-account">Savings Account</Link>
                      </li>
                      <li className="menu-item sub-menu">
                        <Link to="/current-account">Current Account</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact" className="nav_items_main">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </Nav>
            <div className="offset-1 col-md-2 mt-0">
              <CustomButton variant="outlined" className="emp_login_btn p-0">
                <Dropdown>
                  <Dropdown.Toggle variant="none" className="nav_items_main">
                    Internal Links
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/login"
                      className="nav_items_dropdown"
                    >
                      Employee Login
                    </Dropdown.Item>{" "}
                    <Dropdown.Item
                      as={Link}
                      to="https://docs.google.com/forms/d/e/1FAIpQLScBFBIH5YglsInxE1HpV1eCngwXKkZvAJyY7opxzrQLxgDN1w/viewform"
                      className="nav_items_dropdown"
                    >
                      Interview Form{" "}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </CustomButton>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderMain;
