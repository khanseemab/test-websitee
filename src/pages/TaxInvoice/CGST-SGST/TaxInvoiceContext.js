import { createContext, useEffect, useState } from "react";

export const TaxInvoiceContext = createContext();

const TaxInvoiceProvider = ({ children }) => {
  const [taxInvoice, setTaxInvoice] = useState({
    name: "",
    address: "",
    GSTIN: "",
    state: "",
    code: "",
    payDate: "",
    invoice:'',
    marketplace:"",
    sku:"",
    details:"",
    amount: '',
    discount: "",
    executive:''
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [customPackage, setCustomPackage] = useState('');



  const handleInputNum = (e) => {
    setTaxInvoice((prev) => {
      const { name, value } = e.target;
      
      const numericValue = parseFloat(value);
      return { ...prev, [name]: numericValue };
    });
  };

  const handleInput = (e) => {
    setTaxInvoice((prevalue) => {
      const { name, value } = e.target;
      return { ...prevalue, [name]: value };
    });
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPackage(selectedValue);

    // If the selected value is "other", clear the custom package input
    if (selectedValue === 'other') {
      setCustomPackage('');
    }
  };

  const handleCustomInputChange = (e) => {
    setCustomPackage(e.target.value);
  };
  
    
   const sgst=taxInvoice.amount * 9 / 100;
   const cgst=taxInvoice.amount * 9 / 100;
   const gstAmount = sgst+cgst

    const totalAmount = taxInvoice.amount + sgst+cgst;
    const grandTotal = totalAmount - taxInvoice.discount;



    const month = new Date(taxInvoice.payDate).toLocaleDateString('en-GB');

  return (
    <TaxInvoiceContext.Provider
      value={{ taxInvoice, setTaxInvoice, handleInputNum, handleInput, gstAmount,handleCustomInputChange,customPackage,selectedPackage,handleSelectChange,totalAmount, grandTotal, month,sgst,cgst }}
    >
      {children}
    </TaxInvoiceContext.Provider>
  );
};

export default TaxInvoiceProvider;
