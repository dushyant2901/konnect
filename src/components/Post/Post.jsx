import React, { useState } from "react";
import {
  MdBookmarkBorder,
  MdBookmark,
  MdEdit,
  MdShare,
  MdComment,
  MdThumbUp,
  MdThumbDown,
  MdOutlineThumbUp,
  MdOutlineThumbDown,
  MdOutlineThumbDownAlt,
  MdDelete,
} from "react-icons/md";
import "./Post.css";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const Post = ({
  profileImg,
  username,
  content,
  postImg,
  likes,
  _id,
  createdAt,
}) => {
  // console.log({ content: content.length });
  const {
    likePostHandler,
    dataDispatch,
    dislikePostHandler,
    deletePostHandler,
  } = useData();
  const { user } = useAuth();
  const [readMore, setReadMore] = useState(false);

  const { likeCount, likedBy, dislikedBy } = likes;

  const handleReadMore = () => setReadMore(!readMore);

  const handleLikeBtn = () => {
    console.log("from like btn");
    likePostHandler(_id, dataDispatch);
  };
  const handleDislikeBtn = () => {
    console.log("from dislike btn");
    dislikePostHandler(_id, dataDispatch);
  };

  const isPostLikedByCurrentUser = (user, likedByUsers) =>
    likedByUsers.some(({ username }) => username === user.username);

  const isPostDislikedByCurrentUser = (user, dislikedByUsers) =>
    dislikedByUsers.some(({ username }) => username === user.username);

  const handleDeleteBtn = () => {
    deletePostHandler(_id, dataDispatch);
  };

  const getTimeStamp = (createdAt) => {
    // const currentTime = dayjs();
    // const difference = currentTime.diff(createdAt, "hours");
    // return difference >= 24
    //   ? dayjs(createdAt).format("D MMM")
    //   : dayjs(createdAt).fromNow();
  };
  const isPostUserCurrentUser = (username, user) => username === user.username;
  return (
    <article className="post">
      <header className="head">
        <div className="user">
          <div className="profile-photo">
            <img src={profileImg} alt="profile" />
          </div>
          <div className="info">
            <h4>{username}</h4>
            <small>{getTimeStamp(createdAt)} ago</small>
          </div>
        </div>
        {isPostUserCurrentUser(username, user) ? (
          <div>
            <span className="edit icon" onClick={handleDeleteBtn}>
              <MdDelete />
            </span>
            <span className="edit icon">
              <MdEdit />
            </span>
          </div>
        ) : (
          <span className="edit icon">
            <MdEdit />
          </span>
        )}
      </header>
      {postImg && (
        <div className="post-image">
          <img src={postImg} alt="post" className="img" />
        </div>
      )}

      <p className="caption">
        {readMore ? content : `${content.substring(0, 300)}`}
        {!readMore && content.length >= 300 && "...."}
        {content.length >= 300 && (
          <button onClick={handleReadMore} className="btn readMore-btn">
            {readMore ? "show less" : "read more"}
          </button>
        )}
      </p>
      <div className="action-button">
        <div className="interaction-buttons">
          <h3>{likeCount}</h3>
          {isPostLikedByCurrentUser(user, likedBy) ? (
            <span className="icon" onClick={handleLikeBtn}>
              <MdThumbUp />{" "}
            </span>
          ) : (
            <span className="icon" onClick={handleLikeBtn}>
              <MdOutlineThumbUp />{" "}
            </span>
          )}
          {isPostDislikedByCurrentUser(user, dislikedBy) ? (
            <span className="icon" onClick={handleDislikeBtn}>
              <MdThumbDown />
            </span>
          ) : (
            <span className="icon" onClick={handleDislikeBtn}>
              <MdOutlineThumbDown />
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
          <span className="icon">
            <MdBookmarkBorder />
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
