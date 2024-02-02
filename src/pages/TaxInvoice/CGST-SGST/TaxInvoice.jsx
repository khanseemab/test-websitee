import React, { useState, useRef, useEffect } from "react";
// import "./TaxInvoice.css";
import Header from "../../../components/Header/AdminHeader";
import TaxInvoiceProvider from "./TaxInvoiceContext";
import TaxInvoiceDetails from "./TaxInvoiceDetails";
import MainTaxInvoice from "./MainTaxInvoice";
import generatePDF from "react-to-pdf";

const TaxInvoice = () => {
  const [showMainTaxInvoice, setShowMainTaxInvoice] = useState(true);
  const [fileName,setFileName]=useState("")

  const pdfTaxInvoiceRef = useRef();

  const generateAndDownloadPDF = async () => {
    if (pdfTaxInvoiceRef) {
      const options = {
        filename: `${fileName} CGST SGST .pdf`,
        page: {
          margin: 0,
          format: "a4",
          orientation: "portrait",
        },
      };

      await generatePDF(pdfTaxInvoiceRef, options);
      setShowMainTaxInvoice(false);
    } else {
      console.error("pdfContainerRef is null or undefined");
    }
  };

  const downloadPDF = () => {
    setShowMainTaxInvoice(true);

    setTimeout(() => {
      generateAndDownloadPDF();
    }, 100);
    console.log("PDF download initiated");
  };
  useEffect(() => {
    setShowMainTaxInvoice(true);
    setShowMainTaxInvoice(false);
  }, [setShowMainTaxInvoice]);

  return (
    <>
      <Header />
      <TaxInvoiceProvider>
        <div className="container InvoiceContainer">
          <div className="Invoice_form mt-5">
            <div className="row">
              <h2 className="text-white text-end">CGST & SGST Invoice GENERATOR</h2>
              <div className="col-md-12 ms-5">
                <TaxInvoiceDetails downloadPDF={downloadPDF} setFileName={setFileName}/>
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
        {showMainTaxInvoice && (
          <MainTaxInvoice pdfTaxInvoiceRef={pdfTaxInvoiceRef} />
        )}
      </TaxInvoiceProvider>
    </>
  );
};

export default TaxInvoice;
