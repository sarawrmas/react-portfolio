import React from 'react';
// import gitIcon from '../assets/icons/github.png';
import gitIcon from '../assets/tech/github.png';
// import linkedinIcon from '../assets/icons/linkedin.png';
import linkedinIcon from '../assets/linkedin.png';
// import wordpressIcon from '../assets/icons/wordpress.png';
import wordpressIcon from '../assets/wordpress.png';
// import paperIcon from '../assets/icons/download.png';
import resumeIcon from '../assets/resume.png';

function Footer() {
  const links = [
    {
      name: 'github',
      description: 'Icon from github.com that links to external site.',
      src: gitIcon,
      url: "https://github.com/sarawrmas"
    },
    {
      name: 'linkedin',
      description: 'Icon from linkedin.com that links to external site.',
      src: linkedinIcon,
      url: "https://www.linkedin.com/in/sara-adamski/"
    },
    {
      name: 'wordpress',
      description: 'Icon from wordpress.com that links to external site.',
      src: wordpressIcon,
      url: "https://hikingcodingandmayhem.wordpress.com"
    }
  ]

  return (
    <div className="footer-div">
      {links.map(link => (
        <a href={link.url} target="_blank" rel="noreferrer" key={link.name}>
          <img
            src={link.src}
            alt={link.description}
            className="icon"
          >
          </img>
        </a>
      ))}
      <a
        href="https://docs.google.com/document/d/1toEofj-Tf4faSc5lA-8Iwuimii_dVJgxIIoGDJL6xiY/export?format=pdf"
        download
      >
        <img className="icon" src={resumeIcon} alt="Button to download resume pdf"></img>
      </a>
    </div>
  )
}

export default Footer;