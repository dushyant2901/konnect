import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import "./UserCard.css";
import { Link } from "react-router-dom";
import { useAuth, useUser } from "../../context";
const UserCard = ({ user, type }) => {
  const { name, username, profilePic, _id } = user;
  const { followUserHandler, unfollowUserHandler, users } = useUser();
  const { currentUser } = useAuth();

  const usersFollowedByCurrentUser = users
    ?.find(({ _id }) => currentUser._id === _id)
    ?.following.map(({ username }) => username);

  const isUserFollowedByCurrentUser =
    usersFollowedByCurrentUser?.includes(username);

  const handleFollowBtn = () => followUserHandler(_id);

  const handleUnfollowBtn = () => unfollowUserHandler(_id);

  return (
    <article className="user-card">
      <div className="user">
        <Link to={`/profile/${_id}`}>
          <div className="profile-photo">
            <img src={profilePic} alt="profile pic" className="img" />
          </div>
        </Link>

        <div className="info">
          <h4>{name}</h4>
          <small>{username}</small>
        </div>
      </div>
      <div className="action">
        {/* {type === "following" ? (
          <button
            className="btn btn-primary btn-small"
            onClick={handleUnfollowBtn}
          >
            Unfollow
            <span className="icon">
              <MdRemove />
            </span>
          </button>
        ) : type === "followers" ? (
          <button className="btn btn-primary btn-small" disabled>
            Remove
            <span className="icon">
              <MdRemove />
            </span>
          </button>
        ) : (
          <button
            className="btn btn-primary btn-small"
            onClick={handleFollowBtn}
          >
            Follow
            <span className="icon">
              <MdAdd />
            </span>
          </button>
        )} */}
        {isUserFollowedByCurrentUser ? (
          <button
            className="btn btn-secondary btn-small following-btn"
            onClick={handleUnfollowBtn}
          >
            Following
            <span className="icon">
              <MdRemove />
            </span>
          </button>
        ) : (
          <button
            className="btn btn-primary btn-small"
            onClick={handleFollowBtn}
          >
            Follow
            <span className="icon">
              <MdAdd />
            </span>
          </button>
        )}
      </div>
    </article>
  );
};

export default UserCard;
