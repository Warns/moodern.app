import "./index.css";
import React, { useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { App } from "./App";

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const baseUrl = import.meta.env.BASE_URL;
const routerBasename =
  baseUrl === "/" ? undefined : baseUrl.replace(/\/$/, "");

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Missing #root element");
createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter {...(routerBasename ? { basename: routerBasename } : {})}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);