import React from "react";
import "./AuthLayout.css";
import { Outlet } from "react-router";
import authImg from "../../assets/images/auth.jpg";
const AuthLayout = () => {
  return (
    <section className="auth-layout">
      <article className="cover-image">
        <img src={authImg} alt="auth" />
      </article>
      <div className="form-container">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
