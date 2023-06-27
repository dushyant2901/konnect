import React from "react";
import { Outlet } from "react-router";
import { Header, Navigation, SuggestedUsers } from "../components";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="main container">
        <div className="left">
          <Navigation />
        </div>
        <div className="middle">
          <Outlet />
        </div>
        <div className="right">
          <SuggestedUsers />
        </div>
      </main>
    </>
  );
};

export default Layout;
