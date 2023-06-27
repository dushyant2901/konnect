import React from "react";
import { Outlet } from "react-router";
import { Header, Suggested, Navigation } from "../components";
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
          <Suggested />
        </div>
      </main>
    </>
  );
};

export default Layout;
