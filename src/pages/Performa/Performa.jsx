import React, { useState, useRef, useEffect } from "react";
import "./Performa.css";
import Header from "../../components/Header/Header";
import PerformaProvider from "./PerformaContext";
import PerformaDetails from "./PerformaDetails";
import MainPerforma from "./MainPerforma";
import generatePDF from "react-to-pdf";

const Performa = () => {
  const [showMainPerforma, setShowMainPerforma] = useState(true);

  const pdfPerformaRef = useRef();

  const generateAndDownloadPDF =async() => {
    if (pdfPerformaRef) {
      const options = {
        filename: "Performa.pdf",
        page: {
          margin: 0,
          format: "a4",
          orientation: "portrait",
        },
      };

      await generatePDF(pdfPerformaRef, options);
      setShowMainPerforma(false);
    } else {
      console.error("pdfContainerRef is null or undefined");
    }
  };

  const downloadPDF = () => {    
    setShowMainPerforma(true);

    setTimeout(()=>{
      generateAndDownloadPDF();
    },100)
    // Call the function to generate and download the PDF
    

    // Add any other logic you need after triggering the PDF download
    console.log("PDF download initiated");
  };
  useEffect(()=>{
    setShowMainPerforma(true);
    setShowMainPerforma(false);

  },[])

  return (
    <>
      <Header />
      <PerformaProvider>
        <div className="container InvoiceContainer">
          <div className="Invoice_form mt-5">
            <div className="row">
              <h1 className="text-white text-end">PERFORMA GENERATOR</h1>
              <div className="col-md-12 ms-5">
                <PerformaDetails downloadPDF={downloadPDF} />
              </div>
            </div>

            {/* /*Animate button  */}
            {/* <button className="cta">
              <span onClick={generatePDF}>Generate</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button> */}
          </div>
        </div>
        {showMainPerforma && <MainPerforma pdfPerformaRef={pdfPerformaRef} />}
      </PerformaProvider>
    </>
  );
};

export default Performa;
