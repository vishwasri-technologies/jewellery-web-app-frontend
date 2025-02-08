import React from "react";
import { Link, useNavigate  } from "react-router-dom"; 
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" />

          <div className="login-reset-password-container">
            <label htmlFor="reset-checkbox" className="login-reset-password" onClick={() => navigate("/reset")}>
              Reset&nbsp;&nbsp;Password
            </label>
          </div>

          <button onClick={() => navigate("/")} type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;