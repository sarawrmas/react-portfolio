import React from 'react';
import ClonelloImg from '../assets/images/trello.png';
import BlogImg from '../assets/images/blog.png';
import NoteImg from '../assets/images/note.png';
import WeatherImg from '../assets/images/weather.jpg';

function SingleProject() {
  const projects = [
    {
      title: 'Clonello',
      image: ClonelloImg,
      description: "Create projects, assign tasks, and update task status to keep everyone in your project up to date.",
      technologies: "JavaScript ⤩ Handlebars ⤩ Express ⤩ MySQL",
      deployed: "https://powerful-falls-76508.herokuapp.com/",
      github: "https://github.com/akman47/Clonello"
    },
    {
      title: 'Nothing But Tech',
      image: BlogImg,
      description: "Your resource to read and discuss news on all things tech.",
      technologies: "JavaScript ⤩ Handlebars ⤩ Express ⤩ MySQL",
      deployed: "https://peaceful-brushlands-07328.herokuapp.com/",
      github: "https://github.com/sarawrmas/nothing-but-tech"
    },
    {
      title: 'Note Taker',
      image: NoteImg,
      description: "Take notes, view descriptions, and edit and delete notes as needed.",
      technologies: "JavaScript ⤩ HTML ⤩ CSS ⤩ Express",
      deployed: "https://frozen-harbor-03363.herokuapp.com/",
      github: "https://github.com/sarawrmas/note-taker"
    },
    {
      title: 'Weather Dashboard',
      image: WeatherImg,
      description: "Search a city to find weather patterns for today and a prediction of the next 5 days.",
      technologies: "JavaScript ⤩ HTML ⤩ CSS",
      deployed: "https://sarawrmas.github.io/weather-dashboard/",
      github: "https://github.com/sarawrmas/weather-dashboard"
    },
  ]

  return(
    <div className="all-projects">
      {projects.map(project => (
        <div className="single-project" key={project.title}>
        <h3>{project.title}</h3>
        <div
          className="project-div"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: '100%',
            border: '3px solid var(--dark)'
          }}
        >
          <p className="project-text">{project.description}</p>
          <p className="project-text project-tech">{project.technologies}</p>
          <a href={project.deployed} target="_blank" rel="noreferrer">
            <button className="project-text project-btn">Deployed</button>
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
          <button className="project-text project-btn">GitHub</button>
          </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleProject;