// Structure of imports used across the app
// 1st 3rd party library imports
// 2nd absolute imports
// 3rd relative imports

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "@features";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
