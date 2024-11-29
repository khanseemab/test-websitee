import React, { useState, useEffect } from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import brand from "../../assets/1144760.png";

import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../../firbase";
import { VerifiedUserOutlined } from "@mui/icons-material";

const EmpHeader = () => {
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
      <div
        className={`container-fluid m-0 sticky-top${
          isScrolled ? " bg-True" : " bg-False"
        }`}
      >
        <div className="row">
          <div className="col-md-2  mt-2">
          <Link to={"/emp-dashboard"}>
              {/* <VerifiedUserOutlined /> */}
            </Link>
          </div>
          <Nav
            className="navbar col-md-6 offset-md-1"
            variant="underline"
            // defaultActiveKey="/home"
          >
            <Nav.Item>
              <Nav.Link className="nav_items_emp" as={Link} to="/emp-dashboard">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav_items_emp"
                as={Link}
                to="/emp-dashboard"
                // eventKey="client"
              >
                All Products
              </Nav.Link>
            </Nav.Item>
           

            <Nav.Item>
              <Nav.Link
                className="nav_items_emp"
                as={Link}
                to="/contact-emp"
                // eventKey="link-2"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="col-md-2 m-auto ">
            <h3 className="logout_user text-white">
              username :
              <Link onClick={()=>signOut(auth)}>
                <span className="logout_username"> Logout</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpHeader;



