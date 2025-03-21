import React from 'react';
import { Element } from 'react-scroll';
import Home from './components/Home/Home';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
//import Contact from './components/Contact/Contact';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Barra de navegación con react-scroll */}
      <NavBar />

      {/* Secciones de la página */}
      <Element name="Home" className="section">
        <Home />
      </Element>
      <Element name="About" className="section">
        <About />
      </Element>
      <Element name="Projects" className="section">
        <Projects />
      </Element>
      <Element name="Footer" className="section">
        <Footer />
      </Element>
    </div>
  );
}

export default App;