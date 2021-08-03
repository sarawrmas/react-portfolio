import React, { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';
import Nav from './components/Nav.js';

function App() {
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
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage(currentPage)}
    </div>
  );
}

export default App;