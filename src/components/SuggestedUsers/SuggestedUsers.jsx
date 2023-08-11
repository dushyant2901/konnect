import React from "react";
import "./SuggestedUser.css";
import { useUser, useAuth } from "../..";
import UserCard from "../UserCard/UserCard";
import { usersNotFollowedByUser } from "../../utils/helpers";

const SuggestedUsers = () => {
  const { users } = useUser();
  const { currentUser } = useAuth();

  const nonFollowingUsers = usersNotFollowedByUser(users, currentUser);

  return (
    <section className="suggested-users">
      <h3 className="section-title">Suggested Users</h3>
      <div className="suggested-users-container">
        {nonFollowingUsers.length === 0 && (
          <p>No more suggestions left as you followed everyone...</p>
        )}
        {nonFollowingUsers.length > 0 &&
          nonFollowingUsers
            ?.slice(0, 5)
            .map((user) => (
              <UserCard user={user} key={user._id} type="suggested" />
            ))}
      </div>
    </section>
  );
};

export default SuggestedUsers;
