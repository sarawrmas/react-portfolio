import React from 'react';
// import { gsap } from "gsap";
// import ScrollMagic from "scrollmagic";
import ScrollReveal from 'scrollreveal';

function About() {
  // var tl = new gsap.TimelineMax({onUpdate:updatePercentage});
  // const controller = new ScrollMagic.Controller();

  // tl.from(".photo", .5, {x:200, opacity: 0})

  // const scene = new ScrollMagic.Scene({
  //   triggerElement: ".content",
  //   triggerHook: "onLeave",
  //   duration: "100%"
  // })
  // .setPin(".content")
  // .setTween(tl)
  // .addTo(controller);

  // function updatePercentage() {
  //   tl.progress();
  // }

  ScrollReveal().reveal('.about-body', {
    delay: 500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    origin: 'bottom',
    duration: 1000,
    desktop: true,
    mobile: true
  })

  return (
    <div className="page-div" id="about">
      {/* <h2>About Me</h2> */}
      <div className="about-body">
        <img src={require("../assets/images/sit.png").default} alt="A photograph of the applicant" className="photo"/>
        <div className="page-body about-p">
          <h2 className="content">Sara Adamski</h2>
          <h3 className="content">Full Stack Developer</h3>
          {/* with a proclivity for digging deep to understand how systems work.
          Always seeking out a challenge and chasing the next goal post,
          yet grounded in the power of lasting knowledge.
          Programming roots are in JavaScript and the MERN stack,
          and I intend to continue learning new languages and tools
          to expand my ever-growing skill set.
          <br/>
          <br/>
          Want to see more? Use the navigation and footer links to get to know me better! */}
        </div>
        <div className="skill-list">
          <img src={require("../assets/tech/html.png").default} className="tech"/>
          <img src={require("../assets/tech/css.png").default} className="tech"/>
          <img src={require("../assets/tech/bootstrap.png").default} className="tech"/>
          <img src={require("../assets/tech/js.png").default} className="tech"/>
          <img src={require("../assets/tech/jquery.png").default} className="tech"/>
          <img src={require("../assets/tech/node.png").default} className="tech"/>
          <img src={require("../assets/tech/express.png").default} className="tech"/>
          <img src={require("../assets/tech/react.png").default} className="tech"/>
          <img src={require("../assets/tech/mongodb.png").default} className="tech"/>
          <img src={require("../assets/tech/graphql.png").default} className="tech"/>
          <img src={require("../assets/tech/github.png").default} className="tech"/>
          <img src={require("../assets/tech/jest.png").default} className="tech"/>
          <img src={require("../assets/tech/mysql.png").default} className="tech"/>
          <img src={require("../assets/tech/pwa.png").default} className="tech"/>
          <img src={require("../assets/tech/rest.png").default} className="tech"/>
        </div>
      </div>
    </div>
  );
}

export default About;