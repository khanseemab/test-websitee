import React, { useEffect } from "react";
import "./Contact.css";
import Header from "../../components/Header/AdminHeader";
import brand from "../../assets/logo.png";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider, TextField } from "@mui/material";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Map from "./Map";
import AdminHeader from "../../components/Header/AdminHeader";

const ContactPage = () => {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#fe4c1c",
  //     },
  //   },
  // });

  const theme = createTheme({
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#fe4c1c", // Change this to your desired label color
          },
        },
      },
      // MuiInputLabel: {
      //   styleOverrides: {
      //     root: {
      //       '& $notchedOutline': {
      //         borderColor: 'red', // Default outline color
      //       },
      //       '&:hover $notchedOutline': {
      //         borderColor: 'red', // Outline color on hover
      //       },
      //       '&.Mui-focused $notchedOutline': {
      //         borderColor: 'red', // Outline color on focus
      //       },
      //     },
      //   },
      // },
    },
  });

  return (
    <>
      <AdminHeader />

      <div className="container-fluid contact-page">
        <div className="row">
          <div  className="map_container ms-md-3 col-md-6">
            <Map />
          </div>
          <div className="details-container col-md-5 p-0 ms-md-5 mt-md-5">
            {/* <h2>We are here to help!</h2>
            
            <p>Phone: 01 354061391</p>
            <p>Email: Helpdesk@k2ecommercesolution.com</p>

            <div className="contact-form">
              
              
            </div> */}

            <div className="card_contact  ">
              <div className="imge">
                <div className="Usericon ">
                  <img
                    src={brand}
                    className="mt-1 ms-1"
                    alt="k2 E-commerce Solutions"
                    height={"51px"}
                  />
                </div>
                <p className="UserName">Phone: 01 354061391</p>
                <p className="Id">Email: Helpdesk@k2ecommercesolution.com</p>
              </div>

              <div className="Description">
                <form>
                  <ThemeProvider theme={theme}>
                    <TextField
                      // color="success"
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      className="contact_form-field"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      className="contact_form-field"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Subject"
                      variant="outlined"
                      className="contact_form-field"
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      className="contact_form-field"
                    />
                  </ThemeProvider>
                  <button type="submit" className="contact_submit-button">
                    Submit
                  </button>
                </form>
              </div>

              <div className="social-media">
                <ul className="d-flex mt-3 style-none">
                  <li>
                    <Link to={"https://twitter.com/k2_e_solutions"}>
                      <FaTwitter className="social-icon me-2" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.instagram.com/k2e_solutions/"}>
                      <FaInstagram className="social-icon me-2" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        "https://www.instagram.com/k2e_solutions/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                      }
                    >
                      <FaFacebook className="social-icon me-2" />
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <FaLinkedinIn className="social-icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};
export default ContactPage;
