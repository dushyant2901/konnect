import React, { useState } from "react";
import {
  MdBookmarkBorder,
  MdBookmark,
  MdEdit,
  MdShare,
  MdComment,
  MdThumbUp,
  MdOutlineThumbUp,
  MdDelete,
  MdMoreVert,
} from "react-icons/md";
import "./Post.css";
import { Link } from "react-router-dom";
import { useUser, useAuth, usePost } from "../..";
import {
  isPostLikedByCurrentUser,
  isPostBookmarked,
  isPostUserCurrentUser,
  getUserProfilePic,
  getPostDate,
} from "../../utils/helpers";
import { defaultAvatar } from "../../utils/constants";

const Post = ({
  username,
  content,
  postImg,
  likes,
  _id,
  userId,
  createdAt,
  mediaURL,
}) => {
  const {
    likePostHandler,
    dislikePostHandler,
    deletePostHandler,
    openEditModal,
  } = usePost();

  const { addBookmarkHandler, removeBookmarkHandler, bookmarks, users } =
    useUser();

  const { currentUser: user } = useAuth();

  const [readMore, setReadMore] = useState(false);

  const [moreOptions, setMoreOptions] = useState(false);

  const { likeCount, likedBy } = likes ?? {};

  const profilePic = getUserProfilePic(users, username) ?? defaultAvatar;

  const handleReadMore = () => setReadMore(!readMore);

  const handleLikeBtn = () => {
    likePostHandler(_id);
  };
  const handleDislikeBtn = () => {
    dislikePostHandler(_id);
  };

  const handleDeleteBtn = () => {
    setMoreOptions(false);
    deletePostHandler(_id);
  };
  const handleEditBtn = () => {
    openEditModal(_id);
    setMoreOptions(false);
  };
  const handleAddBookmarkBtn = () => {
    addBookmarkHandler(_id);
  };
  const handleRemoveBookmarkBtn = () => {
    removeBookmarkHandler(_id);
  };
  const handleMoreOptions = () => {
    setMoreOptions(true);
  };

  // TODO: close more option son click outside
  return (
    <article className="post">
      <header className="head">
        <div className="user">
          <Link to={`/profile/${userId}`}>
            <div className="profile-photo">
              <img src={profilePic} alt="profile" />
            </div>
          </Link>
          <div className="info">
            <h4>{username}</h4>
            <small>{getPostDate(createdAt)}</small>
          </div>
        </div>
        {isPostUserCurrentUser(username, user) && (
          <div className="more-options">
            {moreOptions ? (
              <div>
                <button onClick={handleDeleteBtn}>
                  <span className="icon">
                    <MdDelete />
                  </span>{" "}
                  Delete
                </button>
                <button onClick={handleEditBtn}>
                  <span className="icon">
                    <MdEdit />
                  </span>{" "}
                  Edit
                </button>{" "}
              </div>
            ) : (
              <span className="more-icon icon" onClick={handleMoreOptions}>
                <MdMoreVert />
              </span>
            )}
          </div>
        )}
      </header>{" "}
      <p className="caption">
        {readMore ? content : `${content?.substring(0, 300)}`}
        {!readMore && content?.length >= 300 && "...."}
        {content?.length >= 300 && (
          <button onClick={handleReadMore} className="btn readMore-btn">
            {readMore ? "show less" : "read more"}
          </button>
        )}
      </p>
      {postImg && (
        <div className="post-image">
          <img src={postImg} alt="post" className="img" />
        </div>
      )}
      {mediaURL && (
        <div className="post-image">
          <img src={mediaURL} alt="post" className="img" />
        </div>
      )}
      <div className="action-button">
        <div className="interaction-buttons">
          <h3 className="like-count">{likeCount}</h3>
          {isPostLikedByCurrentUser(user, likedBy) ? (
            <span className="icon" onClick={handleDislikeBtn}>
              <MdThumbUp />{" "}
            </span>
          ) : (
            <span className="icon" onClick={handleLikeBtn}>
              <MdOutlineThumbUp />{" "}
            </span>
          )}

          <span className="icon">
            <MdComment />
          </span>
          <span className="icon">
            <MdShare />{" "}
          </span>
        </div>
        <div className="bookmark">
          {isPostBookmarked(bookmarks, _id) ? (
            <span className="icon" onClick={handleRemoveBookmarkBtn}>
              <MdBookmark />
            </span>
          ) : (
            <span className="icon" onClick={handleAddBookmarkBtn}>
              <MdBookmarkBorder />
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default Post;
