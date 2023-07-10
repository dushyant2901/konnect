import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../context";
import { MdBookmark, MdExplore, MdHome, MdPerson } from "react-icons/md";

const Navigation = () => {
  const { currentUser } = useAuth();
  const NavData = [
    {
      id: 1,
      url: "/",
      text: "home",
      icon: <MdHome />,
    },
    {
      id: 2,
      url: "/explore",
      text: "explore",
      icon: <MdExplore />,
    },
    {
      id: 3,
      url: "/bookmark",
      text: "bookmark",
      icon: <MdBookmark />,
    },
    {
      id: 4,
      url: `/profile/${currentUser?._id}`,
      text: "profile",
      icon: <MdPerson />,
    },
  ];

  return (
    <nav className="nav">
      <div>
        {NavData.map(({ id, icon, url, text }) => {
          return (
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              key={id}
            >
              <span className="icon nav-icon">{icon}</span>
              <h3 className="nav-text">{text}</h3>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
