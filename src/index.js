import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Compose } from "./utils/composer";
import { BrowserRouter } from "react-router-dom";

// styles
import "./index.scss";

// providers
import VendorsProvider from "./context/vendors/vendorsProvider";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Compose components={[VendorsProvider]}>
        <App />
      </Compose>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
