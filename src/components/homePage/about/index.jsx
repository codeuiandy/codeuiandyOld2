import React, { useRef, ref } from "react";
import codeUiAndyImg from "../../../assets/images/image-of-code-ui-andy.jpg";

const Index = () => {
  const targetImageBorder = useRef();
  const moveImageBorder = () => {
    targetImageBorder.current.className = "animatate-codeuiandy-img-border";
  };

  const RevertmoveImageBorder = () => {
    targetImageBorder.current.className = "codeuiandy-image-border ";
  };
  return (
    <div>
      <div className="aboutmeSectionDiv">
        <div className="about-code-ui-sectionWrap">
          <h1 className="aboutMeHeader">
            <div className="sectionCount">01</div>
            About Me
          </h1>
          <div className="moreInfoAboutCodeuiandy">
            <section className="more-info-code-ui-andy">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </section>

            <section className="more-info-code-ui-andy-b">
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </section>

            <h4 className="more-info-code-ui-andy-c">
              Here are a few technologies I've been working with for years:
            </h4>

            <div className="technologyIUse">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVA SCRIPT</li>
              </ul>

              <ul>
                <li>REACT.JS</li>
                <li>NEXT JS</li>
                <li>GATSYBY</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="a-photo-of-codeuiandy">
          <img
            onMouseEnter={moveImageBorder}
            onMouseOut={RevertmoveImageBorder}
            src={codeUiAndyImg}
            alt="Image of codeuiandy"
            className="codeuiandy-image"
          />
          <div
            ref={targetImageBorder}
            className="codeuiandy-image-border"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
