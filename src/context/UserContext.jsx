import React, { createContext, useContext, useReducer, useEffect } from "react";
import { userReducer } from "../reducers/userReducer";
import { getAllUserService } from "../services/appServices/userService";
export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, { users: [] });
  const getAllUsers = async () => {
    try {
      const res = await getAllUserService();
      if (res.status === 200) {
        userDispatch({ type: "GET_ALL_USERS", payload: res.data.users });
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
