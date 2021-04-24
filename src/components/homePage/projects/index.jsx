import React, { useRef, useEffect, ref } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import paysync from "../../../assets/images/paysync.png";
import TNS from "../../../assets/images/TNS.png";
import e9to5chick from "../../../assets/images/9to5chick.png";
import qCoin from "../../../assets/images/qCoin.png";
import ags from "../../../assets/images/ags.png";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const showOverlay = useRef();
  const showOverlayFun = () => {
    showOverlay.current.className = "overlaytext-p-container-inn";
  };
  const revertOvelay = () => {
    showOverlay.current.className = "";
  };

  return (
    <>
      <section class="codeuiandy-projects">
        <h1 className="aboutMeHeader inWl">
          <div className="sectionCount">01</div>
          Projects
        </h1>

        <div className="projectsContainer">
          <Carousel
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            stopAutoPlayOnHover={true}
            // timeout={500}
            infinite={true}
            interval={2000}
            next={revertOvelay}
            prev={revertOvelay}
          >
            <div onMouseEnter={showOverlayFun} className="my-project-img">
              <img src={paysync} alt="" />
              <div className="overlaytext-p-container">
                <div ref={showOverlay} className="">
                  <div className="myProjectName">
                    <h1>Paysync Digital Bank</h1>
                  </div>

                  <div className="aboutProject">
                    <p>
                      A web app for visualizing personalized Spotify data. View
                      your top artists, top tracks, recently played tracks, and
                      detailed audio information about each track. Create and
                      save new playlists of recommended tracks based on your
                      existing playlists and more. Sort through your top repos
                      by number of stars, forks, and size.
                    </p>
                  </div>

                  <div className="projectTechUsed">
                    <span>CSS</span>
                    <span>Chart.js</span>
                    <span>Redux</span>
                    <span>React.js</span>
                  </div>

                  <div className="projectActions">
                    <a href="http://ibank-frontend.s3-website.us-east-2.amazonaws.com/">
                      <i class="fas fa-tv"></i>
                    </a>
                    <a href="https://github.com/codeuiandy" target="blank">
                      {" "}
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div onMouseEnter={showOverlayFun} className="my-project-img">
              <img src={TNS} alt="" />
              <div className="overlaytext-p-container">
                <div ref={showOverlay} className="">
                  <div className="myProjectName">
                    <h1>The Newspaper Stand</h1>
                  </div>

                  <div className="aboutProject">
                    <p>
                      A web app for visualizing personalized Spotify data. View
                      your top artists, top tracks, recently played tracks, and
                      detailed audio information about each track. Create and
                      save new playlists of recommended tracks based on your
                      existing playlists and more. Sort through your top repos
                      by number of stars, forks, and size.
                    </p>
                  </div>

                  <div className="projectTechUsed">
                    <span>CSS</span>
                    <span>Chart.js</span>
                    <span>Redux</span>
                    <span>React.js</span>
                  </div>

                  <div className="projectActions">
                    <a href="https://app.thenewspaperstand.com/" target="blank">
                      <i class="fas fa-tv"></i>
                    </a>
                    <a href="https://github.com/codeuiandy" target="blank">
                      {" "}
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div onMouseEnter={showOverlayFun} className="my-project-img">
              <img src={e9to5chick} alt="" />
              <div className="overlaytext-p-container">
                <div ref={showOverlay} className="">
                  <div className="myProjectName">
                    <h1>9to5 Chicks</h1>
                  </div>

                  <div className="aboutProject">
                    <p>
                      A web app for visualizing personalized Spotify data. View
                      your top artists, top tracks, recently played tracks, and
                      detailed audio information about each track. Create and
                      save new playlists of recommended tracks based on your
                      existing playlists and more. Sort through your top repos
                      by number of stars, forks, and size.
                    </p>
                  </div>

                  <div className="projectTechUsed">
                    <span>CSS</span>
                    <span>Chart.js</span>
                    <span>Redux</span>
                    <span>React.js</span>
                  </div>

                  <div className="projectActions">
                    <a href="https://app.9to5chick.com/login">
                      <i class="fas fa-tv"></i>
                    </a>
                    <a href="https://github.com/codeuiandy" target="blank">
                      {" "}
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div onMouseEnter={showOverlayFun} className="my-project-img">
              <img src={qCoin} alt="" />
              <div className="overlaytext-p-container">
                <div ref={showOverlay} className="">
                  <div className="myProjectName">
                    <h1>Q Coin Web App</h1>
                  </div>

                  <div className="aboutProject">
                    <p>
                      A web app for visualizing personalized Spotify data. View
                      your top artists, top tracks, recently played tracks, and
                      detailed audio information about each track. Create and
                      save new playlists of recommended tracks based on your
                      existing playlists and more. Sort through your top repos
                      by number of stars, forks, and size.
                    </p>
                  </div>

                  <div className="projectTechUsed">
                    <span>CSS</span>
                    <span>Chart.js</span>
                    <span>Redux</span>
                    <span>React.js</span>
                  </div>

                  <div className="projectActions">
                    <a href="/">
                      <i class="fas fa-tv"></i>
                    </a>
                    <a href="https://github.com/codeuiandy" target="blank">
                      {" "}
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div onMouseEnter={showOverlayFun} className="my-project-img">
              <img src={ags} alt="" />
              <div className="overlaytext-p-container">
                <div ref={showOverlay} className="">
                  <div className="myProjectName">
                    <h1>AGS Admin Management System</h1>
                  </div>

                  <div className="aboutProject">
                    <p>
                      A web app for visualizing personalized Spotify data. View
                      your top artists, top tracks, recently played tracks, and
                      detailed audio information about each track. Create and
                      save new playlists of recommended tracks based on your
                      existing playlists and more. Sort through your top repos
                      by number of stars, forks, and size.
                    </p>
                  </div>

                  <div className="projectTechUsed">
                    <span>CSS</span>
                    <span>Chart.js</span>
                    <span>Redux</span>
                    <span>React.js</span>
                  </div>

                  <div className="projectActions">
                    <a href="https://ags-admin.codeuiandy.vercel.app/">
                      <i class="fas fa-tv"></i>
                    </a>
                    <a href="https://github.com/codeuiandy" target="blank">
                      {" "}
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          <div className="viewAllProject">
            <a href="https://github.com/codeuiandy" target="blank">
              {" "}
              View All Project
            </a>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </section>
    </>
  );
}
