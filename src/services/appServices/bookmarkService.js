import axios from "axios";

const getAllBookmarksService = async (encodedToken) =>
  axios.get("/api/users/bookmark", {
    headers: { authorization: encodedToken },
  });

const addBookmarkService = async (postId, encodedToken) =>
  await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

const removeBookmarkService = async (postId, encodedToken) =>
  await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
export { addBookmarkService, removeBookmarkService, getAllBookmarksService };
