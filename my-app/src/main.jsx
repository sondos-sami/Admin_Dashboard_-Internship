import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Layout from "./components/Layout.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router.jsx";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
