import axios from "axios";
export const loginService = async ({ username, password }) =>
  await axios.post(
    "/api/auth/login",
    {
      username,
      password,
    },

    { headers: { "Content-Type": "application/json" } }
  );
