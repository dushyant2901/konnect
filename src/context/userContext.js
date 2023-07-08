import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { userReducer } from "../reducers/userReducer";
import {
  addBookmarkService,
  removeBookmarkService,
  getAllBookmarksService,
} from "../services/appServices/bookmarkService";
import {
  getAllUsersService,
  getUserByUserIdService,
} from "../services/appServices/usersService";
import { actionTypes } from "../utils/constants";
import { useAuth } from "./authContext";

const {
  GET_ALL_USERS,
  GET_SINGLE_USER,
  GET_ALL_BOOKMARKS,
  REMOVE_BOOKMARK,
  ADD_BOOKMARK,
} = actionTypes;

const initialUserState = {
  users: [],
  user: {},
  bookmarks: [],
};
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();
  const getAllUsers = async () => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { users },
      } = await getAllUsersService();
      if (status === 200) {
        userDispatch({ type: GET_ALL_USERS, payload: users });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getUserByUserId = async (userId) => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { user },
      } = await getUserByUserIdService(userId);
      if (status === 200) {
        console.log("first hello", user);
        userDispatch({ type: GET_SINGLE_USER, payload: user });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const getAllBookmarks = async () => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { bookmarks },
      } = await getAllBookmarksService(token);
      if (status === 200) {
        userDispatch({ type: GET_ALL_BOOKMARKS, payload: bookmarks });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const addBookmarkHandler = async (postId) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await addBookmarkService(postId, token);
      if (status === 200) {
        console.log("first vvvvvvvvvvvvvvvvvvv");
        userDispatch({ type: ADD_BOOKMARK, payload: bookmarks });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const removeBookmarkHandler = async (postId) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await removeBookmarkService(postId, token);
      if (status === 200) {
        userDispatch({ type: REMOVE_BOOKMARK, payload: bookmarks });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllBookmarks();
    getAllUsers();
  }, []);
  console.log("book", userState.bookmarks);
  return (
    <UserContext.Provider
      value={{
        ...userState,
        isLoading,
        getAllUsers,
        getUserByUserId,
        addBookmarkHandler,
        removeBookmarkHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
