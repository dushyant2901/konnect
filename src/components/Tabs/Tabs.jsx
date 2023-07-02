import React, { useState } from "react";
import "./Tabs.css";
const Tabs = ({ ...tabs }) => {
  console.log(tabs);
  const [activeTab, setActiveTab] = useState("posts");
  const handleTabBtnClick = (e) => {
    setActiveTab(e.target.textContent.toLowerCase());
  };
  console.log(Object.keys(tabs));
  return (
    <section className="tab">
      <div className="tab-container">
        {Object.keys(tabs).map((tab) => {
          return (
            <button
              className={`tab-btn btn ${
                activeTab === tab && "active-tab-btn"
              } `}
              onClick={handleTabBtnClick}
            >
              {tab}
            </button>
          );
        })}
        {/* <button className="tab-btn btn btn-primary" onClick={handleTabBtnClick}>
          Posts
        </button>
        <button className="tab-btn " onClick={handleTabBtnClick}>
          Followers
        </button>
        <button className="tab-btn " onClick={handleTabBtnClick}>
          Following
        </button> */}
      </div>
      {activeTab === "posts"
        ? tabs.posts
        : activeTab === "followers"
        ? tabs.followers
        : tabs.following}
    </section>
  );
};

export default Tabs;
