import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios"; 
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill all fields correctly");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/Login", formData);
      setMessage(res.data.message);
      alert("Login successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error occurred");
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="" value={formData.email} onChange={handleChange}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="" value={formData.password} onChange={handleChange}/>

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