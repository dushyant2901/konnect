import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  getPosts,
  likePostService,
  dislikePostService,
  createPostService,
  deletePostService,
} from "../services/appServices/postService";
import {
  addToBookmarkService,
  removeBookmarkService,
  getAllBookmarksService,
} from "../services/appServices/bookmarkService";
export const DataContext = createContext();

const initialDataState = { posts: [], bookmarks: [] };
const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_POSTS":
      console.log({ payload });
      return { ...state, posts: payload };
    case "SET_BOOKMARKS":
      console.log({ payload });
      return { ...state, bookmarks: payload };

    default:
      break;
  }
  return state;
};

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const getAllPosts = async (dataDispatch) => {
    const res = await getPosts();
    if (res.status === 200) {
      console.log(res.data.posts);
      dataDispatch({ type: "SET_POSTS", payload: res.data.posts });
    }
  };
  const likePostHandler = async (postId, dataDispatch) => {
    console.log("from like post handler");
    const encodedToken = localStorage.getItem("token");
    const res = await likePostService(postId, encodedToken);
    console.log(encodedToken, res);
    if (res.status === 201) {
      console.log("from like post handler res");
      console.log(res.data.posts, "poat");
      dataDispatch({ type: "SET_POSTS", payload: res.data.posts });
    }
    // add error handling for already liked
  };
  const dislikePostHandler = async (postId, dataDispatch) => {
    console.log("from like post handler");
    const encodedToken = localStorage.getItem("token");
    const res = await dislikePostService(postId, encodedToken);
    console.log(encodedToken, res);
    if (res.status === 201) {
      console.log("from dislike post handler res");
      console.log(res.data.posts, "poat");
      dataDispatch({ type: "SET_POSTS", payload: res.data.posts });
    }
    // add error handling for already liked
  };
  const createPostHandler = async (postData, dataDispatch) => {
    console.log("from create post handler");
    const encodedToken = localStorage.getItem("token");
    const res = await createPostService(postData, encodedToken);
    console.log(encodedToken, res);
    if (res.status === 201) {
      console.log("from dislike post handler res");
      console.log(res.data.posts, "poat");
      dataDispatch({ type: "SET_POSTS", payload: res.data.posts });
    }
    // add error handling for already liked
  };
  const deletePostHandler = async (postId, dataDispatch) => {
    console.log("from create post handler");
    const encodedToken = localStorage.getItem("token");
    const res = await deletePostService(postId, encodedToken);
    console.log(encodedToken, res);
    if (res.status === 201) {
      console.log("from delete post handler res");
      console.log(res.data.posts, "poat");
      dataDispatch({ type: "SET_POSTS", payload: res.data.posts });
    }
    // add error handling for already liked
  };

  const getAllBookmarks = async (dataDispatch) => {
    const encodedToken = localStorage.getItem("token");
    const res = await getAllBookmarksService(encodedToken);
    if (res.status === 200) {
      dataDispatch({ type: "SET_BOOKMARKS", payload: res.data.bookmarks });
    }
  };
  const addToBookmarkHandler = async (postId) => {
    const encodedToken = localStorage.getItem("token");
    const res = await addToBookmarkService(postId, encodedToken);
    if (res.status === 200) {
      dataDispatch({ type: "SET_BOOKMARKS", payload: res.data.bookmarks });
    }
  };
  const removeBookmarkHandler = async (postId) => {
    const encodedToken = localStorage.getItem("token");
    const res = await removeBookmarkService(postId, encodedToken);
    if (res.status === 200) {
      dataDispatch({ type: "SET_BOOKMARKS", payload: res.data.bookmarks });
    }
  };
  useEffect(() => {
    getAllPosts(dataDispatch);
    getAllBookmarks(dataDispatch);
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        likePostHandler,
        dislikePostHandler,
        createPostHandler,
        deletePostHandler,
        addToBookmarkHandler,
        removeBookmarkHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export const useData = () => useContext(DataContext);
