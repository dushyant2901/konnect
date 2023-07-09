import React from "react";
import "./Header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";

const Header = () => {
  const { currentUser } = useAuth();
  const { profilePic, _id } = currentUser ?? {};

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h3 className="logo">KONNECT</h3>
        </Link>
        <div className="search-bar">
          <span className="icon">
            <BiSearchAlt2 />
          </span>
          <input type="search" placeholder="Search for users" />
        </div>
        <Link to={`profile/${_id}`}>
          <div className="profile-photo">
            <img src={profilePic} alt="profile pic" className="img" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
