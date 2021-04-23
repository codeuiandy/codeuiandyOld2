import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./layout.css";
export default function Index({ children }) {
  return (
    <React.Fragment>
      <div className="app-container">
        <div className="layout-wrap">
          <div className="navbar-wrap">
            <Navbar />
          </div>
          <div className="main-container">
            <div className="sidebar">
              <Sidebar />
            </div>

            <div className="app-container-children">
              <div
                style={{
                  margin: "auto",
                  width: "80%",
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="codeuiand-email-container">
          <div className="codeuiandyEmail-us-flex">
            <div className="e-codeuiandy">
              <a href="mailto:frostandy41@gmail.com">frostandy41@gmail.com</a>
            </div>
            <div className="sidebar-vr-hr"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
