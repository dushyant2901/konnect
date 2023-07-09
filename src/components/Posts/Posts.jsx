import React from "react";
import Post from "../Post/Post";
import EditModal from "../EditModal/EditModal";
import { usePost } from "../../context";

const Posts = ({ posts = [] }) => {
  const { isEditModalOpen } = usePost();
  return (
    <>
      <section className="posts">
        {posts.length === 0 && <h4>No Posts To Display</h4>}
        {posts?.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </section>
      {isEditModalOpen && <EditModal />}
    </>
  );
};

export default Posts;
