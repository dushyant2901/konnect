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
      const { user, followUser: follow } = payload;
      // const { _user: followedByUser, _followUser: followedUser } = payload;
      return {
        ...state,
        users: state.users?.map(
          (user) =>
            user.username === follow.username
              ? { ...user, followers: follow.followers }
              : user
          // users: state.users?.map((user) =>
          //   user.username === followedUser.username
          //     ? { ...user, followers: [...user?.followers, followedByUser] }
          //     : user
        ),
      };

    case ADD_FOLLOWING:
      const { user: currentUser, followUser } = payload;
      // const { _user: currentUser, _followUser: followUser } = payload;

      return {
        ...state,
        users: state.users?.map((user) =>
          user.username === currentUser.username
            ? {
                ...user,
                following: currentUser.following,
                // following: [...user.following, { ...followUser }],
              }
            : user
        ),
        // user: {
        //   ...state.user,
        //   following: currentUser.following,
        //   // following: [...state?.user?.following, { ...followUser }],
        // },
      };
    case REMOVE_FOLLOWER:
      return {
        ...state,
        users: state.users?.map((user) =>
          user.username === payload.username
            ? {
                ...user,
                followers: payload.followers,
              }
            : user
        ),
      };
    case REMOVE_FOLLOWING:
      return {
        ...state,
        users: state.users?.map((user) =>
          user.username === payload.username
            ? {
                ...user,
                followers: payload.followers,
              }
            : user
        ),
        user: {
          ...state.user,
          following: payload.following,
          // following: [...state?.user?.following, { ...followUser }],
        },
      };
    default:
      return state;
  }
};
