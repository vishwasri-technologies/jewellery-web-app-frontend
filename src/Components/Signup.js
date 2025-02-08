import React from "react";
// import "./Signup.css";
import { Link } from "react-router-dom"; 
// import google from "../assets/google-icon.png";
// import facebook from "../assets/facebook-icon.png";

const Signup = () => {
  return (
    <div className="signup-container1">
      <div className="signup-form1">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="" />

          <label htmlFor="phone">Phone no</label>
          <input type="text" id="phone" placeholder="" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" />
            <div className="reset-password-container1">
              <input type="checkbox" id="reset-checkbox" />
              <label htmlFor="reset-checkbox" className="reset-password1">
                Reset&nbsp;&nbsp;Password
              </label>
            </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link> {/* Use Link to navigate */}
        </p>

        {/* <div className="social-icons1">
          <img src={google} alt="Google" />
          <img src={facebook} alt="Facebook" />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;