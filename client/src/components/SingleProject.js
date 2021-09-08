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
      description: "Create projects and assign tasks in a group to keep everyone up to date.",
      technologies: "JavaScript ⤩ Handlebars ⤩ Express ⤩ MySQL",
      deployed: "https://powerful-falls-76508.herokuapp.com/",
      github: "https://github.com/akman47/Clonello"
    },
    {
      title: 'Just Tech News',
      image: BlogImg,
      description: "Your resource to read, discuss, and post news on all things tech.",
      technologies: "JavaScript ⤩ Handlebars ⤩ Express ⤩ MySQL",
      deployed: "https://pure-coast-40651.herokuapp.com/",
      github: "https://github.com/sarawrmas/just-tech-news"
    },
    {
      title: 'Task Master Pro',
      image: NoteImg,
      description: "Draggable note tracker with ability to create, change status, edit, and delete tasks.",
      technologies: "HTML ⤩ Bootstrap ⤩ JavaScript ⤩ jQuery",
      deployed: "https://sarawrmas.github.io/taskmaster-pro/",
      github: "https://github.com/sarawrmas/taskmaster-pro"
    },
    {
      title: 'Weather Dashboard',
      image: WeatherImg,
      description: "Search any city for weather updates and save previous searches for efficiency.",
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
              backgroundImage: `url(${project.image})`
            }}
          >
            <p className="project-text project-description">{project.description}</p>
            <p className="project-text project-tech">{project.technologies}</p>
            <div className="button-inline">
              <a href={project.deployed} target="_blank" rel="noreferrer">
                <button className="project-text project-btn">Deployed</button>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
              <button className="project-text project-btn">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleProject;