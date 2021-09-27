import React from 'react';
import ClonelloImg from '../assets/images/trello.png';
import BlogImg from '../assets/images/blog.png';
import NoteImg from '../assets/images/note.png';
import HeartImg from '../assets/images/heart.jpg';

function SingleProject() {
  const projects = [
    {
      title: 'Health Companion',
      image: HeartImg,
      description: "Keep track of your health with diet and exercise search tools.",
      technologies: "JavaScript ⤩ React ⤩ MongoDB ⤩ GraphQL",
      deployed: "https://health-companion.herokuapp.com/",
      github: "https://github.com/sarawrmas/health-companion"
    },
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
    }
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