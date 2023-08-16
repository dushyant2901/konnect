import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { toast } from "react-hot-toast";
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
  editUserProfileService,
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
  SEARCH_USER,
  EDIT_USER,
} = actionTypes;

const initialUserState = {
  users: [],
  user: {},
  bookmarks: [],
  searchInput: "",
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { token, currentUser, setCurrentUser } = useAuth();
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
        toast.success("Added to bookmarks.");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Post is already bookmarked.");
      } else {
        console.error(error);
        toast.error("Something went wrong!");
      }
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
        toast.success("Removed from bookmarks.");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 400) {
        toast.error("Post not bookmarked yet.");
      } else {
        console.error(error);
        toast.error("Something went wrong!");
      }
    }
  };

  const followUserHandler = async (followUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await followUserService(followUserId, token);

      if (status === 200 || status === 201) {
        userDispatch({
          type: ADD_FOLLOWING,
          payload: { user },
        });
        userDispatch({
          type: ADD_FOLLOWER,
          payload: { followUser },
        });
        toast.success(`Followed @${followUser.username}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  const unfollowUserHandler = async (unfollowUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await unfollowUserService(unfollowUserId, token);

      if (status === 200 || status === 201) {
        userDispatch({ type: REMOVE_FOLLOWING, payload: { user } });
        userDispatch({
          type: REMOVE_FOLLOWER,
          payload: { followUser },
        });
        toast.success(`Unfollowed @${followUser.username}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };
  const editUserProfileHandler = async (editInput) => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { user },
      } = await editUserProfileService(editInput, token);
      if (status === 201) {
        userDispatch({ type: EDIT_USER, payload: user });
        setCurrentUser({
          ...currentUser,
          name: user?.name,
          username: user?.username,
          profilePic: user?.profilePic,
        });
        userDispatch({ type: GET_SINGLE_USER, payload: user });
        toast.success("Updated profile successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const searchInputHandler = (val) =>
    userDispatch({ type: SEARCH_USER, payload: val });

  const searchedUsers =
    userState.searchInput &&
    userState.users.filter(({ username }) =>
      username.toLowerCase().includes(userState.searchInput.toLowerCase())
    );

  const openEditUserModal = () => setIsEditProfileModalOpen(true);

  const closeEditUserModal = () => setIsEditProfileModalOpen(false);

  const resetUser = () => userDispatch({ type: "RESET_USER" });

  useEffect(() => {
    getAllBookmarks();
    getAllUsers();
  }, [currentUser]);

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
        searchInputHandler,
        editUserProfileHandler,
        searchedUsers,
        isEditProfileModalOpen,
        openEditUserModal,
        closeEditUserModal,
        resetUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
