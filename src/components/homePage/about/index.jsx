import React, { useRef, ref } from "react";
import codeUiAndyImg from "../../../assets/images/image-of-code-ui-andy.jpg";
import { FaMagic } from "react-icons/fa";
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
              Hello! My name is Okeke Andrew Nwabueze. I don't have the ability
              to control humans but I have one superpower; to command one of
              humans' greatest achievement: the computer, which makes me feel
              like a god. My interest in web development started back in 2016
              when I edited some images. My brother who is a senior backend
              developer, was amazed and he advised me to go into web
              developement and Boom! Here I Am!!!
            </section>

            <h4 className="more-info-code-ui-andy-c">
              Here are some of my superpowers
            </h4>

            <div className="technologyIUse">
              <ul>
                <li>
                  {" "}
                  <FaMagic className="fIconAn" />
                  HTML
                </li>
                <li>
                  {" "}
                  <FaMagic className="fIconAn" /> CSS
                </li>
                <li>
                  <FaMagic className="fIconAn" /> JAVASCRIPT
                </li>

                <li>
                  <FaMagic className="fIconAn" /> REDUX
                </li>
              </ul>

              <ul>
                <li>
                  {" "}
                  <FaMagic className="fIconAn" /> REACT.JS
                </li>

                <li>
                  {" "}
                  <FaMagic className="fIconAn" /> REACT Native
                </li>
                <li>
                  {" "}
                  <FaMagic className="fIconAn" /> NEXT.JS
                </li>
                <li>
                  {" "}
                  <FaMagic className="fIconAn" /> GATSBY
                </li>
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
