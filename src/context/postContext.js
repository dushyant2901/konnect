import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import {
  getAllPostsService,
  createPostService,
  deletePostService,
  likePostService,
  dislikePostService,
  getSinglePostService,
  editPostService,
} from "../services/appServices/postService";

import { actionTypes } from "../utils/constants";
import { useAuth } from "./authContext";
import { postReducer } from "../reducers";
const {
  GET_ALL_POSTS,
  LIKE_POST,
  DELETE_POST,
  DISLIKE_POST,
  CREATE_NEW_POST,
  GET_SINGLE_POST,
  EDIT_POST,
} = actionTypes;

const PostContext = createContext();

const initialPostState = { posts: [], post: null };

const PostProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(postReducer, initialPostState);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const { token } = useAuth();
  const getAllPosts = async () => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { posts },
      } = await getAllPostsService();
      if (status === 200) {
        postDispatch({ type: GET_ALL_POSTS, payload: posts });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const likePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await likePostService(postId, token);
      if (status === 201) {
        postDispatch({ type: LIKE_POST, payload: posts });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dislikePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await dislikePostService(postId, token);
      if (status === 201) {
        postDispatch({ type: DISLIKE_POST, payload: posts });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const createPostHandler = async ({ content, postImg }) => {
    setIsLoading(true);
    try {
      const {
        status,
        data: { posts },
      } = await createPostService({ content, postImg }, token);
      if (status === 201) {
        postDispatch({ type: CREATE_NEW_POST, payload: posts });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const deletePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await deletePostService(postId, token);
      if (status === 201) {
        postDispatch({ type: DELETE_POST, payload: posts });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getSinglePost = async (postId) => {
    try {
      const {
        status,
        data: { post },
      } = await getSinglePostService(postId);
      if (status === 200) {
        console.log("lalala");
        postDispatch({ type: GET_SINGLE_POST, payload: post });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editPostHandler = async (postId, { content }) => {
    try {
      const {
        status,
        data: { posts },
      } = await editPostService(postId, { content }, token);
      if (status === 201) {
        postDispatch({ type: EDIT_POST, payload: posts });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openEditModal = (editId) => {
    setIsEditModalOpen(true);
    setEditId(editId);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        ...postState,
        postDispatch,
        likePostHandler,
        dislikePostHandler,
        createPostHandler,
        deletePostHandler,
        openEditModal,
        closeEditModal,
        getSinglePost,
        setEditId,
        editId,
        isEditModalOpen,
        editPostHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => useContext(PostContext);

export { usePost, PostProvider };
