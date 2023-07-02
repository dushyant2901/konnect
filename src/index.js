import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import AuthProvider from "./context/AuthContext";
import DataProvider from "./context/DataContext";
import UserProvider from "./context/UserContext";
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
