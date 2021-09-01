import React, {useState} from 'react';
import Navigation from './Navigation';
import About from '../pages/About.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import Resume from '../pages/Resume.js';
import Blog from '../pages/Blog';

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  function renderPage() {
    switch(currentPage) {
      default: return <About />
      case "Projects":
        return <Projects/>;
      case "Contact":
        return <Contact/>;
      case "Resume":
        return <Resume/>;
      case "Blog":
        return <Blog/>
    }
  }

  return (
    <div>
    <div className="header-div">
      <h1 className="header-h1 nav-li">Sara Adamski</h1>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
    {renderPage(currentPage)}
    </div>
  )
}

export default Header;