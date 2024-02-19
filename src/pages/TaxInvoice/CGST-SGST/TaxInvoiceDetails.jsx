import React, {  useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { TaxInvoiceContext } from "./TaxInvoiceContext";

const TaxInvoiceDetails = ({ downloadPDF ,setFileName}) => {
  
  const { taxInvoice, handleInputNum, handleInput,handleCustomInputChange,customPackage,selectedPackage,handleSelectChange } = useContext(TaxInvoiceContext);
  
  const submitHandle = (e) => {
    e.preventDefault();
  };

  const handleFileName=(e)=>{
    setFileName(e.target.value)
    handleInput(e)
  }

  return (
    <>
      <Form className="row" onSubmit={submitHandle}>
        <h3 className="employee_heading">Tax Invoice Details </h3>
        <br />
        <br />
        <br />
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalName"
        >
          <Form.Label column sm={3} htmlFor="name">
            Company Name
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="name"
              id="name"
              value={taxInvoice.name}
              placeholder="Enter Company Name"
              onChange={handleFileName}
              autoComplete="false"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6"
          // controlId="formHorizontalID"
        >
          <Form.Label column sm={3} htmlFor="GSTIN">
            GSTIN{" "}
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="text"
              name="GSTIN"
              id="GSTIN"
              value={taxInvoice.GSTIN}
              placeholder="Enter GSTIN "
              onChange={handleInput}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalName"
        >
          <Form.Label column sm={3} htmlFor="address">
            Address{" "}
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="address"
              id="address"
              value={taxInvoice.address}
              placeholder="Enter Company Address"
              onChange={handleInput}
              autoComplete="false"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalDate"
        >
          <Form.Label column sm={3} htmlFor="state">
            STATE{" "}
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              name="state"
              id="state"
              value={taxInvoice.state}
              placeholder="Enter State Name"
              onChange={handleInput}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalPaidDay"
        >
          <Form.Label column sm={3} htmlFor="code">
            State Code
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="code"
              id="code"
              value={taxInvoice.code}
              placeholder="Enter State Code"
              onChange={handleInputNum}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 col-md-6 text-white">
  <Form.Label column sm={3} htmlFor="payDate">
Date  </Form.Label>
  <Col sm={5}>
    <Form.Control
      type="date"
      name="payDate"
      id="payDate"
      value={taxInvoice.date}
      placeholder="Enter Pay Date"
      onChange={handleInput}
      min="2022-01"
      max="2024-12"  
    />
  </Col>
</Form.Group>

        <br />
        <br />
        <br />
        <h3 className="income_heading">Description</h3>
        <br />
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalHRA"
        >
          <Form.Label column sm={3} htmlFor="invoice">
            Invoice No.
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="invoice"
              id="invoice"
              value={taxInvoice.invoice}
              onChange={handleInput}
              placeholder="Enter Invoice Number"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 col-md-6 ">
      <Form.Label column sm={3} htmlFor="package">
        Package Name
      </Form.Label>
      <Col sm={7}>
        <Form.Select
          name="package"
          id="package"
          value={selectedPackage}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Select Package Name
          </option>
          <option value="Start up mini">Start up mini</option>
          <option value="Start up">Start up</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="SEO/SMO">SEO/SMO</option>
          <option value="Web Development">Web Development</option>
          <option value="other">Other</option>
        </Form.Select>

        {/* Input field for custom package name */}
        {selectedPackage === 'other' && (
          <Form.Control
            type="text"
            name="customPackage"
            value={customPackage}
            onChange={handleCustomInputChange}
            placeholder="Enter Package Name"
            className="mt-2"
          />
        )}
      </Col>
    </Form.Group>

       

        <Form.Group
          as={Row}
          className="mb-3 col-md-6"
          // controlId="formHorizontalSalary"
        >
          <Form.Label column sm={3} htmlFor="marketplace">
            Marketplace{" "}
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="marketplace"
              id="marketplace"
              value={taxInvoice.marketplace}
              onChange={handleInput}
              placeholder="Enter Marketplace Name"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalSalary"
        >
          <Form.Label column sm={3} htmlFor="sku">
            SKU{" "}
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="sku"
              id="sku"
              value={taxInvoice.sku}
              onChange={handleInput}
              placeholder="Enter SKU Details"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalSalary"
        >
          <Form.Label column sm={3} htmlFor="details">
            Additional Info{" "}
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="details"
              id="details"
              value={taxInvoice.details}
              onChange={handleInput}
              placeholder="Enter Additional Information"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalIncomeTax"
        >
          <Form.Label column sm={3} htmlFor="amount">
            Amount
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="number"
              name="amount"
              id="amount"
              value={taxInvoice.amount}
              onChange={handleInputNum}
              placeholder="Enter Total Amount"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 "
          // controlId="formHorizontalHRA"
        >
          <Form.Label column sm={3} htmlFor="discount">
            Discount
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="discount"
              id="discount"
              value={taxInvoice.discount}
              onChange={handleInputNum}
              placeholder="Enter Discount"
            />
          </Col>
        </Form.Group>
       

        <Form.Group as={Row} className="mb-3 col-md-6 ">
          <Form.Label column sm={3} htmlFor="exevutive">
            Executive
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              name="exevutive"
              id="exevutive"
              value={taxInvoice.exevutive}
              onChange={handleInput}
              placeholder="Enter Executive Name"
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label column sm={2}></Form.Label>
          <Col sm={8}>
            <button className=" cta col-md-3 mt-3 justify-content-start align-items-start text-start">
              <span className="d-inline text-black-50" onClick={downloadPDF}>
                Generate
              </span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default TaxInvoiceDetails;
