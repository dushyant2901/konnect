import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import {
  UserProvider,
  AuthProvider,
  PostProvider,
  useAuth,
  usePost,
  useUser,
} from "./context";
export { usePost, useAuth, useUser };

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PostProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </PostProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
