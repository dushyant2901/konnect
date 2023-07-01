import React from "react";
// import { feeds as posts } from "../../data/feeds";
import Post from "../Post/Post";
import CreatePost from "../CreatePost/CreatePost";

const Posts = ({ posts }) => {
  return (
    <section className="posts">
      <div className="">
        <CreatePost />
      </div>
      {posts?.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
