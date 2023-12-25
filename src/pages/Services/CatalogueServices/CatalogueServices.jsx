import React from "react";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import data from "./data";
import HeaderMain from "../../../components/Header/HeaderMain";
import Footer from "../../../components/Footer/Footer";
import NewsLetter from "../../../components/NewsLetter/NewsLetter";
const CatalogueServices = () => {
  return (
    <>
      <HeaderMain />
      <div className="container">
        <div className="row">
          {data.map((elem) => {
            const { id, image, header, para, height } = elem;
            return (
              <ServiceCard
                key={id}
                image={image}
                header={header}
                para={para}
                height={height}
              />
            );
          })}
        </div>
      </div><NewsLetter/>
      <Footer />
    </>
  );
};

export default CatalogueServices;
