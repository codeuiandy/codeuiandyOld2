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
          <div className="sectionCount">02</div>
          Projects
        </h1>

        <div className="projectsContainer">
          <Carousel
            autoPlay={false}
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
                    <p style={{ marginBottom: "4.7%" }}>
                      An online digital bank which allows you to make payments,
                      buy airtime, pay for subscriptions or request for loans
                      seamlessly without leaving the comfort of your home. Its
                      flexibility allows companies to integrate salary payments
                      into the platform and employees can calculate their
                      payments.
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
                    <p style={{ marginBottom: "0.7%" }}>
                      A digital newspaper stand where the users have access to
                      newspaper publications, magazines and books based on their
                      subscription plan. They can also like, make comments or
                      share newspaper links to their favorite social media
                      platforms. Vendors and Publishers also have an admin
                      system to get market and sales info in real-time.
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
                    <p style={{ marginBottom: "5%" }}>
                      A social media platform that brings career women together.
                      It is subscription based and its users can request for
                      mentorship, participate in online forums and get weekly
                      content for growth in their respective careers. Users can
                      also get loans and grants for their businesses.
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
                    <p style={{ marginBottom: "13%" }}>
                      An online platform for trading and exchanging currency and
                      cryto-currency. The users have wallets which keep track of
                      their balance.
                    </p>
                  </div>

                  <div className="projectTechUsed">
                    <span>CSS</span>
                    <span>Chart.js</span>
                    <span>Redux</span>
                    <span>React.js</span>
                  </div>

                  <div className="projectActions">
                    <a href="https://q-qoin.herokuapp.com/">
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
                    <p style={{ marginBottom: "9%" }}>
                      An admin management system for the AGS mobile app which is
                      available on the Apple and Google Play Store. AGS is an
                      investment platform that allows its users to invest in
                      Agro and Agro-allied businesses.
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
              View All Projects
            </a>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </section>
    </>
  );
}
