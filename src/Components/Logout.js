import React from "react";
import "./Logout.css";
import Login from "./Login";

const Logout = () => {
  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleLogout = () => {
    window.location.replace('/login');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Log out?</h2>
        <p className="modal-message">Are you sure you want to log out?</p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="logout-button" onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;