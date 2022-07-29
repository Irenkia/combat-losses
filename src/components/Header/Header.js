import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="logo">Russian Warship Go Fuck Yourself</h2>
      <nav className="navbar">
        <a href="#home" id="active">
          Home
        </a>
        <a href="#about">About</a>
      </nav>
    </div>
  );
};
export default Header;
