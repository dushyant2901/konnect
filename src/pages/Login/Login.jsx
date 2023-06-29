import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <section className="login">
      <article className="cover-image">
        <img src="./images/feed-2.jpg" alt="" />
      </article>
      <article className="login-form">
        <form className="form">
          <h4 className="form-title">Login</h4>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="hello there"
              id="name"
              className="form-input"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
            />
            <small className="form-alert">please provide value</small>
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
            {/* <small className="form-alert">please provide value</small> */}
          </div>

          <button type="submit" className="btn btn-block btn-primary">
            submit
          </button>
          <p className="text sign-up-text">
            Don't have an account? <Link to="/signup">Sigup now</Link>
          </p>
        </form>
      </article>
    </section>
  );
};

export default Login;
