import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="moveSideBarContentBottom">
      <div className="sidebar-content">
        <div className="conect-with-codeuiandy">
          <span className="codeuiandy-github">
            <a href="https://github.com/codeuiandy" target="blank">
              <FaGithub />
            </a>
          </span>

          <span className="codeuiandy-youtube">
            <a href="https://www.youtube.com/c/codeuiandy" target="blank">
              <FaYoutube />
            </a>
          </span>
          <span className="codeuiandy-linkedin">
            <a href="https://www.linkedin.com/in/codeuiandy/" target="blank">
              <FaLinkedin />
            </a>
          </span>

          <span className="codeuiandy-twitter">
            <a href="https://twitter.com/CodeuiA" target="blank">
              <FaTwitter />
            </a>
          </span>

          <span className="codeuiandy-instagram">
            <a href="https://www.instagram.com/codeuiandy/" target="blank">
              <FaInstagram />
            </a>
          </span>
        </div>
        <div className="sidebar-vr-hr"></div>
      </div>
    </div>
  );
}
