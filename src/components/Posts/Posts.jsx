import React from "react";
import { feeds as posts } from "../../data/feeds";
import Post from "../Post/Post";
const Posts = () => {
  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
