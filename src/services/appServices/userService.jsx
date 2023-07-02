import axios from "axios";
export const getAllUserService = async () => await axios.get(`/api/users/`);
export const getUserService = async (userId) =>
  await axios.get(`/api/users/${userId}`);
