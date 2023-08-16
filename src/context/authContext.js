import React, { useContext, createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { loginService } from "../services/authService/loginService";
import { signUpService } from "../services/authService/signUpService";
import { getAllUsersService } from "../services/appServices/usersService";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const localStorageToken = localStorage.getItem("token");
  console.log({ localStorageToken });
  const [token, setToken] = useState(localStorageToken || "");
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const currentLoggedInUser = JSON.parse(localStorage.getItem("userData"));
    console.log({ currentLoggedInUser });
    if (currentLoggedInUser) {
      setIsUserLoggedIn(true);
      setCurrentUser(currentLoggedInUser);
      navigate("/");

      // const localStorageToken = localStorage.getItem("token");
      // setToken(localStorageToken);
    }
    setIsLoading(false);
    // const initialLogInHandler = async () => {
    //   try {
    //     const { data: users } = await getAllUsersService();

    //     const userInDB = users?.some(
    //       ({ username }) => username === currentLoggedInUser.username
    //     );
    //     if (userInDB) {
    //       setIsUserLoggedIn(true);
    //       setCurrentUser(currentLoggedInUser);
    //       toast.success(`Welcome back, ${currentUser.name}!`, { icon: "👋" });
    //       navigate(location?.state?.from?.pathname || "/", { replace: true });
    //     }
    //   } catch (e) {
    //     console.error(e);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // if (currentLoggedInUser) {
    //   initialLogInHandler();
    // }
  }, []);
  console.log({ currentUser });

  const signUpHandler = async (userdetails) => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { encodedToken, createdUser },
      } = await signUpService({ ...userdetails });

      if (status === 201) {
        localStorage.setItem("token", encodedToken);
        const { username, name, profilePic, _id } = createdUser ?? {};
        console.log({ createdUser });
        const currentUser = { username, name, profilePic, _id };
        localStorage.setItem("userData", JSON.stringify(currentUser));
        setToken(encodedToken);
        setIsUserLoggedIn(true);
        setCurrentUser(currentUser);
        toast.success(`Hi, ${createdUser.name}!`, {
          icon: "👋",
        });
        console.log({ createdUser });
        navigate("/", { replace: true });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 422) {
        toast.error("Username Already Exists. Please choose another one.");
      } else {
        toast.error("Something went wrong");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (userDetails) => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await loginService({ ...userDetails });

      if (status === 200) {
        localStorage.setItem("token", encodedToken);
        const { username, name, profilePic, _id } = foundUser;

        const currentUser = { username, name, profilePic, _id };

        localStorage.setItem("userData", JSON.stringify(currentUser));
        setCurrentUser(currentUser);
        setToken(encodedToken);
        setIsUserLoggedIn(true);
        toast.success(`Welcome back, ${currentUser.name}!`, { icon: "👋" });
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 404) {
        toast.error("The username you entered is not registered.");
      } else if (status === 401) {
        toast.error(
          "The credentials you entered are invalid. Please try again."
        );
      } else {
        toast.error("Something went wrong");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setToken(null);
    setCurrentUser(null);
    setIsUserLoggedIn(false);
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isUserLoggedIn,
        setIsUserLoggedIn,
        signUpHandler,
        loginHandler,
        logoutHandler,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
