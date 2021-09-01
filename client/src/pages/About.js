import React from 'react';

function About() {
  return (
    <div className="page-div">
      <h2>About Me</h2>
      <div className="about-body">
        <img src={require("../assets/images/face.jpg").default} alt="A photograph of the applicant" className="photo"/>
        <p className="page-body">
          ∞ Full Stack Developer<br />
          ∞ UT Austin Coding Boot Camp Graduate<br />
          ∞ Jack of all trades with endless curiosity<br />
          ∞ Love to solve complex problems<br />
          ∞ Resourceful, quick to learn, and adaptable<br />
        </p>
      </div>
    </div>
  );
}

export default About;