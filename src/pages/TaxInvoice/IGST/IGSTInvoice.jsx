import React, { useState, useRef, useEffect, useContext } from "react";
// import "./TaxInvoice.css";
import Header from "../../../components/Header/AdminHeader";
import IGSTInvoiceProvider from "./IGSTInvoiceContext";
import IGSTInvoiceDetails from "./IGSTInvoiceDetails";
import MainIGSTTaxInvoice from "./Main-IGST-Invoice";
import generatePDF from "react-to-pdf";

const IGSTInvoice = () => {
  // const {igstInvoice}=useContext(IGSTInvoiceContext);
      const [showMainIGSTTaxInvoice, setShowMainIGSTTaxInvoice] = useState(true);

  const [fileName, setfileName]=useState("abcd")
  const pdfIGSTTaxInvoiceRef = useRef();

  const generateDownloadPDF = async () => {
    if (pdfIGSTTaxInvoiceRef) {
      const options = {
        filename: `${fileName}.pdf`,
        page: {
          margin: 0,
          format: "a4",
          orientation: "portrait",
        },
      };
  
      await generatePDF(pdfIGSTTaxInvoiceRef, options);
      setShowMainIGSTTaxInvoice(false);
    } else {
      console.error("pdfIGSTTaxInvoiceRef or igstInvoice is null or undefined");
    }
  };
  const IGSTdownloadPDF = () => {
    setShowMainIGSTTaxInvoice(true);
    

    setTimeout(() => {
      generateDownloadPDF();
    }, 100);
    console.log("PDF download initiated");
  };
  useEffect(() => {
    setShowMainIGSTTaxInvoice(true);
    setShowMainIGSTTaxInvoice(false);

    
  }, [setShowMainIGSTTaxInvoice]);

  return (
    <>
      <Header />
      <IGSTInvoiceProvider>
        <div className="container InvoiceContainer">
          <div className="Invoice_form mt-5">
            <div className="row">
              <h2 className="text-white text-end">IGST Tax Invoice GENERATOR</h2>
              <div className="col-md-12 ms-5">
                <IGSTInvoiceDetails IGSTdownloadPDF={IGSTdownloadPDF} setfileName={setfileName}/>
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
        {showMainIGSTTaxInvoice && (
          <MainIGSTTaxInvoice pdfIGSTTaxInvoiceRef={pdfIGSTTaxInvoiceRef} />
        )}
      </IGSTInvoiceProvider>
    </>
  );
};

export default IGSTInvoice;
