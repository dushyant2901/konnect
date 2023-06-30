import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { signUpService } from "../../services/authService/signUpService";
const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignUpDetails = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
    // console.log(signUpDetails);
  };
  const signUpHandler = async (userdetails, navigate) => {
    // const { username, password, name } = userdetails;
    try {
      const res = await signUpService({ ...userdetails });
      console.log(res);
      if (res.status === 201) {
        localStorage.setItem("token", res.data.encodedToken);
        const { username, name } = res.data.createdUser;
        localStorage.setItem("userData", JSON.stringify({ username, name }));
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUpBtn = (e) => {
    e.preventDefault();
    signUpHandler({ ...signUpDetails }, navigate);
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
              onChange={handleSignUpDetails}
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
              onChange={handleSignUpDetails}
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
              onChange={handleSignUpDetails}
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
