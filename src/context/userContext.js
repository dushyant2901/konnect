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
  followUserService,
  getAllUsersService,
  getUserByUserIdService,
  unfollowUserService,
} from "../services/appServices/usersService";
import { actionTypes } from "../utils/constants";
import { useAuth } from "./authContext";

const {
  GET_ALL_USERS,
  GET_SINGLE_USER,
  GET_ALL_BOOKMARKS,
  REMOVE_BOOKMARK,
  ADD_BOOKMARK,
  ADD_FOLLOWER,
  ADD_FOLLOWING,
  REMOVE_FOLLOWING,
  REMOVE_FOLLOWER,
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

  const followUserHandler = async (followUserId) => {
    console.log({ followUserId });
    try {
      const {
        status,
        data: { user, followUser },
      } = await followUserService(followUserId, token);
      console.log({ user, followUser });
      const _followUser = {
        _id: followUser._id,
        username: followUser.username,
        name: followUser.name,
        profilePic: followUser.profilePic,
      };
      const _user = {
        _id: user._id,
        username: user.username,
        name: user.name,
        profilePic: user.profilePic,
      };
      if (status === 200 || status === 201) {
        userDispatch({
          type: ADD_FOLLOWING,
          // payload: { _followUser, _user },
          payload: { followUser, user },
        });
        userDispatch({
          type: ADD_FOLLOWER,
          payload: { user, followUser },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowUserHandler = async (unfollowUserId) => {
    try {
      const {
        status,
        data: { user, followUser: unfollowedUser },
      } = await unfollowUserService(unfollowUserId, token);

      const _unfollowedUser = {
        _id: unfollowedUser._id,
        username: unfollowedUser.username,
        name: unfollowedUser.name,
        profilePic: unfollowedUser.profilePic,
      };

      if (status === 200 || status === 201) {
        userDispatch({ type: REMOVE_FOLLOWING, payload: user });
        userDispatch({
          type: REMOVE_FOLLOWER,
          payload: unfollowedUser,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBookmarks();
    getAllUsers();
  }, []);
  return (
    <UserContext.Provider
      value={{
        ...userState,
        isLoading,
        getAllUsers,
        getUserByUserId,
        addBookmarkHandler,
        removeBookmarkHandler,
        followUserHandler,
        unfollowUserHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
