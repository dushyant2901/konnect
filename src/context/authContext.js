import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { loginService } from "../services/authService/loginService";
import { signUpService } from "../services/authService/signUpService";
import { getAllUsersService } from "../services/appServices/usersService";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  const localStorageToken = localStorage.getItem("token");

  const [token, setToken] = useState(localStorageToken || "");
  console.log(token);
  // const [token, setToken] = useState(localStorageToken?.token || "");

  useEffect(() => {
    const currentLoggedInUser = JSON.parse(localStorage.getItem("userData"));
    setCurrentUser(currentLoggedInUser);
    console.log({ currentLoggedInUser });
    const initialLogInHandler = async () => {
      try {
        console.log(" working =======================");
        const { data: users } = await getAllUsersService();
        console.log(" working =======================");
        console.log({ users });
        const userInDB = users?.some(
          ({ username }) => username === currentLoggedInUser.username
        );
        if (userInDB) {
          //   navigate("/");
          setCurrentUser(() => currentLoggedInUser);
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

  const signUpHandler = async (userdetails) => {
    try {
      const {
        status,
        data: { encodedToken, createdUser },
      } = await signUpService({ ...userdetails });

      if (status === 201) {
        localStorage.setItem("token", encodedToken);
        const { username, name, profileImg, _id } = createdUser;
        localStorage.setItem(
          "userData",
          JSON.stringify({ username, name, profileImg, _id })
        );
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const loginHandler = async (userDetails) => {
    console.log(userDetails);
    const { username, password } = userDetails;
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await loginService({ username, password });

      if (status === 200) {
        localStorage.setItem("token", encodedToken);
        const { username, name, profileImg, _id } = foundUser;
        localStorage.setItem(
          "userData",
          JSON.stringify({ username, name, profileImg, _id })
        );
        setCurrentUser(() => ({
          username,
          name,
          profileImg,
          _id,
        }));
        setUserLoggedIn(true);
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userLoggedIn,
        setUserLoggedIn,
        signUpHandler,
        loginHandler,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };