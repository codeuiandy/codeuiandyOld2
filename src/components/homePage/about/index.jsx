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
              Hello! My name is Okeke Andrew Nwabueze, I dont have the ability
              to control all human but i have one super power to command one of
              human greatest acchivement which is the computer which makes me
              feel like a god. My interest in web development started back in
              2012 when I decided to try editing some images and my big bro saw
              it was nice and adviced me to go into web developement
            </section>

            <h4 className="more-info-code-ui-andy-c">
              Here are some of my super powers
            </h4>

            <div className="technologyIUse">
              <ul>
                <li>
                  {" "}
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i> HTML
                </li>
                <li>
                  {" "}
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i> CSS
                </li>
                <li>
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i>{" "}
                  JAVASCRIPT
                </li>

                <li>
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i> REDUX
                </li>
              </ul>

              <ul>
                <li>
                  {" "}
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i>{" "}
                  REACT.JS
                </li>

                <li>
                  {" "}
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i> REACT
                  Native
                </li>
                <li>
                  {" "}
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i> NEXT.JS
                </li>
                <li>
                  {" "}
                  <i class="fa fa-magic fIconAn" aria-hidden="true"></i> GATSBY
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
