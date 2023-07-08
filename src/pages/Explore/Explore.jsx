import React from "react";
import { Posts } from "../../components";
import { usePost, useAuth } from "../../context";

const Explore = () => {
  const { posts } = usePost();
  const { currentUser: user } = useAuth();
  const filterNonUserPosts = (posts, user) =>
    posts.filter(({ username }) => username !== user.username);
  return <Posts posts={filterNonUserPosts(posts, user)} />;
};

export default Explore;
