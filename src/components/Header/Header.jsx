import React from "react";
import "./Header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useTheme, useUser } from "../../context";
import { colorsArray, defaultAvatar } from "../../utils/constants";
import { getUserProfilePic } from "../../utils/helpers";

const Header = () => {
  const { currentUser } = useAuth();
  const { _id } = currentUser ?? {};
  const { searchInput, searchInputHandler, users } = useUser();
  const { isDarkMode, switchDarkMode, changePrimaryColor, primaryColor } =
    useTheme();

  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    navigate("/search");
    searchInputHandler(e.target.value);
  };
  const profilePic =
    getUserProfilePic(users, currentUser?.username) ?? defaultAvatar;
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
            onInput={handleSearchInput}
            value={searchInput}
          />
        </div>
        <button className="theme-btn" onClick={switchDarkMode}>
          <span className="icon">
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </span>
        </button>
        <div className="theme-container">
          {colorsArray.map((color) => (
            <span
              className={`icon ${color === primaryColor && "theme-btn-active"}`}
              style={{ background: `hsl(${color},60%, 65%)` }}
              onClick={() => changePrimaryColor(color)}
            >
              {/* {color} */}
            </span>
          ))}
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
