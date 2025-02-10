import React from "react";

import "./Signup.css";
import { Link } from "react-router-dom"; 


const Signup = () => {
  return (
    <div className="signup-container1">
      <div className="signup-form1">
        <h2>Sign Up</h2>
        <form>

          <label htmlFor="name" >Name</label>
          <input type="text" id="name" placeholder=""  className="signup-label"/>

          <label htmlFor="phone" >Phone no</label>
          <input type="text" id="phone" placeholder="" className="signup-label" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" className="signup-label"/>

          <label htmlFor="password" >Password</label>
          <input type="password" id="password" placeholder="" className="signup-label"/>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link> 
        </p>

      </div>
    </div>
  );
};

export default Signup;
