import React, { useState } from "react";
import { toast } from "react-hot-toast";
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
    if (
      !signUpDetails.username &&
      !signUpDetails.password &&
      !signUpDetails.name
    ) {
      toast.error("Kindly fill all the fields!!");
      return;
    }
    signUpHandler({ ...signUpDetails });
  };

  return (
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
          Already have an account? <Link to="/auth/login">Login now</Link>
        </p>
      </form>
    </article>
  );
};

export default SignUp;
