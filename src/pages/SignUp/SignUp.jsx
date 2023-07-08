import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./SignUp.css";
import { useAuth } from "../../";

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    username: "",
    password: "",
  });
  const handleSignUpFieldDetails = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const { signUpHandler } = useAuth();

  const handleSignUpBtn = (e) => {
    e.preventDefault();
    console.log({ signUpDetails });
    signUpHandler({ ...signUpDetails });
  };
  return (
    <section className="signup">
      <article className="cover-image">
        <img src="./images/feed-2.jpg" alt="" />
      </article>
      <article className="signup-form">
        <form className="form">
          <h4 className="form-title">signup</h4>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="type here"
              id="name"
              name="name"
              className="form-input"
              value={signUpDetails.name}
              onChange={handleSignUpFieldDetails}
            />
          </div>

          <div className="form-row">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              placeholder="type here"
              id="username"
              name="username"
              className="form-input"
              value={signUpDetails.username}
              onChange={handleSignUpFieldDetails}
            />
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
              value={signUpDetails.password}
              onChange={handleSignUpFieldDetails}
            />
            {/* <small className="form-alert">please provide value</small> */}
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={handleSignUpBtn}
          >
            submit
          </button>
          <p className="text login-text">
            Already have an account? <Link to="/login">Login now</Link>
          </p>
        </form>
      </article>
    </section>
  );
};

export default SignUp;
