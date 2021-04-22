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
          <ul className="codeuiandy-nav">
            <li>
              <a href="">
                <span className="codeuiandy-nav-no">01.</span> About
              </a>
            </li>
            <li>
              <a href="">
                <span className="codeuiandy-nav-no">02.</span> Experience
              </a>
            </li>
            <li>
              <a href="">
                <span className="codeuiandy-nav-no">03.</span> Work
              </a>
            </li>
            <li>
              <a href="">
                <span className="codeuiandy-nav-no">04.</span> Contact
              </a>
            </li>
          </ul>

          <span className="resume-codeuiandy">Resume</span>
        </div>
      </div>
    </div>
  );
}
