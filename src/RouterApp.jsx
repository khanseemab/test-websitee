import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";


import Login from "./pages/Login/Login";
import ClientDetail from "./pages/clientDetails/ClientDetail";
import AdminAllClients from "./pages/Client/AdminAllClients";
import EmpAllClients from "./pages/Client/EmpAllClient";

import ClientForm from "./components/addClientForm/clientForm";
import ContactPage from "./pages/Contact/Contact";
import ContactEmployee from "./pages/Contact/ContactEmployee";
import ContactAdmin from "./pages/Contact/ContactAdmin";

import PaySlip from "./pages/PaySlip/PaySlip";

// import MainInvoice from "./pages/Invoice/MainInvoice";




import Performa from "./pages/Performa/Performa";

import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import EmpDashboard from "./pages/Dashboard/EmpDashboard";
import TaxInvoice from "./pages/TaxInvoice/CGST-SGST/TaxInvoice";

import IGSTInvoice from "./pages/TaxInvoice/IGST/IGSTInvoice";
import EmpAllTeam from "./pages/Client/EmpAllTeam";


const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/emp-dashboard",
    element: <EmpDashboard />,
  },
  {
    path: "/product-details",
    element: <AdminAllClients />,
  },
  {
    path: "/emp-product-details",
    element: <EmpAllClients />,
  },
  {
    path: "/clientform",
    element: <ClientForm />,
  },
  {
    path: "/emp-all-team",
    element: <EmpAllTeam />,
  },
  {
    path: "/clientdetail",
    // path: ":clientdetail",
    element: <ClientDetail />,
  },
 
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/contact-emp",
    element: <ContactEmployee />,
  },
  {
    path: "/contact-admin",
    element: <ContactAdmin/>,
  },


  {
    path: "/pay-slip",
    element: <PaySlip />,
  },
  {
    path: "/performa",
    element: <Performa />,
  },
  {
    path: "/sgst-cgst-invoice",
    element: <TaxInvoice />,
  },
  {
    path: "/igst-invoice",
    element: <IGSTInvoice />,
  },

  
]);
const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
