import React from "react";
import CodeUiandyLogo from "../assets/images/codeuiandy-logo.png";
export default function Navbar() {
  return (
    <div>
      <div className="navbar-content">
        <div className="logo-wrap">
          <img src={CodeUiandyLogo} alt="Code Ui Andy Logo" />
        </div>

        <div className="navbar-links">
          <span>link 1</span>
          <span>link 1</span> <span>link 1</span> <span>link 1</span>{" "}
          <span>link 1</span>
        </div>
      </div>
    </div>
  );
}
