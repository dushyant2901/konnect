import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  return (
    // <div>
    //   <div class="signup-form">
    //     <div class="title">Signup</div>
    //     <form action="#">
    //       <div class="input-boxes">
    //         <div class="input-box">
    //           <i class="fas fa-user"></i>
    //           <input type="text" placeholder="Enter your name" required />
    //         </div>
    //         <div class="input-box">
    //           <i class="fas fa-envelope"></i>
    //           <input type="text" placeholder="Enter your email" required />
    //         </div>
    //         <div class="input-box">
    //           <i class="fas fa-lock"></i>
    //           <input
    //             type="password"
    //             placeholder="Enter your password"
    //             required
    //           />
    //         </div>
    //         <div class="button input-box">
    //           <input type="submit" value="Sumbit" />
    //         </div>
    //         <div class="text sign-up-text">
    //           Already have an account? <label for="flip">signup now</label>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <section className="signup">
      <article className="cover-image">
        <img src="./images/feed-2.jpg" alt="" />
      </article>
      <article className="signup-form">
        <form className="form">
          <h4 className="form-title">signup</h4>
          <div className="form-row">
            <label htmlFor="fname" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="type here"
              id="fname"
              className="form-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="lname" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="type here"
              id="lname"
              className="form-input"
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
            {/* <small className="form-alert">please provide value</small> */}
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
          <p className="text login-text">
            Already have an account? <Link to="/login">Login now</Link>
          </p>
        </form>
      </article>
    </section>
  );
};

export default SignUp;
