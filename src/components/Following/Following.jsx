import React from "react";
import UserCard from "../UserCard/UserCard";
import "./Following.css";
const Following = ({ users = [], following }) => {
  return (
    <section className="following">
      {following ? <h4>Following</h4> : <h4>Folowers</h4>}
      {users.length === 0 &&
        (following ? (
          <h4>You are not Following anyone.</h4>
        ) : (
          <h4>You dont have any folowers</h4>
        ))}
      {users.length !== 0 &&
        users?.map((user) => <UserCard user={user} key={user._id} />)}
    </section>
  );
};

export default Following;
