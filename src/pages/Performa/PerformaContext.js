import { createContext, useEffect, useState } from "react";

export const PerformaContext = createContext();

const PerformaProvider = ({ children }) => {
  const [performa, setPerforma] = useState({
    name: "",
    address: "",
    GSTIN: "",
    state: "",
    code: "",
    package: "",
    marketplace:"",
    sku:"",
    details:"",
    amount: '',
    discount: "",
    gstRate: "",
    executive:''
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [customPackage, setCustomPackage] = useState('');


  const handleInputNum = (e) => {
    setPerforma((prev) => {
      const { name, value } = e.target;
      
      const numericValue = parseFloat(value);
      return { ...prev, [name]: numericValue };
    });
  };

  const handleInput = (e) => {
    setPerforma((prevalue) => {
      const { name, value } = e.target;
      // if (name === "package" && value === "") {
      //   return;
      // }
      // const newValue = name === "package" ? (value === "other" ? "" : value) : value;
     
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
    const gstAmount = performa.amount * performa.gstRate / 100;
    const totalAmount = performa.amount + gstAmount;
    const grandTotal = totalAmount - performa.discount;
   
  const month = new Date(performa.payPeriod).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  return (
    <PerformaContext.Provider
      value={{ performa, setPerforma, handleInputNum, handleInput, gstAmount, totalAmount, grandTotal, month,handleSelectChange,customPackage,selectedPackage,handleCustomInputChange }}
    >
      {children}
    </PerformaContext.Provider>
  );
};

export default PerformaProvider;
