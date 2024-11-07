// components/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles.css";
import rainbowIan from "../images/rainbowIan.png"; // Import your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          {" "}
          {/* The logo links back to the main title */}
          <img src={rainbowIan} alt="Logo" className="logo-image" />
          <h1 className="rainbow-logo-text">Ian's Shop</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
