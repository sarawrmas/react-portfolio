import React from 'react';

function About() {
  return (
    <div className="page-div">
      <h2>About Me</h2>
      <div className="about-body">
        <img src={require("../assets/images/face.jpg").default} alt="A photograph of the applicant" className="photo"/>
        <p className="page-body about-p">
          <h3>Full Stack Software Developer</h3>
          with a proclivity for digging deep to understand how systems work.
          Always seeking out a challenge and chasing the next goal post,
          yet grounded in the power of lasting knowledge.
          Programming roots are in JavaScript and the MERN stack,
          and I intend to continue learning new languages and tools
          to expand my ever-growing skill set.
          <br/>
          <br/>
          Want to see more? Use the navigation and footer links to get to know me better!
        </p>
      </div>
    </div>
  );
}

export default About;