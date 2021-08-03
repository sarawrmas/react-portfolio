import React from 'react';
import ClonelloImg from '../../assets/images/trello.png';
import HealthImg from '../../assets/images/exercise.jpg';
import BlogImg from '../../assets/images/blog.png';
import NoteImg from '../../assets/images/note.png';
import TeamImg from '../../assets/images/team.png';
import WeatherImg from '../../assets/images/weather.jpg';
import linkIcon from '../../assets/icons/link.png';
import gitIcon from '../../assets/icons/github.png';

function Project() {
  const projects = [
    {
      title: 'Clonello',
      image: ClonelloImg,
      alt: "Desktop displaying a project management software program",
      deployed: "https://powerful-falls-76508.herokuapp.com/",
      github: "https://github.com/akman47/Clonello"
    },
    {
      title: 'Health Tracker',
      image: HealthImg,
      alt: "Girl with headphones using a jump rope",
      deployed: "https://sarawrmas.github.io/Health-Tracker/",
      github: "https://github.com/sarawrmas/Health-Tracker"
    },
    {
      title: 'Nothing But Tech',
      image: BlogImg,
      alt: "Blogger's desk with computer, paper, and coffee",
      deployed: "https://peaceful-brushlands-07328.herokuapp.com/",
      github: "https://github.com/sarawrmas/nothing-but-tech"
    },
    {
      title: 'Note Taker',
      image: NoteImg,
      alt: "Sticky note and paperclip",
      deployed: "https://frozen-harbor-03363.herokuapp.com/",
      github: "https://github.com/sarawrmas/note-taker"
    },
    {
      title: 'Team Profile Generator',
      image: TeamImg,
      alt: "Team of people stacking hands",
      deployed: "https://github.com/sarawrmas/Team-Profile-Generator",
      github: "https://github.com/sarawrmas/Team-Profile-Generator"
    },
    {
      title: 'Weather Dashboard',
      image: WeatherImg,
      alt: "Sun, clouds, rain, and snow",
      deployed: "https://sarawrmas.github.io/weather-dashboard/",
      github: "https://github.com/sarawrmas/weather-dashboard"
    },
  ]

  return(
    <div className="all-projects">
      {projects.map(project => (
        <div className="single-project" key={project.title}>
          <h3>{project.title}</h3>
          <img src={project.image} className="photo project-photo" alt={project.alt}></img>
          <br />
          <a href={project.deployed} target="_blank" rel="noreferrer">
            <img
              src={linkIcon}
              className="icon project-icon"
              alt="Paperclip icon that links to project's deployed site"
            />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            <img
              src={gitIcon}
              className="icon project-icon"
              alt="Icon from github.com that links to project's github page"
            />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Project;