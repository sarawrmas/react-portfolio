import React from 'react';

function About() {
  return (
    <div className="page-div">
      <h2>About Me</h2>
      <div className="about-body">
        <img src={require("../../assets/images/face.jpg").default} alt="A photograph of Sara" className="about-portrait"/>
        <p className="page-body">
          ∞ Jack of all trades with endless curiosity<br />
          ∞ Loves to solve complex problems<br />
          ∞ Resourceful, quick to learn, and adaptable<br />
          ∞ Future UT Austin Coding Boot Camp Graduate<br />
        </p>
      </div>
    </div>
  );
}

export default About;