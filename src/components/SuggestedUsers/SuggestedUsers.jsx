import React from "react";

import "./SuggestedUser.css";
import { useUser, useAuth } from "../..";
import UserCard from "../UserCard/UserCard";

const SuggestedUsers = () => {
  const { users } = useUser();
  const { currentUser: user } = useAuth();

  const nonFollowingUsers = users?.filter(
    ({ followers, username }) =>
      username !== user.username &&
      !followers?.some(({ username }) => username === user.username)
  );
  return (
    <section className="suggested-users">
      <h3 className="section-title">Suggested Users</h3>
      <div className="suggested-users-container">
        {nonFollowingUsers?.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </div>
    </section>
  );
};

export default SuggestedUsers;
