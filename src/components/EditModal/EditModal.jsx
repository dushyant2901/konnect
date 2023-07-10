import React, { useEffect, useState } from "react";
import "./EditModal.css";
import { MdClose } from "react-icons/md";
import { usePost } from "../../context";

const EditModal = () => {
  const {
    closeEditModal,
    editId,
    getSinglePost,
    post,
    editPostHandler,
    setEditId,
    isLoading,
  } = usePost();

  const [postDetails, setPostDetails] = useState({
    content: "",
    postImg: "",
  });

  useEffect(() => {
    getSinglePost(editId);
  }, [editId]);

  useEffect(() => {
    setPostDetails({ content: post?.content, postImg: post?.postImg });
  }, [post]);

  const handlePostDetails = (e) => {
    const { name, value } = e.target;
    setPostDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostBtn = (e) => {
    e.preventDefault();
    // handle empty create post
    editPostHandler(editId, { ...postDetails });
    setPostDetails(() => ({ content: "" }));
    closeEditModal();
  };

  const handleCloseBtn = () => {
    closeEditModal();
    setPostDetails({ content: "", postImg: "" });
    setEditId(null);
  };

  return (
    <article className="edit-modal-wrapper">
      <form className="edit-modal form">
        <span className="close-modal-btn icon" onClick={handleCloseBtn}>
          <MdClose />
        </span>
        <h3 className="form-title">Edit Post</h3>
        <div className="form-row">
          <textarea
            name="content"
            id="content"
            value={postDetails.content}
            onChange={handlePostDetails}
          ></textarea>
        </div>
        <div className="img-container">
          <img src={postDetails.postImg} alt="" className="img" />
        </div>
        <button
          className="btn btn-block btn-primary post-btn"
          onClick={handlePostBtn}
        >
          Submit
        </button>
      </form>
    </article>
  );
};

export default EditModal;
