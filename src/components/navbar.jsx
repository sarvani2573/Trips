import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/trip-logo.png" alt="Logo" />
        <span>Tripadvisor</span>
      </div>

      <div className="menu">
        <Link to="/discover">Discover</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/reviews">Reviews</Link>
      </div>

      <div className="right-section">
        <span>🌍 | INR</span>
        <Link to="/signin">
          <Button variant="contained" className="signin-btn">
            Sign in
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
