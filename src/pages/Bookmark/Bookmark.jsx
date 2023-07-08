import React from "react";
import { Posts } from "../../components";
import { useUser, usePost } from "../../context";
const Bookmark = () => {
  const { bookmarks } = useUser();
  const { posts } = usePost();
  console.log({ posts });
  const bookmarksData = bookmarks.reverse().map((id) => {
    return posts.find(({ _id }) => _id === id);
  });
  console.log({ bookmarksData });
  return (
    <div>
      {" "}
      <Posts posts={bookmarksData} />{" "}
    </div>
  );
};

export default Bookmark;
