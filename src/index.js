
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Step 1. Import react-router functions
import { BrowserRouter, Route } from "react-router-dom";
// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);