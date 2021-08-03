import React, {useState} from 'react';
import Navigation from './Navigation.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Resume from './Resume.js';

function Header() {
  const [currentPage, setCurrentPage] = useState();

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
      <h1 className="header-h1">Sara Adamski</h1>
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