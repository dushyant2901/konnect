import React from "react";
import "./Header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useUser } from "../../context";

const Header = () => {
  const { currentUser } = useAuth();
  const { profilePic, _id } = currentUser ?? {};
  const { searchInput, searchInputHandler } = useUser();
  const navigate = useNavigate();
  const handleSearchInput = (e) => {
    if (searchInput.length > 0) {
      navigate("/search");
    }
    searchInputHandler(e.target.value);
  };
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
          <input
            type="search"
            placeholder="Search for users"
            onChange={handleSearchInput}
            value={searchInput}
          />
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
