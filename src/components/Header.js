import React, {useState} from 'react';
import Navigation from './Navigation.js';
import About from './body/About.js';
import Portfolio from './body/Portfolio.js';
import Contact from './body/Contact.js';
import Resume from './body/Resume.js';

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  function renderPage() {
    switch(currentPage) {
      default: return <About />
      case "Portfolio":
        return <Portfolio/>;
      case "Contact":
        return <Contact/>;
      case "Resume":
        return <Resume/>;
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