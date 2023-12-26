import React, { useState, useEffect, useContext } from "react";
import "./Performa.css";
import performaIMG from "../../assets/Performa.png";
import adminSignature from "../../assets/Admin_Signature.jpg";
import { PerformaContext } from "./PerformaContext";
import numberToWords from "number-to-words";

const MainPerforma = ({ pdfPerformaRef }) => {
  //WORKING USECONTEXT

  const [amountWords, setAmountWords] = useState("");
  const [gstWords, setGSTWords] = useState("");

  const { performa, gstAmount, totalAmount, grandTotal } =
    useContext(PerformaContext);

  const today = new Date().toLocaleDateString("en-GB");

  // const wordResult = numberToWords.toWords(grandTotal);
  // setWords(wordResult);

  useEffect(() => {
    // Calculate word result when grandTotal changes
    const wordResult = numberToWords.toWords(grandTotal);
    const wordGST = numberToWords.toWords(gstAmount);
    setAmountWords(wordResult);
    setGSTWords(wordGST)
  }, [grandTotal]); // Only re-run the effect when grandTotal changes

  return (
    <>
      <div className="">
        <div ref={pdfPerformaRef} className="container mainInvoice ">
          <table className="performa_table">
            <tr style={{ padding: "0px" }}>
              <td colspan="7" style={{ padding: "0px" }}>
                <img
                  src={performaIMG}
                  className="performa_img"
                  alt="Performa Invoice"
                />
              </td>
            </tr>
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
              <td colSpan="2">Performa Invoice No.</td>
              <td colSpan="3">
                Date: <b>{today}</b>
              </td>
            </tr>
            <tr>
              <td colSpan="2">Reference No. & Date</td>
              <td colSpan="3">Other References</td>
            </tr>
            <tr>
              <td colSpan="2">Delivery Note</td>
              <td colSpan="3">Mode/Terms of Payment</td>
            </tr>
            <tr>
              <td rowspan="3" colSpan="2">
                Buyer (Bill to): <b>{performa.name}</b>
                <br />
                <br />
                {performa.address}
                <br /> <br />
                GSTIN/UIN : {performa.GSTIN}
                <br />
                <br />
                State Name: {performa.state} , Code: {performa.code}
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
              <td>Sr.No</td>
              <td style={{ textAlign: "center" }}>Description of Services</td>
              <td>HSN/SAC</td>
              <td>Quantity</td> <td>Rate</td> <td>per</td> <td>Amount</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <p className="company">{performa.serviceName}</p>
              </td>
              <td>998399</td> <td></td>
              <td>
                <br />
                <br />
                {performa.gstRate}%
              </td>
              <td></td>
              <td>
                ₹{performa.amount}
                <br />
                <br />₹{gstAmount}
              </td>
            </tr>
            <tr>
              <td colspan="2">Total</td> <td colspan="4"></td>
              <td>₹{totalAmount}</td>
            </tr>
            <tr>
              <td colspan="2">Discount</td> <td colspan="4"></td>
              <td>₹{performa.discount}</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Grand Total </b>
              </td>
              <td colspan="4"></td>
              <td>
                <b>₹{grandTotal}</b>
              </td>
            </tr><tr>
              <td colspan="7">
                Amount Chargeable (in words) :<b> {amountWords} Only</b>
              </td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td colspan="3" rowspan="2" style={{ textAlign: "center" }}>
                HSN/SAC
              </td>
              <td rowspan="2">Taxable Value </td>
              <td colspan="2">Integrated Tax</td>
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
              <td>₹{performa.amount} </td>

              <td>{performa.gstRate}%</td>
              <td>₹{gstAmount}</td>
              <td>₹{gstAmount}</td>
            </tr>
            <tr>
              <td colspan="3">
                <b>Total</b>
              </td>
              <td>₹{performa.amount} </td>

              <td></td>
              <td>₹{gstAmount}</td>
              <td>
                <b>₹{gstAmount}</b>
              </td>
            </tr>
            <tr>
              <td colspan="7">
                Tax Amount (in words) :<b> {gstWords} Only</b>
              </td>
            </tr>
            <tr className="terms_conditions" style={{ fontSize: "11px" }}>
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
                        style={{ fontSize: "12px" }}
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

export default MainPerforma;