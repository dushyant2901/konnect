import React from "react";
import "./AuthLayout.css";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <section className="auth-layout">
      <article className="cover-image">
        <img src="/images/feed-2.jpg" alt="" />
      </article>
      <div className="form-container">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
