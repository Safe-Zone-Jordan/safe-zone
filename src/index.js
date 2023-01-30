import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./css/bootstrap-icons.css";
import "./css/bootstrap.min.css";
import "./css/safe-zone-template.css";
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
