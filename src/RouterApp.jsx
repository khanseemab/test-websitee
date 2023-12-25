import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Dashboard from "./Employee/Dashboard";
import Login from "./pages/Login/Login";
import ClientDetail from "./pages/clientDetails/ClientDetail";
import Client from "./pages/Client/Clients";
import ClientForm from "./components/addClientForm/clientForm";
import ContactPage from "./pages/Contact/Contact";
import ContactEmployee from "./pages/Contact/ContactEmployee";
import About from "./pages/AboutUs/About";
import Invoice from "./pages/Invoice/Invoice";
import Services from "./pages/Services/Services";
// import MainInvoice from "./pages/Invoice/MainInvoice";
import CatalogueServices from "./pages/Services/CatalogueServices/CatalogueServices";
import WebDev from "./pages/Services/WebDev/WebDev";
import Pricing from "./pages/Pricing/Pricing";
import WhyUs from "./pages/WhyUS/WhyUs";
import SEO from "./pages/Services/SEO/SEO";
import SMO from "./pages/Services/SMO/SMO";
import SEM from "./pages/Services/SEM/SEM";
import DigitalMarketing from "./pages/Services/DigitalMarketing/DigitalMarketing";
import Performa from "./pages/Performa/Performa";

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
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/client",
    element: <Client />,
  },
  {
    path: "/clientform",
    element: <ClientForm />,
  },
  {
    path: ":clientdetail",
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
    element: <SEM/>
  },
  {
    path: "/services/digital-marketing",
    element: <DigitalMarketing/>
  },
  {
    path: "/services/pricing",
    element: <Pricing />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/performa",
    element: <Performa/>
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
