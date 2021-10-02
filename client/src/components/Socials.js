import React, { useState } from 'react';
import gitIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import wordpressIcon from '../assets/icons/wordpress.png';
import resumeIcon from '../assets/clipboard.png';

function Socials() {
  const [openSocial, setOpenSocial] = useState(false);

  const handleOpen = () => {
    setOpenSocial(true)
  }

  const handleClose = () => {
    setOpenSocial(false)
  }

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
    <div>
      <div className="social-arrow">
        <button
          onClick={openSocial === false ? handleOpen : handleClose}
          className={openSocial === false ? 'arrow-left' : 'arrow-right'}
        >
          {openSocial === false ? `<` : `>`}
        </button>
      </div>
      <div className={openSocial === false ? "social-div" : "social-div-active"}>
        {links.map(link => (
          <a href={link.url} target="_blank" rel="noreferrer" key={link.name}>
            <img
              src={link.src}
              alt={link.description}
              className="icon"
            >
            </img><br/>
          </a>
        ))}
        <a
          href="https://docs.google.com/document/d/1toEofj-Tf4faSc5lA-8Iwuimii_dVJgxIIoGDJL6xiY/export?format=pdf"
          download
        >
          <img className="icon" src={resumeIcon} alt="Button to download resume pdf"></img>
        </a>
      </div>
    </div>
  )
}

export default Socials;