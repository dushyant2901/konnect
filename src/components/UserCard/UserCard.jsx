import React from "react";
import { MdAdd } from "react-icons/md";
import "./UserCard.css";
const UserCard = ({ user }) => {
  const { name, username } = user;
  return (
    <article className="user-card">
      <div className="user">
        <div className="profile-photo">
          <img src="./images/profile-1.jpg" alt="profile" />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <small>{username}</small>
        </div>
      </div>
      <div className="action">
        <button className="btn btn-primary btn-small">
          Follow
          <span className="icon">
            <MdAdd />
          </span>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
