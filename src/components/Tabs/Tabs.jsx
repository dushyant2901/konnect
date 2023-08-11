import React from "react";
import "./Tabs.css";
const Tabs = ({ handleTabBtnClick, activeTab, ...tabs }) => {
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
