import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import "./UserCard.css";
import { Link } from "react-router-dom";
import { useAuth, useUser } from "../../context";
import { getUserProfilePic, usersFollowedByUser } from "../../utils/helpers";
import { defaultAvatar } from "../../utils/constants";

const UserCard = ({ user }) => {
  const { name, username, _id } = user;
  const { followUserHandler, unfollowUserHandler, users } = useUser();
  const { currentUser } = useAuth();

  const usersFollowedByCurrentUser = usersFollowedByUser(users, currentUser);

  const isUserFollowedByCurrentUser =
    usersFollowedByCurrentUser?.includes(username);

  const profilePic = getUserProfilePic(users, username) ?? defaultAvatar;

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
