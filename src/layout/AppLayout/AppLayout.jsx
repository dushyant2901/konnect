import React from "react";
import { Outlet } from "react-router";
import { Header, Loader, Navigation, SuggestedUsers } from "../../components";
import "./AppLayout.css";
import { useAuth } from "../../context";

const AppLayout = () => {
  const { isLoading } = useAuth();

  return (
    <>
      {isLoading && <Loader />}
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

export default AppLayout;
