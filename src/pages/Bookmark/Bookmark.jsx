import React from "react";
import { Posts } from "../../components";
import { useUser, usePost } from "../../context";
import { mapIdsToPost, filterFalsyValue } from "../../utils/helpers";

const Bookmark = () => {
  const { bookmarks } = useUser();
  const { posts } = usePost();

  const bookmarksData = filterFalsyValue(
    mapIdsToPost(bookmarks?.reverse(), posts)
  );

  return (
    <div>
      {" "}
      <Posts posts={bookmarksData} />{" "}
    </div>
  );
};

export default Bookmark;
