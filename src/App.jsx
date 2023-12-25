import React, { useState, useEffect } from "react";
import Router from "./RouterApp";
import MyContext from "./MyContext";

import AOS from "aos";
import "aos/dist/aos.css";

const Apps = () => {
  const [clientName, setClientname] = useState([]);

  //Navigate
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
    });
  }, []);

  return (
    <>
      <MyContext.Provider value={{ clientName, setClientname }}>
        
          <Router />
        
      </MyContext.Provider>
    </>
  );
};

export default Apps;
