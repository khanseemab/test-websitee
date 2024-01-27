import React, { useState, useMemo,useEffect, useContext } from "react";
// import "./TaxInvoice.css";
// import performaIMG from "../../assets/Performa.png";
import adminSignature from "../../../assets/Admin_Signature.jpg";
import { TaxInvoiceContext } from "./TaxInvoiceContext";
import { ToWords } from "to-words";

const MainTaxInvoice = ({ pdfTaxInvoiceRef }) => {
  //WORKING USECONTEXT

  const [amountWords, setAmountWords] = useState("");
  const [gstWords, setGSTWords] = useState("");

  const {
    taxInvoice,
    gstAmount,
    totalAmount,
    grandTotal,
    customPackage,
    selectedPackage,
    sgst,
    cgst,
    month,
  } = useContext(TaxInvoiceContext);

  // const today = new Date().toLocaleDateString("en-GB");

  
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
  }), []);
  useEffect(() => {
    const amountWords = toWords.convert(grandTotal);
    const wordGST = toWords.convert(gstAmount);
    setAmountWords(amountWords);
    setGSTWords(wordGST);
  },  [grandTotal,gstAmount,toWords]); // Only re-run the effect when grandTotal changes

  return (
    <>
      <div ref={pdfTaxInvoiceRef} className="">
        <div className="container mainInvoice mt-5"> <h4 style={{textAlign:"center" ,marginTop:"100px"}}>Tax Invoice
</h4> 
          <table className="performa_table" style={{ color: "black" }}>
          {/* <span style={{textAlign:"center"}}>Tax Invoice
</span>    */}
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
                Invoice No. :
                <br />
                <b> K2/G/{taxInvoice.invoice}</b>
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
                Buyer (Bill to): <b>{taxInvoice.name}</b>
                <br />
                <br />
                {taxInvoice.address}
                <br /> <br />
                GSTIN/UIN : {taxInvoice.GSTIN}
                <br />
                <br />
                State Name: {taxInvoice.state} , Code: {taxInvoice.code}
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
              <td style={{ textAlign: "center",verticalAlign: "top" }}>1</td>
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
                {taxInvoice.marketplace}

                <br />
                SKU {taxInvoice.sku}
                <br />

                {taxInvoice.details}</span>
              </td>
              <td style={{ textAlign: "center" }}>998399</td> <td></td>
              <td>
                <br />
                <br />
                SGST &nbsp; 9%
                <br />
                <br />
                CGST &nbsp; 9%
              </td>
              <td colSpan="2" style={{ textAlign: "center" }}>
                ₹{taxInvoice.amount}
                <br />
                <br />₹{cgst}
                <br />
                <br />₹{sgst}
              </td>
            </tr>
            <tr>
              <td colspan="2">Total</td> <td colspan="4"></td>
              <td>₹{totalAmount}</td>
            </tr>
            <tr>
              <td colspan="2">Discount</td> <td colspan="4"></td>
              <td>₹{taxInvoice.discount}</td>
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
              <td colspan="1" rowspan="2" style={{ textAlign: "center" }}>
                HSN/SAC
              </td>
              <td rowspan="2" style={{ textAlign: "center" }}>Taxable Value </td>
              <td colspan="2">SGST</td>
              <td colspan="2">CGST</td>
              <td rowspan="2" colspan="1">
                Total Tax Amount
              </td>
            </tr>
            <tr>
              <td>Rate</td>
              <td>Amount</td>
              <td>Rate</td>
              <td>Amount</td>
            </tr>
            <tr>
            <td style={{ textAlign: "center" }}>
                998399
              </td>
              <td style={{ textAlign: "center" }}>
                {taxInvoice.amount}
              </td>
              <td>9% </td>

              <td>₹{sgst}</td>
              <td>9%</td>
              <td>₹{cgst}</td>
              <td>₹{gstAmount}</td>
            </tr>
            <tr>
              <td colspan="3">
                <b>Total</b>
              </td>
              <td>₹{sgst} </td>

              <td></td>
              <td>₹{cgst}</td>
              <td>
                <b>₹{gstAmount}</b>
              </td>
            </tr>
            <tr> 
              <td colspan="7" style={{borderBottom:"0px",height:"10vh"}}>
                Tax Amount (in words) :<br/><b> {gstWords} </b>
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

export default MainTaxInvoice;
