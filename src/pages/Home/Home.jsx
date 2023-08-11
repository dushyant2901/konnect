import React from "react";
import "./Home.css";
import { CreatePost, Posts, Loader } from "../../components";
import { useAuth, usePost, useUser } from "../..";
import { usersFollowedByUser } from "../../utils/helpers";

const Home = () => {
  const { posts, isLoading } = usePost();
  const { currentUser } = useAuth();
  const { users } = useUser();

  const usersFollowedByCurrentUser = usersFollowedByUser(users, currentUser);
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
