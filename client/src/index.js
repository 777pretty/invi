import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { AuthProvider } from "./context/AuthContext";
import { SideDrawerProvider } from "./context/SideDrawerContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SideDrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SideDrawerProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
