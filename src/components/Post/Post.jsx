import React, { useState } from "react";
import {
  MdBookmarkBorder,
  MdBookmark,
  MdEdit,
  MdFavorite,
  MdFavoriteBorder,
  MdShare,
  MdComment,
  MdThumbUp,
  MdOutlineThumbUp,
  MdOutlineThumbDown,
  MdOutlineThumbDownAlt,
} from "react-icons/md";
import "./Post.css";
import { useData } from "../../context/DataContext";

const Post = ({ profileImg, username, content, postImg, likes, _id }) => {
  console.log(postImg);
  const { likePostHandler, dataDispatch, dislikePostHandler } = useData();
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
  return (
    <article className="post">
      <header className="head">
        <div className="user">
          <div className="profile-photo">
            <img src={profileImg} alt="profile" />
          </div>
          <div className="info">
            <h4>{username}</h4>
            <small>15 minutes ago</small>
          </div>
        </div>
        <span className="edit icon">
          <MdEdit />
        </span>
      </header>
      {postImg && (
        <div className="post-image">
          <img src={postImg} alt="post" className="img" />
        </div>
      )}

      <p className="caption">
        {readMore ? content : `${content.substring(0, 300)}...`}
        <button onClick={handleReadMore} className="btn readMore-btn">
          {readMore ? "show less" : "  read more"}
        </button>
      </p>
      <div className="action-button">
        <div className="interaction-buttons">
          <h3>{likeCount}</h3>
          <span className="icon" onClick={handleLikeBtn}>
            <MdOutlineThumbUp />{" "}
          </span>

          <span className="icon" onClick={handleDislikeBtn}>
            <MdOutlineThumbDown />
          </span>
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
