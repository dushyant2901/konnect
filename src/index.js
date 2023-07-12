import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import {
  UserProvider,
  AuthProvider,
  PostProvider,
  ThemeProvider,
  useAuth,
  usePost,
  useUser,
  useTheme,
} from "./context";
export { usePost, useAuth, useUser, useTheme };

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <PostProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </PostProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
