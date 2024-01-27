// import React,{useState,useEffect,useRef} from 'react'
// import IGSTInvoiceProvider from './IGSTInvoiceContext'
// import IGSTInvoice from './IGSTInvoice'
// import MainIGSTTaxInvoice from "./Main-IGST-Invoice";

// const IGSTComponent = () => {
//     const [showMainIGSTTaxInvoice, setShowMainIGSTTaxInvoice] = useState(true);
//     const pdfIGSTTaxInvoiceRef = useRef();

//     useEffect(() => {
//         setShowMainIGSTTaxInvoice(true);
//         setShowMainIGSTTaxInvoice(false);
//       }, [setShowMainIGSTTaxInvoice]);
//   return (
//     <>
//         <IGSTInvoiceProvider>
//             <IGSTInvoice setShowMainIGSTTaxInvoice={setShowMainIGSTTaxInvoice} showMainIGSTTaxInvoice={showMainIGSTTaxInvoice}  pdfIGSTTaxInvoiceRef={pdfIGSTTaxInvoiceRef}/>
//             {showMainIGSTTaxInvoice && (
//           <MainIGSTTaxInvoice pdfIGSTTaxInvoiceRef={pdfIGSTTaxInvoiceRef} />
//         )}
//         <div className='d-flex justify-content-center align-items-center text-white mt-5'>
//           <h2 style={{color:"#fe4c1c"}}>Under Maintenance !!!</h2>
//         </div>
//         </IGSTInvoiceProvider>
//     </>
//   )
// }

// export default IGSTComponent;