import { actionTypes } from "../utils/constants";
const {
  GET_ALL_USERS,
  GET_ALL_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_SINGLE_USER,
  ADD_FOLLOWER,
  ADD_FOLLOWING,
  REMOVE_FOLLOWING,
  REMOVE_FOLLOWER,
  SEARCH_USER,
  EDIT_USER,
} = actionTypes;

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return { ...state, users: payload };

    case GET_ALL_BOOKMARKS:
      return { ...state, bookmarks: payload };

    case ADD_BOOKMARK:
      return { ...state, bookmarks: payload };

    case REMOVE_BOOKMARK:
      return { ...state, bookmarks: payload };

    case GET_SINGLE_USER:
      return { ...state, user: payload };

    case ADD_FOLLOWER:
      return {
        ...state,
        users: state.users?.map((user) =>
          user.username === payload.followUser.username
            ? { ...user, followers: payload.followUser.followers }
            : user
        ),
      };

    case ADD_FOLLOWING:
      return {
        ...state,
        users: state.users?.map((user) =>
          user.username === payload.user.username
            ? {
                ...user,
                following: payload.user.following,
              }
            : user
        ),
      };
    case REMOVE_FOLLOWER:
      return {
        ...state,
        users: state.users?.map((user) =>
          user.username === payload.followUser.username
            ? { ...user, followers: payload.followUser.followers }
            : user
        ),
      };
    case REMOVE_FOLLOWING:
      return {
        ...state,
        users: state.users?.map((user) =>
          user.username === payload.user.username
            ? {
                ...user,
                following: payload.user.following,
              }
            : user
        ),
      };

    case SEARCH_USER:
      return { ...state, searchInput: payload };

    case EDIT_USER:
      return {
        ...state,
        users: state.users?.map((user) =>
          payload.user?._id === user._id ? payload.user : user
        ),
      };

    default:
      return state;
  }
};
