import React from "react";
import "./Header.css";
import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h3 className="logo">KONNECT</h3>
        <div className="search-bar">
          <span className="search-icon">
            <BiSearchAlt2 />
          </span>
          <input type="search" placeholder="Search for users" />
        </div>
        <div className="profile-photo">
          <img src="" alt="profile pic" className="img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
