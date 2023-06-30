import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getPosts } from "../services/appServices/postService";
export const DataContext = createContext();

const initialDataState = { posts: [] };
const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_POSTS":
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
      dataDispatch({ type: "GET_ALL_POSTS", payload: res.data.posts });
    }
  };
  useEffect(() => {
    getAllPosts(dataDispatch);
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export const useData = () => useContext(DataContext);
