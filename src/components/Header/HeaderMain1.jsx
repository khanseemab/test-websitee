










// import React, { useState, useEffect } from "react";
// import "./HeaderMain.css";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown, Container,Dropdown } from "react-bootstrap";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/system";

// import brand from "../../assets/logo.png";

// const CustomButton = styled(Button)({
//   border: "1px solid #fe4c1c",
//   color: "white",
//   "&:hover": {
//     color: "#fe4c1c",
//     border: "1px solid white",
//   },
// });

// const LightToggleButton = styled(Navbar.Toggle)({
//   backgroundColor: "#fe4c1c", 
//   color: "#fe4c1c", 
//     backgroundColor: "#fe4c1c", 
//     color: "white", 
//   },
//   "::after": {
//     background: "#fe4c1c", 
//   },
// });

// const LightDropdown = styled(NavDropdown)({
//   "& .nav-link": {
//     color: "white", 
//   },
//    "&:hover": {
//     color: "#fe4c1c", 
//   },
//   "::after": {
//     color: "#ffffff",
//   },
// });

// const NavigationBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <Navbar
//         expand="lg"
//         className={ ` sticky-top${isScrolled ? " bg-True" : " bg-False"}`}
//       >
//         <Container fluid>
//           <Navbar.Brand as={Link} to="/">
//             <img
//               src={brand}
//               height="57px"
//               className="logos p-1 ms-4"
//               alt="K2 e-commerce Solutions"
//             />
//           </Navbar.Brand>
//           <LightToggleButton aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav ">
//                     <Nav
//             className="navbar offset-2  col-md-6"
//             variant="underline"
            
//           >
//             <Nav.Item>
//               <Nav.Link
//                 className="nav_items_main"
//                 as={Link}
//                 to="/"
//               >
//                 Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Dropdown>
//                 <Dropdown.Toggle variant="none" className="nav_items_main">
//                   Services
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services"
//                     className="nav_items_dropdown"
//                   >
//                     All Services
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services/catalogue-services"
//                     className="nav_items_dropdown"
//                   >
//                     Catalogue Services
//                   </Dropdown.Item>{" "}
//                   <Dropdown.Item
//                     as={Link}
//                     to="#"
//                     className="nav_items_dropdown"
//                   >
//                     Complete Account Management{" "}
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services/web-dev"
//                     className="nav_items_dropdown"
//                   >
//                     Web Development
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services/seo"
//                     className="nav_items_dropdown"
//                   >
//                     Search Engine Optimisation
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services/smo"
//                     className="nav_items_dropdown">
//                     Social Media Optimisation
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services/sem"
//                     className="nav_items_dropdown"
//                   >
//                     Search Engine Marketing
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services/digital-marketing"
//                     className="nav_items_dropdown"
//                   >
//                     Digital Marketing
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="#"
//                     className="nav_items_dropdown"
//                   >
//                     Courier Services
//                   </Dropdown.Item>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/services/pricing"
//                     className="nav_items_dropdown"
//                   >
//                     Packages
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 className="nav_items_main"
//                 as={Link}
//                 to="/about"
//                 // eventKey="about"
//               >
//                 About Us
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 className="nav_items_main"
//                 as={Link}
//                 to="https://medium.com/@K2-Ecommerce-Solution"
//                 // eventKey="blog"
//               >
//                 Blogs
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link
//                 className="nav_items_main"
//                 as={Link}
//                 to="/contact"
//                 // eventKey="contact"
//               >
//                 Contact Us
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//             <div className="offset-2 col-md-2 mt-3">
//              <CustomButton variant="outlined" className="emp_login_btn p-0">
//                <Dropdown>
//                  <Dropdown.Toggle variant="none" className="nav_items_main">
//                    Internal Links
//                  </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item
//                     as={Link}
//                     to="/login"
//               className="nav_items_dropdown"
//                   >
//                     Employee Login
//                   </Dropdown.Item>{" "}
//                   <Dropdown.Item
//                     as={Link}
//                     to="https://docs.google.com/forms/d/e/1FAIpQLScBFBIH5YglsInxE1HpV1eCngwXKkZvAJyY7opxzrQLxgDN1w/viewform"
//                     className="nav_items_dropdown"
//                   >
//                     Interview Form{" "}
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </CustomButton>
//           </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavigationBar;
