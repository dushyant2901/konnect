import React from "react";
import "./Home.css";
import { Posts } from "../../components";
import { useData } from "../../context/DataContext";
const Home = () => {
  const { posts } = useData().dataState;
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default Home;
