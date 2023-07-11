import React from "react";
import Post from "../Post/Post";
import EditModal from "../EditModal/EditModal";
import { usePost } from "../../context";
import Loader from "../Loader/Loader";
import { sortPosts } from "../../utils/sortPosts";
import Sort from "../Sort/Sort";

const Posts = ({ posts = [] }) => {
  const { isEditModalOpen, isLoading, sortBy } = usePost();
  let sortedPosts = sortPosts(posts, sortBy);
  return (
    <>
      <section className="posts">
        {isLoading && <Loader />}
        {!isLoading && sortedPosts.length === 0 && <h4>No Posts To Display</h4>}
        {!isLoading && sortedPosts.length > 0 && <Sort />}
        {!isLoading &&
          sortedPosts?.map((post) => <Post key={post._id} {...post} />)}
      </section>
      {isEditModalOpen && !isLoading && <EditModal />}
    </>
  );
};

export default Posts;
