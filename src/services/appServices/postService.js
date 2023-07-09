import axios from "axios";

const getAllPostsService = async () => await axios.get("/api/posts");

const getSinglePostService = async (postId) =>
  await axios.get(`/api/posts/${postId}`);

const createPostService = async ({ content }, encodedToken) =>
  await axios.post(
    "/api/posts",
    { postData: { content } },
    { headers: { authorization: encodedToken } }
  );

const deletePostService = async (postId, encodedToken) =>
  await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: encodedToken },
  });

const editPostService = async (postId, { content }, encodedToken) =>
  await axios.post(
    `/api/posts/edit/${postId}`,
    { postData: { content } },
    {
      headers: { authorization: encodedToken },
    }
  );

const likePostService = async (postId, encodedToken) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

const dislikePostService = async (postId, encodedToken) =>
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

export {
  getAllPostsService,
  createPostService,
  editPostService,
  deletePostService,
  likePostService,
  dislikePostService,
  getSinglePostService,
};
