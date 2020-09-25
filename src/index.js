import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
