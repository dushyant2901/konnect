import React from "react";
import "./Home.css";
import { CreatePost, Posts } from "../../components";

import { useAuth, usePost, useUser } from "../..";
const Home = () => {
  const { posts } = usePost();
  const { currentUser } = useAuth();
  const { users } = useUser();
  console.log(currentUser);

  const usersFollowedByCurrentUser = users
    .find(({ _id }) => currentUser._id === _id)
    ?.following.map(({ username }) => username);

  let _posts = posts?.filter(
    ({ username }) =>
      currentUser?.username === username ||
      usersFollowedByCurrentUser.includes(username)
  );

  return (
    <>
      <CreatePost />
      <Posts posts={_posts} />
    </>
  );
};

export default Home;
