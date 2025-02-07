import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="logo">
          <Link to="/">SriLaxmiBhagavan</Link>
        </div>

      
        <div className="search-container">
          <input type="text" placeholder="Search jewellery" />
          <FaSearch className="search-icon" />
        </div>

      
        <div className="user-menu">
          <Link to="/signup">
            <FaUser className="user-icon" />
            <span>SignUp</span>
          </Link>
        </div>
      </div>

      <div className="nav-links">
        <Link to="/all">All</Link>
        <Link to="/necklace">Necklace</Link>
        <Link to="/chains">Chains</Link>
        <Link to="/earrings-rings">EarRings & Rings</Link>
        <Link to="/bangles">Bangles</Link>
      </div>
    </nav>
  );
};

export default Navbar;
