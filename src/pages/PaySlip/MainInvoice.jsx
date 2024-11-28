import React, { useEffect, useRef, useContext } from "react";
import "./Invoice.css";
import brand from "../../assets/logo.png";
// import HeaderMain from "../../components/Header/HeaderMain"
import { SalaryContext } from "./SalaryContext";
// import generatePDF from "react-to-pdf";

const MainInvoice = ({ pdfContainerRef }) => {
  //WORKING USECONTEXT

  const { employee, totalPay, grossEarning, totalDeduction, month } =
    useContext(SalaryContext);

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
        <div className="mt-5 ">
          <div ref={pdfContainerRef} className="container mainInvoice mt-5">
            <div className="row">
              <div className="col-md-1">
                <img src={brand} height={"50px"} alt="company logo" />
              </div>
              <div className="col-md-6">
                <h4 className="">K2 E-Commerce Solutions </h4>

                <span className="h6 ">
                  SR-4 Phase, 1, Transport Nagar Dehradun, Uttarakhand 248001
                </span>
              </div>
              <span className="col-md-5  ">
                pay slip for month
                <br />
                <h5>{month}</h5>
              </span>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <span>
                  <h4 className="summary_heading">Employee Summary</h4>
                </span>
                <div className="row ">
                  <div className="col-sm-4 col-5 ">Employee Name </div>
                  <div className="col-1">:</div>
                  <div className=" col-6"> {employee.name}</div>
                </div>
                <div className="row ">
                  <div className="col-sm-4 col-5">Employee ID</div>
                  <div className="col-1">:</div>
                  <div className="col-6">{employee.id}</div>
                </div>
                <div className="row ">
                  <div className="col-sm-4 col-5">Pay Period / Month</div>
                  <div className="col-1">:</div>
                  <div className="col-6">{month}</div>
                </div>
                <div className="row ">
                  <div className="col-sm-4 col5">Pay Date</div>
                  <div className="col-1">:</div>
                  <div className="col-6">{today}</div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="salary_amount ">
                  <div className="ms-3">
                    <h1 className="">₹ {totalPay}</h1>

                    <div className="">Employee Net Pay</div>
                  </div>{" "}
                </div>
                <div className="row ">
                  <div className="col-sm-4 col-3">pay days</div>
                  <div className="col-1">:</div>
                  <div className="col-1">{employee.paidDays}</div>
                </div>
                {/* <div className="row">
              <div className="col-sm-2 col-3">LOP days</div>
              <div className="col-1">:</div>
              <div className="col-1">0</div>
            </div> */}
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-4 Earning_heading">
                    <b>EARNINGS</b>
                  </div>
                  <div className="offset-5 Earning_heading col-2">
                    <b>AMOUNT</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">Basic Salary</div>
                  <div className="offset-5 col-3">₹ {employee.salary}</div>
                </div>
                <div className="row">
                  <div className="col-5">House Rent Allowance</div>
                  <div className="offset-4 col-3">₹ {employee.HRA}</div>
                </div>
                <div className="row">
                  <div className="col-5">Incentives</div>
                  <div className="offset-4 col-3">₹ {employee.incentives}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row Deduction_heading">
                  <div className="col-sm-4">
                    <b>DEDUCTIONS</b>
                  </div>
                  <div className="offset-5 col-sm-3">
                    <b>AMOUNT</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">Income Tax</div>
                  <div className="offset-5 col-sm-3">
                    ₹ {employee.incomeTax}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">Provident Fund</div>
                  <div className="offset-5 col-sm-3">₹ {employee.PF}</div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-4">Gross Earnings</div>
                  <div className="offset-5 col-2">
                    <b>₹ {grossEarning}</b>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-4">Total Deductions</div>
                  <div className="offset-5 col-2">
                    <b>₹ {totalDeduction}</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-4">
                <span>
                  <b>TOTAL NET PAYABLE</b>
                </span>
                <br />
                Gross Earnings - Total Deduction :
              </div>

              <div className="assas col-4 ">
                <br />
                /- {totalPay}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default MainInvoice;
