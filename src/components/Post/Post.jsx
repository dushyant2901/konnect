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

const Post = ({ profileImg, username, content, postImg, likes }) => {
  console.log(postImg);
  const [readMore, setReadMore] = useState(false);

  const { likeCount, likedBy, dislikedBy } = likes;

  const handleReadMore = () => setReadMore(!readMore);

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
          <span className="icon">
            <MdOutlineThumbUp />{" "}
          </span>
          <span className="icon">
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
