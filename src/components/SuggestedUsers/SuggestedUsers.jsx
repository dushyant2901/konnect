import React from "react";

import "./SuggestedUser.css";
import { useUser, useAuth } from "../..";
import UserCard from "../UserCard/UserCard";

const SuggestedUsers = () => {
  const { users } = useUser();
  const { currentUser: user } = useAuth();

  const nonFollowingUsers = users?.filter(
    ({ followers, username }) =>
      username !== user?.username &&
      !followers?.some(({ username }) => username === user?.username)
  );

  return (
    <section className="suggested-users">
      <h3 className="section-title">Suggested Users</h3>
      <div className="suggested-users-container">
        {nonFollowingUsers.length === 0 && (
          <p>No more suggestions left as you followed everyone...</p>
        )}
        {nonFollowingUsers.length > 0 &&
          nonFollowingUsers?.map((user) => (
            <UserCard user={user} key={user._id} type="suggested" />
          ))}
      </div>
    </section>
  );
};

export default SuggestedUsers;
