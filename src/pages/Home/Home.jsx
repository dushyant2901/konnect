import React from "react";
import "./Home.css";
import { CreatePost, Posts } from "../../components";

import { usePost } from "../..";
const Home = () => {
  const { posts } = usePost();
  return (
    <>
      <CreatePost />
      <Posts posts={posts} />
    </>
  );
};

export default Home;
