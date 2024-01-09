import React, { useState, useEffect, useContext } from "react";
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

  const today = new Date().toLocaleDateString("en-GB");

  // const wordResult = numberToWords.toWords(grandTotal);
  // setWords(wordResult);
  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        // can be used to override defaults for the selected locale
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
  });

  useEffect(() => {
    const amountWords = toWords.convert(grandTotal);
    const wordGST = toWords.convert(gstAmount);
    setAmountWords(amountWords);
    setGSTWords(wordGST);
  }, [grandTotal]); // Only re-run the effect when grandTotal changes

  return (
    <>
      <div ref={pdfTaxInvoiceRef} className="">
        <div className="container mainInvoice mt-5">
          <table className="performa_table" style={{ marginTop:"100px",color: "black" }}>
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
                <b>K2/G/{taxInvoice.invoice}</b>
              </td>
              <td colSpan="3">
                Date: <b>{month}</b>
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
              <td style={{ textAlign: "center" }}>1</td>
              <td
                style={{
                  height: "210px",
                  maxWidth: "500px",
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                }}
              >
                {customPackage || selectedPackage}
                <br />
                {taxInvoice.marketplace}

                <br />
                {taxInvoice.sku}
                <br />

                {taxInvoice.details}
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
              <td colspan="7">
                Tax Amount (in words) :<b> {gstWords} </b>
              </td>
            </tr>
            <tr
              className="terms_conditions"
              style={{ fontSize: "10px", padding: "0px" }}
            >
              <td colspan="7">
                <ul>
                  <li>
                    This application is for K2 E-Commerce solutions which
                    provides a range of services for online businesses before
                    booking in order we require confirmation other through phone
                    or email.
                  </li>
                  <li>
                    please note that our services are provided without any
                    guarantee of confirmed orders from the marketplace. we
                    cannot guarantee specific performance outcomes in terms of
                    sales or order numbers.
                  </li>
                  <li>
                    All information, including text and pictures, must be
                    provided by the client according to the marketplace
                    requirements. K2 E-Commerce Solutions will not be held
                    responsible for any claims or damage arising from the
                    content posted on your listing. The client assumes full
                    responsibility for the accuracy and legality of the content
                    provided.
                  </li>
                  <li>
                    Our services are applicable for the mentioned duration only,
                    unless specified otherwise. If you wish to continue using
                    our services after the initial period, subsequent renewal
                    charges will apply at the prevailing rates, which may be
                    higher than the current charges.
                  </li>
                  <li>
                    Please note that the work on the services will commence only
                    after the clearance of a cheque or pay order. We require
                    payment in advance to initiate the work.
                  </li>
                  <li>
                    Please let us know if you have any further questions or
                    require clarification regarding our terms and conditions.
                  </li>
                  <b>
                    <li>
                      In terms of taxation, the payment made to us is considered
                      in terms of taxation the payment made to us is considered
                      an Advertising Contract under section 194C. If applicable,
                      TDS(Tax Deducted at Source) will be charged at rate of 2%.
                      <p
                        className="terms_&_bank_details p-0 m-0"
                        style={{ fontSize: "11px" }}
                      >
                        Bank Details : <br />
                        Account Name : K2 E-COMMERCE SOLUTIONS
                        <br />
                        Bank Name : UCO BANK <br />
                        Account Number : 27650210002339
                        <br />
                        IFSC : UCBA0002765
                        <br />
                        PAN No : AAZFK2585K
                      </p>
                      <div className="row ">
                        <div className="col-md-5 ">
                          Note :- Cheque/Draf to be made in favour of K2
                          E-Commerce Solutions
                        </div>
                        <div className="col-md-3">
                          {" "}
                          Customer’s Signature & Stamp
                        </div>
                        <div
                          className="col-md-3"
                          style={{ position: "relative", textAlign: "center" }}
                        >
                          <img
                            className="adminSignature"
                            src={adminSignature}
                            height={"85px"}
                            alt="Admin Signature"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: "32%",

                              transform: "translateX(-50%)",
                              transform: "translateY(-100%)",
                            }}
                          />
                          <span style={{ display: "block" }}>
                            Executive’s Signature Authorised Signatory
                          </span>
                        </div>
                      </div>
                    </li>
                  </b>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default MainTaxInvoice;
