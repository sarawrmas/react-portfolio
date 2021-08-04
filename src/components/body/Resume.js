import React from 'react';
// import Download from "../../assets/icons/download.png";

function Resume() {
  return (
    <div className="page-div">
      <a href="www.google.com" className="resume-link">
        
        Download My Resume
      </a>
    <h2 className="resume-header">
      Proficiencies
    </h2>
    <div className="page-body skill-list">
      <div className="front-list">
        <h3 className="skill-header">Front End:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
        </ul>
      </div>
      <div className="back-list">
        <h3 className="skill-header">Back End:</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Resume;