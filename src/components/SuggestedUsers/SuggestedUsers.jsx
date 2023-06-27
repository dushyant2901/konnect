import React from "react";
import "./SuggestedUser.css";
const SuggestedUsers = () => {
  return (
    <section className="suggested-users">
      <h3 className="section-title">Suggested Users</h3>
      <div className="suggested-users-container">
        <article className="suggested-user">
          <div className="user">
            <div className="profile-photo">
              <img src="./images/profile-1.jpg" alt="profile" />
            </div>
            <div className="info">
              <h4>dushyant</h4>
              <small>15 minutes ago</small>
            </div>
          </div>
          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn decline-btn">Decline</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SuggestedUsers;
