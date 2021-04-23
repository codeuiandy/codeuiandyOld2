import React from "react";
import Layout from "../../layout/index";
import About from "./about/index";
import Contact from "./contact/index";
import Experience from "./experience/index";
import LandingPage from "./landingPage/index";
import Work from "./work/index";
import Youtube from "./youtube/index";
import "./index.css";
export default function Index() {
  return (
    <Layout>
      <div style={{ color: "white" }}>
        <LandingPage />
        <About />
        <Youtube />
        {/* <Experience />
        <Work />
        <Contact /> */}
      </div>
    </Layout>
  );
}
