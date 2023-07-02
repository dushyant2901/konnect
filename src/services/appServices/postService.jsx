import axios from "axios";
export const getPosts = async () => await axios.get("/api/posts");
export const getUserPostsService = async (userId) =>
  await axios.get(`/api/posts/user/${userId}`);
export const likePostService = async (postId, token) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );
export const dislikePostService = async (postId, token) =>
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    { headers: { authorization: token } }
  );

export const createPostService = async (postData, token) =>
  await axios.post(
    `/api/posts`,
    { postData },
    { headers: { authorization: token } }
  );

export const deletePostService = async (postId, token) =>
  await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
