import React, { useEffect } from "react";
import { gsap, TimelineLite, Power1, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = new TimelineLite({ delay: 0.1 });

  useEffect(() => {
    tl.from(".my-name", {
      y: -20,
      ease: Power4.ease,
      opacity: 0.8,
      duration: 0.4,
      delay: 0.3,
      // stagger: {
      //   amount: 0.1,
      // },
    });

    tl.from(".trigerSectionGsap", {
      y: 36,
      ease: Power4.ease,
      opacity: 1,
      duration: 0.4,
      delay: 0.4,
      // stagger: {
      //   amount: 0.1,
      // },
    });

    // gsap.from(".scaleAppsCard", {
    //   scale: 0.5,
    // });

    // let hover = gsap.to(".scaleAppsCard", {
    //   delay: 0,
    //   scale: 1.3,
    //   color: "blue",
    //   duration: 0.2,
    //   paused: true,
    //   ease: Power1.easeIn,
    //   stagger: 0.2,
    // });
    // targetImageHover.current.addEventListener("mouseenter", () => hover.play());
    // targetImageHover.current.addEventListener("mouseleave", () =>
    //   hover.reverse()
    // );
  }, []);
  return (
    <div>
      <section className="about-code-ui-andy">
        <span className="my-name">Hi, My Name Is</span>
        <div className="trigerSectionGsap">
          <h1 className="codeuiandy-name">CODE UI ANDY</h1>
          <span className="little-codeuiandy-quote">
            <span style={{ color: "#7ef4fca6" }}>
              I’ve Learnt I don’t know anything.
            </span>{" "}
            I’ve also Learnt that people will pay for what I know{" "}
            <span>tremendously, </span> and building things for the web is
            something I can do while sleeping.
          </span>

          <span className="about-code-ui-andy-bio">
            I'm a Nigeria-based Front-End Engineer who specializes in creating
            exceptional digital experiences. Currently, I'm an engineer at Soar
            Digital, and my modus operandi is making the web a better place and
            accessible to all users.
          </span>

          <div className="email-code-ui-andy-button-header">
            <a href="mailto:frostandy41@gmail.com">Get In Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
