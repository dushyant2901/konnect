import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import "./Login.css";

import { useAuth } from "../..";
import { guestLoginDetails } from "../../utils/constants";

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

  const handleLoginBtn = (e) => {
    e.preventDefault();
    if (!loginDetails.username && !loginDetails.password) {
      toast.error("Kindly fill all the fields!!");
      return;
    }
    loginHandler({ ...loginDetails });
  };

  const handleGuestLoginBtn = (e) => [
    e.preventDefault(),
    loginHandler({ ...guestLoginDetails }),
  ];

  return (
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
        <div className="login-btns-container">
          <button
            type="submit"
            className="btn btn-block btn-primary "
            onClick={handleLoginBtn}
          >
            submit
          </button>
          <button
            type="submit"
            className="btn btn-block  "
            onClick={handleGuestLoginBtn}
          >
            Guest Login
          </button>
        </div>
        <p className="text sign-up-text">
          Don't have an account? <Link to="/auth/signup">Signup now</Link>
        </p>
      </form>
    </article>
  );
};

export default Login;
