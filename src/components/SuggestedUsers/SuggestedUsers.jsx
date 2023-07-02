import React from "react";

import "./SuggestedUser.css";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import UserCard from "../UserCard/UserCard";
const SuggestedUsers = () => {
  const {
    userState: { users },
  } = useUser();
  const { user } = useAuth();
  const nonFollowingUsers = users.filter(({ followers }) =>
    followers.some(({ _id }) => _id !== user._id)
  );
  return (
    <section className="suggested-users">
      <h3 className="section-title">Suggested Users</h3>
      <div className="suggested-users-container">
        {nonFollowingUsers.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </section>
  );
};

export default SuggestedUsers;
