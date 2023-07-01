import React from "react";
import "./Home.css";
import { CreatePost, Posts } from "../../components";
import { useData } from "../../context/DataContext";
const Home = () => {
  const { posts } = useData().dataState;
  return (
    <>
      <CreatePost />
      <Posts posts={posts} />
    </>
  );
};

export default Home;
