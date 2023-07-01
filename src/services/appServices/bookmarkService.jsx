import axios from "axios";

export const getAllBookmarksService = async (token) =>
  await axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });

export const addToBookmarkService = async (postId, token) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
export const removeBookmarkService = async (postId, token) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
