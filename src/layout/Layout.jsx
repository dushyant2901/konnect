import React from "react";
import { Outlet } from "react-router";
import { Header, Navigation, SuggestedUsers } from "../components";
import "./Layout.css";
import { useAuth } from "../context";
const Layout = () => {
  const { isLoading } = useAuth();
  return (
    <>
      {isLoading && <h2>Loading..........</h2>}
      {!isLoading && (
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
      )}
    </>
  );
};

export default Layout;
