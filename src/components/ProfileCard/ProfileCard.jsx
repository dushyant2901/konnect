import React from "react";
import "./ProfileCard.css";
const ProfileCard = ({ user }) => {
  const { username, name, profilePic, bio, followers, following } = user ?? {};
  return (
    <article className="profile-card">
      <header className="profile-card-header">
        <div className="profile-photo">
          <img src={profilePic} alt="profile" />
        </div>
        <div className="action-btn">
          <button className="btn btn-primary btn-small">Edit Profile</button>
          <button className="btn btn-small">logout</button>
        </div>
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
