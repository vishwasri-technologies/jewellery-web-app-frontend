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
import { Link } from "react-router-dom";
import axios from "axios";
import "./Reset.css";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("https://jewellery-web-backend-users.vishcom.net/Reset", {
        email,
        newPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-form">
        <h2>Reset Password</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleReset}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm new password"
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
