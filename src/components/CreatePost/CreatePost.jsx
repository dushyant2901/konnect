import React, { useState } from "react";
import "./CreatePost.css";
import { usePost } from "../..";
import { toast } from "react-hot-toast";

const CreatePost = () => {
  const { createPostHandler } = usePost();
  const [postDetails, setPostDetails] = useState({
    content: "",
  });

  const handlePostDetails = (e) => {
    const { name, value } = e.target;
    setPostDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostBtn = (e) => {
    e.preventDefault();
    if (!postDetails.content) {
      toast.error("Empty Values Not Allowed!");
      return;
    }
    createPostHandler(postDetails);
    setPostDetails(() => ({ content: "" }));
  };

  return (
    <>
      <form className="form create-post-form">
        <div className="form-row">
          <textarea
            type="text"
            name="content"
            className="form-input"
            placeholder="Type your content here..."
            value={postDetails.content}
            onChange={handlePostDetails}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlePostBtn}
        >
          Create Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
