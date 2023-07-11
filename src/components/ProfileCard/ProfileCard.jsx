import React from "react";
import "./ProfileCard.css";
import { useAuth, useUser } from "../../context";
import { MdAdd, MdRemove } from "react-icons/md";

const ProfileCard = ({ user }) => {
  const { username, name, profilePic, bio, followers, following, _id } =
    user ?? {};
  const { currentUser, logoutHandler } = useAuth();
  const { followUserHandler, unfollowUserHandler } = useUser();

  const isFollowedByCurrentUser = user?.followers
    ?.map(({ follower }) => follower)
    ?.includes(currentUser.username);

  const handleLogoutBtn = () => {
    logoutHandler();
  };
  const handleFollowBtn = () => followUserHandler(_id);

  const handleUnfollowBtn = () => unfollowUserHandler(_id);
  return (
    <article className="profile-card">
      <header className="profile-card-header">
        <div className="profile-photo">
          <img src={profilePic} alt="profile" />
        </div>
        {currentUser._id === _id && (
          <div className="action-btn">
            <button className="btn btn-primary btn-small">Edit Profile</button>
            <button className="btn btn-small" onClick={handleLogoutBtn}>
              logout
            </button>
          </div>
        )}

        {currentUser._id !== _id && !isFollowedByCurrentUser && (
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
        {currentUser._id !== _id && isFollowedByCurrentUser && (
          <button
            className="btn btn-secondary btn-small following-btn"
            onClick={handleUnfollowBtn}
          >
            Following
            <span className="icon">
              <MdRemove />
            </span>
          </button>
        )}
      </header>
      <div className="info">
        <h4>{name}</h4>
        <small>{username}</small>
      </div>
      <p className="user-bio">{bio}</p>
      <a href="">portfolio link</a>
      <p>created at</p>
      <div className="following-info">
        <p>{followers?.length} followers</p>
        <p>{following?.length} following</p>
      </div>
    </article>
  );
};

export default ProfileCard;
