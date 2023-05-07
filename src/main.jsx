import React from "react";
import ReactDOM from "react-dom";
import {  useRouteLoaderData  } from "react-router-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/orders",
    element: <Orders></Orders>,
    loader:() => fetch('products.json')
  },
  {
    path: "/inventory",
    element: <Inventory></Inventory>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
