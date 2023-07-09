import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import "./UserCard.css";
import { useUser } from "../../context";
const UserCard = ({ user, type }) => {
  const { name, username, profilePic, _id } = user;
  console.log({ user, profilePic });
  const { followUserHandler, unfollowUserHandler } = useUser();

  const handleFollowBtn = () => followUserHandler(_id);
  const handleUnfollowBtn = () => unfollowUserHandler(_id);
  return (
    <article className="user-card">
      <div className="user">
        <div className="profile-photo">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <small>{username}</small>
        </div>
      </div>
      <div className="action">
        {type !== "followers" ? (
          <button
            className="btn btn-primary btn-small"
            onClick={handleFollowBtn}
          >
            Follow
            <span className="icon">
              <MdAdd />
            </span>
          </button>
        ) : (
          <button
            className="btn btn-primary btn-small"
            onClick={handleUnfollowBtn}
          >
            Remove
            <span className="icon">
              <MdRemove />
            </span>
          </button>
        )}
      </div>
    </article>
  );
};

export default UserCard;
