import React from 'react';
import { Link, Element } from 'react-scroll';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Barra de navegación con react-scroll */}
      <nav>
        <ul>
          <li>
            <Link to="Home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Secciones de la página */}
      <Element name="Home" className="section">
        <Home />
      </Element>
      <Element name="About" className="section">
        <About />
      </Element>
    </div>
  );
}

export default App;