import { createContext, useEffect, useState } from "react";

export const PerformaContext = createContext();

const PerformaProvider = ({ children }) => {
  const [performa, setPerforma] = useState({
    name: "",
    address: "",
    GSTIN: "",
    state: "",
    code: "",
    serviceName: "",
    amount: '',
    discount: "",
    gstRate: "",
    executive:''
  });

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
      return { ...prevalue, [name]: value };
    });
  };

    const gstAmount = performa.amount * performa.gstRate / 100;
    const totalAmount = performa.amount - gstAmount;
    const grandTotal = totalAmount - performa.discount;
   
  const month = new Date(performa.payPeriod).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  return (
    <PerformaContext.Provider
      value={{ performa, setPerforma, handleInputNum, handleInput, gstAmount, totalAmount, grandTotal, month }}
    >
      {children}
    </PerformaContext.Provider>
  );
};

export default PerformaProvider;
