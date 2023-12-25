import { createContext,useRef, useState } from "react";
// import numberToWords from 'number-to-words';

export const PerformaContext = createContext();

const PerformaProvider = ({ children }) => {
  const [performa, setPerforma] = useState({
    name: "",
    address:"",
    GSTIN: "",
    state: "",
    code: "",
    serviceName: "",
    amount:'',
    discount: "",
    gstRate:""
  });
  // const [words, setWords] = useState('');

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
  }




    // const word = numberToWords.toWords(Number(performa.amount));
    // setWords(word);


const gstAmount= performa.amount*performa.gstRate/100
const totalAmount= performa.amount-gstAmount
const grandTotal= totalAmount-performa.discount

  const month = new Date(performa.payPeriod).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

 
  // const grossEarning = performa.salary+performa.HRA+performa.incentives;
  // const totalDeduction =performa.incomeTax+performa.PF;
  // const totalPay = performa.salary + performa.HRA + performa.incentives - performa.incomeTax - performa.PF;

 

  return (
    <>
      <PerformaContext.Provider
        value={{ performa, setPerforma, handleInputNum, handleInput,gstAmount,totalAmount,grandTotal ,month}}
      >
        {children}
      </PerformaContext.Provider>
    </>
  );
}
export default PerformaProvider;
