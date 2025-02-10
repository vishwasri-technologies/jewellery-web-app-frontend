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
import { useNavigate } from "react-router-dom"; // For redirection
import axios from "axios";
import "./Reset.css";

const Reset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // To display success/error messages
  const navigate = useNavigate(); // To redirect after success

  const handleReset = async (e) => {
    e.preventDefault();

    // Get token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Unauthorized! Please log in first.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/Reset",
        { newPassword, confirmPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token for authentication
            "Content-Type": "application/json",
          },
        }
      );

      // If successful, show success message and redirect
      setMessage(response.data.message);
      setTimeout(() => navigate("/login"), 2000); // Redirect to login page
    } catch (error) {
      setMessage(error.response?.data?.message || "Error updating password");
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-form">
        <h2>Reset Password</h2>
        {message && <p className="message">{message}</p>} {/* Show success/error messages */}
        <form onSubmit={handleReset}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="save-button">
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
