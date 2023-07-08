import axios from "axios";
export const signUpService = async ({ username, name, password }) =>
  await axios.post(
    "/api/auth/signup",
    {
      username,
      password,
      name,
    },

    { headers: { "Content-Type": "application/json" } }
  );
