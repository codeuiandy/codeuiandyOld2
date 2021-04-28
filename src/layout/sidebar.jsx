import React from "react";

export default function Sidebar() {
  return (
    <div className="moveSideBarContentBottom">
      <div className="sidebar-content">
        <div className="conect-with-codeuiandy">
          <span className="codeuiandy-github">
            <a href="https://github.com/codeuiandy" target="blank">
              <i class="fab fa-github"></i>
            </a>
          </span>

          <span className="codeuiandy-youtube">
            <a href="https://www.youtube.com/c/codeuiandy" target="blank">
              <i class="fab fa-youtube"></i>
            </a>
          </span>
          <span className="codeuiandy-linkedin">
            <a href="https://www.linkedin.com/in/codeuiandy/" target="blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </span>

          <span className="codeuiandy-twitter">
            <a href="https://twitter.com/CodeuiA" target="blank">
              <i class="fab fa-twitter"></i>
            </a>
          </span>

          <span className="codeuiandy-instagram">
            <a href="https://www.instagram.com/codeuiandy/" target="blank">
              <i class="fab fa-instagram"></i>
            </a>
          </span>
        </div>
        <div className="sidebar-vr-hr"></div>
      </div>
    </div>
  );
}
