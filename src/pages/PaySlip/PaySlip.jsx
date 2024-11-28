import React, { useState, useRef, useEffect } from "react";
import "./Invoice.css";
import Header from "../../components/Header/AdminHeader";
import SalaryProvider from "./SalaryContext";
import EmployeeDetails from "./EmployeeDetails";
import MainInvoice from "./MainInvoice";
import generatePDF from "react-to-pdf";

const PaySlip = () => {
  const [showMainInvoice, setShowMainInvoice] = useState(false);

  const pdfContainerRef = useRef();

  const generateAndDownloadPDF = async () => {
    if (pdfContainerRef) {
      const options = {
        filename: "pay-slip.pdf",
        page: {
          margin: 11,
          format: "a6",
          orientation: "landscape",
        },
      };

      await generatePDF(pdfContainerRef, options);
      setShowMainInvoice(false);
    } else {
      console.error("pdfContainerRef is null or undefined");
    }
  };

  const downloadPDF = () => {
    setShowMainInvoice(true);

    setTimeout(() => {
      generateAndDownloadPDF();
    }, 100);
    // Call the function to generate and download the PDF

    // Add any other logic you need after triggering the PDF download
    console.log("PDF download initiated");
  };
  useEffect(() => {
    setShowMainInvoice(true);
    setShowMainInvoice(false);
  }, []);

  return (
    <>
      <Header />
      <SalaryProvider>
        <div className="container InvoiceContainer">
          <div className="Invoice_form mt-5">
            <div className="row">
              <h1 className="text-white text-end">PAY SLIP GENERATOR</h1>
              <div className="col-md-12">
                <EmployeeDetails downloadPDF={downloadPDF} />
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
        {showMainInvoice && <MainInvoice pdfContainerRef={pdfContainerRef} />}
      </SalaryProvider>
    </>
  );
};

export default PaySlip;
