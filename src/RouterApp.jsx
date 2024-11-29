import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login/Login";

import AdminAllClients from "./pages/Client/AdminAllClients";
import EmpAllClients from "./pages/Client/EmpAllClient";

import ContactEmployee from "./pages/Contact/ContactEmployee";
import ContactAdmin from "./pages/Contact/ContactAdmin";

// import MainInvoice from "./pages/Invoice/MainInvoice";

import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import EmpDashboard from "./pages/Dashboard/EmpDashboard";

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
    path: "/emp-all-team",
    element: <EmpAllTeam />,
  },

  {
    path: "/contact-emp",
    element: <ContactEmployee />,
  },
  {
    path: "/contact-admin",
    element: <ContactAdmin />,
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
