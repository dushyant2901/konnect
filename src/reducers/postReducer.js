import { actionTypes } from "../utils/constants";
const {
  GET_ALL_POSTS,
  LIKE_POST,
  DISLIKE_POST,
  CREATE_NEW_POST,
  DELETE_POST,
  EDIT_POST,
  GET_SINGLE_POST,
  SORT_BY,
} = actionTypes;

export const postReducer = (state, { type, payload }) => {
  console.log({ type, payload });
  switch (type) {
    case GET_ALL_POSTS:
      return { ...state, posts: payload };
    case CREATE_NEW_POST:
      return { ...state, posts: payload };
    case LIKE_POST:
      return { ...state, posts: payload };
    case DISLIKE_POST:
      return { ...state, posts: payload };
    case DELETE_POST:
      return { ...state, posts: payload };
    case EDIT_POST:
      return { ...state, posts: payload };
    case GET_SINGLE_POST:
      return { ...state, post: payload };
    case SORT_BY:
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};
