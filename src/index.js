import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/cart";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.querySelector("#root")
);
