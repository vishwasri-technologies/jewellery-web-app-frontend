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
            {/* <div className="reset-password-container1">
\
              <input type="checkbox" id="reset-checkbox" />
              <label htmlFor="reset-checkbox" className="reset-password1">
                Reset&nbsp;&nbsp;Password
              </label>
<<<<<<< HEAD
            </div>
=======
            </div> */}


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