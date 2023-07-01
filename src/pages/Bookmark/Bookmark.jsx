import React from "react";
import { Posts } from "../../components";
import { useData } from "../../context/DataContext";
const Bookmark = () => {
  const { bookmarks } = useData().dataState;
  return (
    <div>
      <Posts posts={bookmarks} />
    </div>
  );
};

export default Bookmark;
