import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ClientDetail from "./pages/clientDetails/ClientDetail";
import AdminAllClients from "./pages/Client/AdminAllClients";
import EmpAllClients from "./pages/Client/EmpAllClient";
import ClientForm from "./components/addClientForm/clientForm";
import ContactPage from "./pages/Contact/Contact";
import ContactEmployee from "./pages/Contact/ContactEmployee";
import About from "./pages/AboutUs/About";
import PaySlip from "./pages/PaySlip/PaySlip";
import Services from "./pages/Services/Services";
// import MainInvoice from "./pages/Invoice/MainInvoice";
import CatalogueServices from "./pages/Services/CatalogueServices/CatalogueServices";
import WebDev from "./pages/Services/WebDev/WebDev";
import Packages from "./pages/Pricing/Pricing";
import WhyUs from "./pages/WhyUS/WhyUs";
import SEO from "./pages/Services/SEO/SEO";
import SMO from "./pages/Services/SMO/SMO";
import SEM from "./pages/Services/SEM/SEM";
import DigitalMarketing from "./pages/Services/DigitalMarketing/DigitalMarketing";
import Performa from "./pages/Performa/Performa";
import FlipkartAccount from "./pages/Services/AccountManagement/FlipkartAccount";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import EmpDashboard from "./pages/Dashboard/EmpDashboard";
import TaxInvoice from "./pages/TaxInvoice/CGST-SGST/TaxInvoice";
import CurrentAccount from "./pages/Payment/CurrentAccount";
import SavingAccount from "./pages/Payment/SavingAccount";
import IGSTInvoice from "./pages/TaxInvoice/IGST/IGSTInvoice";
import Task from "./pages/Task/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
    path: "/admin-all-client",
    element: <AdminAllClients />,
  },
  {
    path: "/emp-all-client",
    element: <EmpAllClients />,
  },
  {
    path: "/clientform",
    element: <ClientForm />,
  },
  {
    path: "/clientdetail",
    // path: ":clientdetail",
    element: <ClientDetail />,
  },
  {
    path: "/all-task",
    element: <Task />,
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
    path: "/about",
    element: <About />,
  },
  {
    path: "/why-us",
    element: <WhyUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/catalogue-services",
    element: <CatalogueServices />,
  },
  {
    path: "/services/web-dev",
    element: <WebDev />,
  },
  {
    path: "/services/seo",
    element: <SEO />,
  },
  {
    path: "/services/smo",
    element: <SMO />,
  },
  {
    path: "/services/sem",
    element: <SEM />,
  },
  {
    path: "/services/digital-marketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/services/packages",
    element: <Packages />,
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
  {
    path: "/flipkart-account-management",
    element: <FlipkartAccount />,
  },
  {
    path: "/current-account",
    element: <CurrentAccount />,
  },
  {
    path: "/savings-account",
    element: <SavingAccount />,
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
