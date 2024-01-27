import React, { useState,useMemo, useEffect, useContext } from "react";
// import "./TaxInvoice.css";
// import performaIMG from "../../assets/Performa.png";
import adminSignature from "../../../assets/Admin_Signature.jpg";
import { IGSTInvoiceContext } from "./IGSTInvoiceContext";
import { ToWords } from "to-words";

const MainIGSTTaxInvoice = ({ pdfIGSTTaxInvoiceRef }) => {
  //WORKING USECONTEXT

  const [amountWords, setAmountWords] = useState(null);
  const [gstWords, setGSTWords] = useState(null);

  const {
    igstInvoice,
    gstAmount,
    totalAmount,
    grandTotal,
    customPackage,
    selectedPackage,
    igst,
    month,
  } = useContext(IGSTInvoiceContext);

  // const today = new Date().toLocaleDateString("en-GB");

  // const wordResult = numberToWords.toWords(grandTotal);
  // setWords(wordResult);
  const toWords = useMemo(() => new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        name: "Rupee",
        plural: "Rupees",
        symbol: "₹",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paise",
          symbol: "",
        },
      },
    },
  }), []); // Empty dependency array because useMemo doesn't depend on any props or state
  
  useEffect(() => {
    const amountWords = toWords.convert(grandTotal);
    const wordGST = toWords.convert(gstAmount);
    setAmountWords(amountWords);
    setGSTWords(wordGST);
  }, [grandTotal, gstAmount, toWords]); 
  return (
    <>
      <div ref={pdfIGSTTaxInvoiceRef} className="">
        <div className="container mainInvoice mt-5">
        <h4 style={{textAlign:"center" ,marginTop:"100px"}}>Tax Invoice
</h4>     <table
            className="performa_table"
            style={{color: "black"}}
          >     
          
            <tr>
              <td rowspan="3" colSpan="2">
                <b> K2 E COMMERCE SOLUTIONS</b>
                <br />
                Doon Express Business Park, Shop No SR-4, Phase-1, Transport
                Nagar,
                <br />
                Dehradun Uttarakhand, 248001
                <br />
                GSTIN/UIN: 05AAZFK2585K1ZK
                <br />
                State Name : Uttrakhand, Code : 05
                <br />
                E-Mail : info@k2ecommercesolution.com
              </td>
              <td colSpan="2">
                Invoice No.
                <br />
                <b>K2/G/{igstInvoice.invoice}</b>
              </td>
              <td colSpan="3">
                Dated: <br/><b>{month}</b>
              </td>
            </tr>
            <tr>
              <td colSpan="2">Delivery Note</td>
              <td colSpan="3">Mode/Terms of Payment</td>
            </tr>
            <tr>
              <td colSpan="2">Reference No. & Date</td>
              <td colSpan="3">Other References</td>
            </tr>

            <tr>
              <td
                rowspan="3"
                colSpan="2"
                style={{
                  maxWidth: "530px",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                }}
              >
                Buyer (Bill to): <b>{igstInvoice.name}</b>
                <br />
                <br />
                {igstInvoice.address}
                <br /> <br />
                GSTIN/UIN : {igstInvoice.GSTIN}
                <br />
                <br />
                State Name: {igstInvoice.state} , Code: {igstInvoice.code}
              </td>

              <td colSpan="2">Dispatch Doc No.</td>
              <td colSpan="3">Delivery Note Date</td>
            </tr>
            <tr>
              <td colSpan="2">Dispatched through</td>
              <td colSpan="3">Destination</td>
            </tr>
            <tr>
              <td colSpan="5">Terms of Delivery</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Sr.No</td>
              <td style={{ textAlign: "center" }}>Description of Services</td>
              <td style={{ textAlign: "center" }}>HSN/SAC</td>
              <td style={{ textAlign: "center" }}>Quantity</td> <td>Rate</td>{" "}
              <td colSpan="2" style={{ textAlign: "center" }}>
                Amount
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" ,verticalAlign: "top" }}>1</td>
              <td
               style={{
                  height: "210px",
                  width: "500px",
                  overflow: "hidden",
                  verticalAlign: "top",

                  whiteSpace: "pre-wrap",
                  padding:"0px 0px 0px 10px"
                }}
              >
              <span  style={{
                  
                  width: "500px",
                  verticalAlign: "top",
                  margin:"0px",
                  padding:"0px"

                }}>
                {customPackage || selectedPackage}
                <br />
                {igstInvoice.marketplace}

                <br />
                SKU {igstInvoice.sku}
                <br />

                {igstInvoice.details}</span>
              </td>
              <td style={{ textAlign: "center" }}>998399</td> <td></td>
              <td>
                <br />
                <br />
               
                IGST &nbsp; 18%
              </td>
              <td colSpan="2" style={{ textAlign: "center" }}>
                ₹{igstInvoice.amount}
                <br />
                <br />₹{igst}
              </td>
            </tr>
            <tr>
              <td colspan="2">Total</td> <td colspan="4"></td>
              <td>₹{totalAmount}</td>
            </tr>
            <tr>
              <td colspan="2">Discount</td> <td colspan="4"></td>
              <td>₹{igstInvoice.discount}</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Grand Total </b>
              </td>
              <td colspan="4"></td>
              <td>
                <b>₹{grandTotal}</b>
              </td>
            </tr>
            <tr>
              <td colspan="7">
                Amount Chargeable (in words) :<b> {amountWords} </b>
              </td>
            </tr>
            

            <tr style={{ textAlign: "center" }}>
              <td colspan="3" rowspan="2" style={{ textAlign: "center" }}>
                HSN/SAC
              </td>
              <td rowspan="2">Taxable Value </td>
              <td colspan="2" style={{ textAlign: "center" }}>IGST</td>
              <td rowspan="2" colspan="2">
                Total Tax Amount
              </td>
            </tr>
            <tr>
              <td>Rate</td>
              <td>Amount</td>
            </tr>
            <tr>
              <td colspan="3" style={{ textAlign: "center" }}>
                998399
              </td>
              <td>₹{igstInvoice.amount} </td>

              <td>18%</td>
              <td>₹{gstAmount}</td>
              <td>₹{gstAmount}</td>
            </tr>
            <tr>
              <td colspan="3">
                <b>Total</b>
              </td>
              <td>₹{igstInvoice.amount} </td>

              <td></td>
              <td>₹{gstAmount}</td>
              <td>
                <b>₹{gstAmount}</b>
              </td>
            </tr>
            


            <tr> 
              <td colspan="7" style={{borderBottom:"0px",height:"5vh"}}>
                Tax Amount (in words) :<br/><b> {gstWords} </b>
              </td>
            </tr>
           
             <tr
              // className="declaration"
              style={{height:"10vh", fontSize: "15px", padding: "" }}
             >
              <td  colspan="3" style={{borderTop:"0px",width:"140px"}}>
              <div style={{width:"400px"}} >
              <span style={{ textDecoration:"underline"}}>
              Declaration
                                        </span>
                                        <br/>
             
                   We declare that this invoice shows the actual price of 
                      the goods described and that all particulars are true 
                     and correct.</div>
              </td>
              <td colspan="4">
                 <div
                          className=""
                          style={{ position: "relative", textAlign: "end" }}
                        >
                        <b>for K2 E COMMERCE SOLUTIONS</b>
                          <img
                          // className="adminSignature"
                           src={adminSignature}
                               height={"60px"}
                               alt="Admin Signature"
                               style={{
                                 position: "absolute",
                                 right: 0,
                                //  left: "32%",
                                 transform: "translateX(0%) translateY(40%)", // Combine transformations
                               }}
                             />

                          <span style={{ display: "block", margin:"60px 0px 0px 200px"}}>
                            Authorised Signatory
                          </span>
                        </div>

              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default MainIGSTTaxInvoice;
