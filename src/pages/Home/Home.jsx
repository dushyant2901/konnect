import React from "react";
import "./Home.css";
import { CreatePost, Posts } from "../../components";

import { useAuth, usePost, useUser } from "../..";
import Loader from "../../components/Loader/Loader";
const Home = () => {
  const { posts, isLoading } = usePost();
  const { currentUser } = useAuth();
  const { users } = useUser();

  const usersFollowedByCurrentUser = users
    ?.find(({ _id }) => currentUser?._id === _id)
    ?.following.map(({ username }) => username);

  let _posts = posts?.filter(
    ({ username }) =>
      currentUser?.username === username ||
      usersFollowedByCurrentUser?.includes(username)
  );

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <CreatePost />
          <Posts posts={_posts} />
        </>
      )}
    </>
  );
};

export default Home;
