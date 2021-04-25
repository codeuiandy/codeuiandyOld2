import React from "react";
import Layout from "../../layout/index";
import About from "./about/index";
import Contact from "./contact/index";
import Experience from "./experience/index";
import LandingPage from "./landingPage/index";
import Work from "./work/index";
import Youtube from "./youtube/index";
import Projects from "./projects/index";
import "./index.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Index() {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <Layout handleSetActive={handleSetActive}>
      <div style={{ color: "white" }}>
        <LandingPage />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>

        {/* <Experience />
        <Work />
        <Contact /> */}
        <div id="contact">
          <Contact />
        </div>

        <div className="appFooter">
          <p>
            Website Design Inspired By <span>Brittany Chiang</span>
          </p>
        </div>
      </div>
    </Layout>
  );
}
