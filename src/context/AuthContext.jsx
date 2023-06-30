import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  //   const navigate = useNavigate();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const initialLogInHandler = async () => {
      try {
        const res = await axios.get("/api/users");
        const userInDB = res.data.users.some(
          ({ username }) => username === currentUser.username
        );
        if (userInDB) {
          //   navigate("/");
          setUser(() => currentUser);
          setUserLoggedIn(true);
        }
      } catch (e) {
        console.error(e);
      }
    };
    if (currentUser) {
      initialLogInHandler();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, userLoggedIn, setUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
