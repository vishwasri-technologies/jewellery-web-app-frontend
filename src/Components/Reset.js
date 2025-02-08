import React from "react";
import { Link } from "react-router-dom"; 
import "./Reset.css";

const Reset = () => {
  return (
    <div className="reset-container">
      <div className="reset-form">
        <h2>Reset Password</h2>
        <form>
          <label htmlFor="New Password">New Password</label>
          <input type="new password" id="new password" placeholder="" />

          <label htmlFor="Confirm password">Confirm Password</label>
          <input type="confirm password" id="confirm password" placeholder="" />
    
          <button type="submit" className="save-button">
            Save password
          </button>
        </form>
      </div>
    </div>
  );
};
export default Reset;