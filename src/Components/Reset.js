// import React from "react";
// import { Link } from "react-router-dom"; 
// import "./Reset.css";

// const Reset = () => {
//   return (
//     <div className="reset-container">
//       <div className="reset-form">
//         <h2>Reset Password</h2>
//         <form>
//           <label htmlFor="New Password">New Password</label>
//           <input type="new password" id="new password" placeholder="" />

//           <label htmlFor="Confirm password">Confirm Password</label>
//           <input type="confirm password" id="confirm password" placeholder="" />
    
//           <button type="submit" className="save-button">
//             Save password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Reset;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reset.css";

const Reset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (!validatePassword(newPassword)) {
      setError("Password must be at least 8 characters long, contain at least one uppercase letter and one number");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/Reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, confirmPassword }),
      });
      
      const data = await response.json();
      if (response.ok) {
        setSuccess("Password reset successful");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login after success
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-form">
        <h2>Reset Password</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
    
          <button type="submit" className="save-button">Save Password</button>
        </form>
      </div>
    </div>
  );
};

export default Reset;

