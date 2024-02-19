import React, { useState, useRef, useEffect } from "react";
import "./Performa.css";
import Header from "../../components/Header/AdminHeader";
import PerformaProvider from "./PerformaContext";
import PerformaDetails from "./PerformaDetails";
import MainPerforma from "./MainPerforma";
import generatePDF from "react-to-pdf";

const Performa = () => {
  const [showMainPerforma, setShowMainPerforma] = useState(true);
const [fileName,setFileName]=useState("")
  const pdfPerformaRef = useRef();

  const generateAndDownloadPDF = async () => {
    if (pdfPerformaRef) {
      const options = {
        filename: `${fileName} Performa .pdf`,
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

    setTimeout(() => {
      generateAndDownloadPDF();
    }, 100);
    console.log("PDF download initiated");
  };
  useEffect(() => {
    setShowMainPerforma(true);
    setShowMainPerforma(false);
  }, [setShowMainPerforma]);

  return (
    <>
      <Header />
      <PerformaProvider>
        <div className="container InvoiceContainer">
          <div className="Invoice_form mt-5">
            <div className="row">
              <h2 className="text-black-50 text-end">PERFORMA GENERATOR</h2>
              <div className="col-md-12 ms-5">
                <PerformaDetails downloadPDF={downloadPDF} setFileName={setFileName}/>
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
