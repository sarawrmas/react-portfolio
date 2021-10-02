import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
// import Resume from './pages/Resume';
// import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Projects />
      {/* <Resume /> */}
      <Blog />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;