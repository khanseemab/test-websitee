import React, { useState, useEffect } from "react";
import "./HeaderMain.css";
import { Link } from "react-router-dom";
import { Nav, Dropdown } from "react-bootstrap";

import brand from "../../assets/logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            className="navbar offset-1  col-md-6"
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
                  <Dropdown.Item as={Link} to="/services/catalogue-services">
                    Catalogue Services
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/web-dev">
                    Web Development
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/seo">
                    Search Engine Optimisation
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/smo">
                    Social Media Optimisation
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/sem">
                    Search Engine Marketing
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/digital-marketing">
                    Digital Marketing
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#">
                    Courier Services
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/pricing">
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
            <Nav.Item>
              <Nav.Link
                className="nav_items_main"
                as={Link}
                to="/login"
                // eventKey="employee"
              >
                Employee
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
