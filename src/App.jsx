import React, { useState, useEffect } from "react";
import Router from "./RouterApp";
import MyContext from "./MyContext";




const Apps = () => {
  const [clientName, setClientname] = useState([]);

 

  return (
    <>
      <MyContext.Provider value={{ clientName, setClientname }}>
        
          <Router />
        
      </MyContext.Provider>
    </>
  );
};

export default Apps;
