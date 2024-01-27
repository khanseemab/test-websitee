import React, { useState, useEffect } from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import { useNavigate,Link } from "react-router-dom";

import brand from "../../assets/logo.png";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../../firbase";

const AdminHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const navigate=useNavigate()

  useEffect(() => {
    
    onAuthStateChanged(auth,user=>{
      if(user){
console.log("hello",user)
      }else{
        navigate("/login")
      }
    })
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
          <Link to={"/admin-dashboard"}>
              <img
                src={brand}
                height={"57px"}
                className="logos p-1 ms-4"
                alt="K2 e-commerce Solutions"
              />
            </Link>
          </div>
          <Nav
            className="navbar col-md-6 offset-md-1"
            variant="underline"
            // defaultActiveKey="/home"
          >
            <Nav.Item>
              <Nav.Link className="nav_items_emp" as={Link} to="/admin-dashboard">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav_items_emp"
                as={Link}
                to="/client"
                // eventKey="client"
              >
                All Clients
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav_items_emp"
                as={Link}
                to="/clientform"
                // eventKey="link-2"
              >
                Tasks
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
            <h3 className="logout_user">
              username :
              <Link onClick={()=>signOut(auth)}>
                <span  className="logout_username"> Logout</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;



