import axios from "axios";

const getAllUsersService = async () => await axios.get("/api/users");

const getUserByUserIdService = async (userId) =>
  await axios.get(`/api/users/${userId}`);

const followUserService = async (followUserId, encodedToken) =>
  await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

const unfollowUserService = async (followUserId, encodedToken) =>
  await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: encodedToken } }
  );

const editUserProfileService = async (editInput, encodedToken) =>
  await axios.post(
    "/api/users/edit",
    { userData: editInput },
    { headers: { authorization: encodedToken } }
  );

export {
  getAllUsersService,
  getUserByUserIdService,
  followUserService,
  unfollowUserService,
  editUserProfileService,
};
