import React from "react";
import CodeUiandyLogo from "../assets/images/codeuiandy-logo.png";
import codeuiandyResume from "../assets/frontend-developer-codeuiandy-Resume-(may).pdf";
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
              <a href="#about">
                <span className="codeuiandy-nav-no">01.</span> About
              </a>
            </li>

            <li>
              <a href="#projects">
                <span className="codeuiandy-nav-no">02.</span> Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className="codeuiandy-nav-no">03.</span> Contact
              </a>
            </li>
          </ul>
          <a
            style={{ textDecoration: "none" }}
            href={codeuiandyResume}
            download
          >
            <span className="resume-codeuiandy"> Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
