import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  getPosts,
  likePostService,
  dislikePostService,
} from "../services/appServices/postService";
export const DataContext = createContext();

const initialDataState = { posts: [] };
const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_POSTS":
      console.log({ payload });
      return { ...state, posts: payload };

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
  useEffect(() => {
    getAllPosts(dataDispatch);
  }, []);

  return (
    <DataContext.Provider
      value={{ dataState, dataDispatch, likePostHandler, dislikePostHandler }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export const useData = () => useContext(DataContext);
