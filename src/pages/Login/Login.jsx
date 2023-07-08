import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../..";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const { loginHandler } = useAuth();

  const handleLoginDetails = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLoginBtn = (e) => [
    e.preventDefault(),
    console.log({ loginDetails }),
    loginHandler({ ...loginDetails }),
  ];
  return (
    <section className="login">
      <article className="cover-image">
        <img src="./images/feed-2.jpg" alt="" />
      </article>
      <article className="login-form">
        <form className="form">
          <h4 className="form-title">Login</h4>

          <div className="form-row">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              placeholder="Enter your email"
              value={loginDetails.username}
              onChange={handleLoginDetails}
            />
            {/* <small className="form-alert">please provide value</small> */}
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              required
              value={loginDetails.password}
              onChange={handleLoginDetails}
            />
            {/* <small className="form-alert">please provide value</small> */}
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary "
            onClick={handleLoginBtn}
          >
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
