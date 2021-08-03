import React from 'react';
import gitIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import stackIcon from '../assets/icons/stack-overflow.png'

function Footer() {
  const icons = [
    {
      name: 'github',
      description: 'Icon from github.com that links to external site.',
      src: gitIcon
    },
    {
      name: 'linkedin',
      description: 'Icon from linkedin.com that links to external site.',
      src: linkedinIcon
    },
    {
      name: 'stack-overflow',
      description: 'Icon from stackoverflow.com that links to external site.',
      src: stackIcon
    }
  ]

  return (
    <div className="footer-div">
      <a href="https://github.com/sarawrmas" target="_blank" rel="noreferrer">
        <img
          src={icons[0].src}
          alt={icons[0].description}
          className="icon"
        >
        </img>
      </a>{" "}
      <a href="https://www.linkedin.com/in/sara-adamski/" target="_blank" rel="noreferrer">
        <img
          src={icons[1].src}
          alt={icons[1].description}
          className="icon"
        >
        </img>
      </a>{" "}
      <a href="https://stackexchange.com/users/20751541/sarawrmas" target="_blank" rel="noreferrer">
        <img
          src={icons[2].src}
          alt={icons[2].description}
          className="icon"
        >
        </img>
      </a>
      {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  )
}

export default Footer;