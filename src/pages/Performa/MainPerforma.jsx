import React, { useEffect, useRef, useContext } from "react";
import "./Performa.css";
import performaIMG from "../../assets/PerForma.png";
// import HeaderMain from "../../components/Header/HeaderMain"
import { PerformaContext } from "./PerformaContext";
// import generatePDF from "react-to-pdf";

const MainPerforma = ({ pdfPerformaRef }) => {
  //WORKING USECONTEXT

  const { performa, gstAmount, totalAmount, grandTotal, words, month } =
    useContext(PerformaContext);

  const today = new Date().toLocaleDateString("en-GB");

  //   const pdfContainerRef = useRef();

  //   const downloadPDF = () => {
  //   if (pdfContainerRef) {
  //     generatePDF(pdfContainerRef, { filename: "page.pdf" });
  //   } else {
  //     console.error("pdfContainerRef is null or undefined");
  //   }
  // };
  return (
    <>
      {/* <HeaderMain/> */}
      <div className="mt-5">
        <div ref={pdfPerformaRef} className="container mainInvoice mt-5">
          <table className="performa_table">
            <tr style={{ padding: "0px" }}>
              <td colspan="7" style={{ padding: "0px" }}>
                <img
                  src={performaIMG}
                  className="performa_img"
                  // height={"120px"}
                  // width={"1220px"}
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
              {/* <!-- This row is now merged with the cell in the first column from the row above --> */}
              <td colSpan="2">Delivery Note</td>
              <td colSpan="3">Mode/Terms of Payment</td>
            </tr>
            <tr>
              <td rowspan="3" colSpan="2">
                Buyer (Bill to): <b>{performa.name}</b>
                <br />
                <br />
                {performa.address}
                <br />
                GSTIN/UIN : {performa.GSTIN}
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
              <td>Sr.No</td> <td>Description of Services</td> <td>HSN/SAC</td>
              <td>Quantity</td> <td>Rate</td> <td>per</td> <td>Amount</td>
            </tr>
            <tr>
              <td>1</td>
              <td className="company">{performa.serviceName}</td>
              <td></td> <td></td> <td>{performa.gstRate}%</td> <td></td>
              <td>
                ₹{performa.amount}
                <br />₹{gstAmount}
              </td>
            </tr>
            <tr>
              <td colspan="2">Total</td> <td colspan="4"></td>{" "}
              <td>{totalAmount}</td>
            </tr>
            <tr>
              <td colspan="2">Discount</td> <td colspan="4"></td>{" "}
              <td>₹{performa.discount}</td>
            </tr>
            <tr>
              <td colspan="2">
                {" "}
                <b>Grand Total </b>
              </td>{" "}
              <td colspan="4"></td>
              <td>
                <b>₹{grandTotal}</b>
              </td>
            </tr>
            <tr>
              <td colspan="2" rowspan="2">
                HSN/SAC
              </td>
              <td rowspan="2">Taxable Value </td>
              <td colspan="2">Integrated Tax</td>{" "}
              <td rowspan="2" colspan="2">Total Tax Amount </td>
            </tr>{" "}
            <tr>
              <td>Rate</td>
              <td>Amount</td>
            </tr>
            <tr>
              <td colspan="3"></td>
              <td>₹{performa.amount} </td>

              <td>{performa.gstRate}%</td>
              <td>₹{gstAmount}</td>
              <td>₹{gstAmount}</td>
            </tr>
            <tr>
              <td colspan="3">
                <b>Total</b>{" "}
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
                Amount Chargeable (in words) :
                <br />
                <b> </b>
              </td>
            </tr>
            <tr>
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
                    <li className="terms_&_bank_details">
                      In terms of taxation, the payment made to us is considered
                      in terms of taxation the payment made to us is considered
                      an Advertising Contract under section 194C. If applicable,
                      TDS(Tax Deducted at Source) will be charged at rate of 2%.
                      <pre>
                        Bank Details : <br />
                        Account Name : K2 E-COMMERCE SOLUTIONS
                        <br />
                        Bank Name : UCO BANK <br />
                        Account Number : 27650210002339
                        <br />
                        IFSC : UCBA0002765
                        <br />
                        PAN No : AAZFK2585K <br />
                        Note :- Cheque/Draf to be made in favour of K2
                        E-Commerce Solutions Customer’s Signature & Stamp
                        Executive’s Signature Authorised Signatory
                      </pre>
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
