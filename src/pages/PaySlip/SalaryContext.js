import { createContext,useRef, useState } from "react";
// import generatePDF from "react-to-pdf";

export const SalaryContext = createContext();

const SalaryProvider = ({ children }) => {
  const [employee, setEmployee] = useState({
    name: "",
    id: "",
    payPeriod: "",
    paidDays: "",
    salary: "",
    incentives:'',
    incomeTax: "",
    HRA: "",
    PF: "",
  });


  const handleInputNum = (e) => {
    setEmployee((prev) => {
      const { name, value } = e.target;
      const numericValue = parseFloat(value);
      return { ...prev, [name]: numericValue };
    });
  };
  const handleInput = (e) => {
    setEmployee((prevalue) => {
      const { name, value } = e.target;

      return { ...prevalue, [name]: value };
    });
  }


//   const pdfContainerRef = useRef();
    
//  const downloadPDF = () => {
//     if (pdfContainerRef) {
//       const options = {
//         filename: "pay-slip.pdf",
        
//         page: {
//           // margin is in MM, default is Margin.NONE = 0
//           margin: 12,
//           // default is 'A3'
//           format: 'a6',
//           // default is 'portrait'
//           orientation: 'landscape',
//        },
//       };
  
//       generatePDF(pdfContainerRef, options);
//       console.log(pdfContainerRef);
//     } else {
//       console.error("pdfContainerRef is null or undefined");
//   }
// };




  const month = new Date(employee.payPeriod).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

 
  const grossEarning = employee.salary+employee.HRA+employee.incentives;
  const totalDeduction =employee.incomeTax+employee.PF;
  const totalPay = employee.salary + employee.HRA + employee.incentives - employee.incomeTax - employee.PF;



  return (
    <>
      <SalaryContext.Provider
        value={{ employee, setEmployee, handleInputNum, handleInput ,totalPay,grossEarning,totalDeduction,month}}
      >
        {children}
      </SalaryContext.Provider>
    </>
  );
}
export default SalaryProvider;
