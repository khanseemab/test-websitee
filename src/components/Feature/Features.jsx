import React from "react";
import "./Features.css";
import library from "../../assets/library-catalog.png";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <>
      <section className="container">
        <div className="row features mt-3 mb-3 m-auto">
          <div className=" feature-card col-md-4">
            <div className="feature-container ">
              <img
                src="https://techvify-software.com/wp-content/uploads/2023/09/account-management-1536x768.webp"
                alt="Complete Account Management"
              />
            </div>
            <h2 className="h2">Complete Account Management</h2>
            <p className="p">
              Effortless, comprehensive account management services tailored to
              your needs, from setup and transactions to security and
              optimization.
            </p>
          </div>
          <div className="feature-card col-md-4">
            <div className="feature-container col-md-12">
              <img
                className="catalogue_img"
                src={library}
                alt="Flexbox Feature"
              />
            </div>
            <Link to={"/services/catalogue-services"}>
              <h2 className="h2"> Cataloging</h2>
            </Link>
            <p className="p col-md-12">
              Efficiently organize and showcase your products or services in a
              comprehensive catalog, simplifying the browsing and ordering
              process for customers.
            </p>
          </div>
          <div className="feature-card col-md-4">
            <div className="feature-container">
              <img
                src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg"
                alt="Flexbox Feature"
              />
            </div>
            <h2 className="h2">Courier Services</h2>
            <p className="p">
              Efficient courier service to Jeddah, ensuring swift and secure
              delivery. Reliable, timely, and dedicated to simplifying logistics
              for seamless transportation of your packages.
            </p>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Features;
