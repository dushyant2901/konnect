import React from "react";
import Post from "../Post/Post";

const Posts = ({ posts = [] }) => {
  return (
    <section className="posts">
      {posts.length === 0 && <h4>No Posts To Display</h4>}
      {posts?.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </section>
  );
};

export default Posts;
