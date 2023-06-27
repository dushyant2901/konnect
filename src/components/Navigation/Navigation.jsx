import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { MdBookmark, MdExplore, MdHome } from "react-icons/md";
export const navData = [
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
];

const Navigation = () => {
  return (
    <nav className="nav">
      <div>
        {navData.map(({ id, icon, url, text }) => {
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
