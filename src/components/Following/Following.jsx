import React from "react";
import UserCard from "../UserCard/UserCard";
import "./Following.css";

const Following = ({ users = [], isTypeFollowing }) => {
  return (
    <section className="following">
      {isTypeFollowing ? <h4>Following</h4> : <h4>Folowers</h4>}
      {users.length === 0 &&
        (isTypeFollowing ? (
          <h4>You are not Following anyone.</h4>
        ) : (
          <h4>You dont have any folowers</h4>
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
