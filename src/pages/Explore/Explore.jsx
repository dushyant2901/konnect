import React from "react";
import { Posts } from "../../components";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const Explore = () => {
  const { posts } = useData().dataState;
  const { user } = useAuth();
  const filterNonUserPosts = (posts, user) =>
    posts.filter(({ username }) => username !== user.username);
  return <Posts posts={filterNonUserPosts(posts, user)} />;
};

export default Explore;
