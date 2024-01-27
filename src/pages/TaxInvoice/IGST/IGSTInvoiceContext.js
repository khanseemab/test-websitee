import { createContext, useEffect, useState } from "react";

export const IGSTInvoiceContext = createContext();

const IGSTInvoiceProvider = ({ children }) => {
  const [igstInvoice, setIGSTInvoice] = useState({
    name: "",
    address: "",
    GSTIN: "",
    state: "",
    code: "",
    payDate: "",
    invoice:"",
    marketplace:"",
    sku:"",
    details:"",
    amount: '',
    discount: '',
    executive:''
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [customPackage, setCustomPackage] = useState('');



  const handleInputNum = (e) => {
    setIGSTInvoice((prev) => {
      const { name, value } = e.target;
      
      const numericValue = parseFloat(value);
      return { ...prev, [name]: numericValue };
    });
  };

  const handleInput = (e) => {
    setIGSTInvoice((prevalue) => {
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
  
    
   const igst=igstInvoice.amount * 18 / 100;
   const gstAmount = igst;

    const totalAmount = igstInvoice.amount + igst;
    const grandTotal = totalAmount - igstInvoice.discount;



    const month = new Date(igstInvoice.payDate).toLocaleDateString('en-GB');

  return (
    <IGSTInvoiceContext.Provider
      value={{ igstInvoice, setIGSTInvoice, handleInputNum, handleInput, gstAmount,handleCustomInputChange,customPackage,selectedPackage,handleSelectChange,totalAmount, grandTotal, month,igst }}
    >
      {children}
    </IGSTInvoiceContext.Provider>
  );
};

export default IGSTInvoiceProvider;