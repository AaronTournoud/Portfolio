import React from 'react';
import { Link } from 'react-scroll';
import './Home.css'; // Asegúrate de crear este archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Link to="/">MI.DEV</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-mi">Sobre mí</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </nav>

      {/* Sección principal */}
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">Bienvenido a mi Portafolio</h1>
          <p className="main-description">
            Soy un Ingeniero en Sistemas apasionado por el desarrollo de software.
            <span className="highlight"> Transformando ideas en soluciones tecnológicas.</span>
          </p>
          
          <div className="cta-buttons">
            <Link to="/proyectos" className="primary-button">Ver Proyectos</Link>
            <Link to="/contacto" className="secondary-button">Contáctame</Link>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          
          <div className="scroll-indicator">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="footer">
        <p>© 2025 Mi Portafolio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;