import React, { useState, useEffect } from "react";
import "./HeaderMain.css";
import { Link } from "react-router-dom";
import { Nav, Dropdown } from "react-bootstrap";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import brand from "../../assets/logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const CustomButton = styled(Button)({
    border: "1px solid #fe4c1c",
    color: "white",
    "&:hover": {
      color: "#fe4c1c",
      border: "1px solid white",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <marquee>15% discount on all the Packages</marquee> */}
      <div
        className={`container-fluid m-0 sticky-top${
          isScrolled ? " bg-True" : " bg-False"
        }`}
      >
        <div className="row">
          <div className="col-md-2  mt-2">
            <Link to={"/"}>
              <img
                src={brand}
                height={"57px"}
                className="logos p-1 ms-4"
                alt="K2 e-commerce Solutions"
              />
            </Link>
          </div>
          <Nav
            className="navbar  col-md-8"
            variant="underline"
            // defaultActiveKey="/home"
          >
            <Nav.Item>
              <Nav.Link
                className="nav_items_main"
                as={Link}
                to="/"
                // eventKey="home"
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle variant="none" className="nav_items_main">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to="/services"
                    className="nav_items_dropdown"
                  >
                    All Services
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/catalogue-services" className="nav_items_dropdown">
                    Catalogue Services
                  </Dropdown.Item>{" "}
                  <Dropdown.Item as={Link} to="#" className="nav_items_dropdown">
                    Complete Account Management{" "}
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/web-dev" className="nav_items_dropdown">
                    Web Development
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/seo" className="nav_items_dropdown">
                    Search Engine Optimisation
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/smo" className="nav_items_dropdown">
                    Social Media Optimisation
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/sem" className="nav_items_dropdown">
                    Search Engine Marketing
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/digital-marketing" className="nav_items_dropdown">
                    Digital Marketing
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#" className="nav_items_dropdown">
                    Courier Services
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/pricing" className="nav_items_dropdown">
                    Packages
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="nav_items_main"
                as={Link}
                to="/about"
                // eventKey="about"
              >
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav_items_main"
                as={Link}
                to="https://medium.com/@K2-Ecommerce-Solution"
                // eventKey="blog"
              >
                Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav_items_main"
                as={Link}
                to="/contact"
                // eventKey="contact"
              >
                Contact Us
              </Nav.Link>
            </Nav.Item>
         
          </Nav>
          <div className="col-md-2 mt-3">
            <Link to="/login">
              <CustomButton variant="outlined" className="emp_login_btn">
                Employee
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
