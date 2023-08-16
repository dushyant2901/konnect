import React from "react";
import UserCard from "../UserCard/UserCard";
import "./Following.css";
import { useAuth } from "../../context";

const Following = ({ users = [], isTypeFollowing, user }) => {
  const { currentUser } = useAuth();
  const isUserCurrentUser = user.username === currentUser.username;
  return (
    <section className="following">
      {isTypeFollowing ? <h4>Following</h4> : <h4>Folowers</h4>}
      {users.length === 0 &&
        (isTypeFollowing ? (
          <h4>
            {isUserCurrentUser ? "You are" : user.username + " is"} not
            Following anyone.
          </h4>
        ) : (
          <h4>
            {isUserCurrentUser ? "You" : user.username}dont have any followers
          </h4>
        ))}
      {users.length !== 0 &&
        users?.map((user) => (
          <UserCard
            user={user}
            key={user._id}
            type={isTypeFollowing ? "following" : "followers"}
          />
        ))}
    </section>
  );
};

export default Following;
