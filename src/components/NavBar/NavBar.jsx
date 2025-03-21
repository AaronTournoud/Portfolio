import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';


const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Mostrar la barra de navegación cuando el usuario desplaza más de 100px
      if (position > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    
    // Agregar event listener para el scroll
    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calcular opacidad basada en la posición del scroll
  // Mantenemos baja opacidad para mayor transparencia
  const navbarOpacity = Math.min(scrollPosition / 1000, 0.4);
  
  // Usamos color oscuro con transparencia para modo oscuro
  const navbarStyle = {
    backgroundColor: `rgba(20, 20, 30, ${navbarOpacity})`,
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)'
  };
  
  
  return (
    <nav 
      className={`navbar ${showNav ? 'navbar-visible' : 'navbar-hidden'}`} 
      style={navbarStyle}
    >
      <div className="navbar-container">
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>

      </div>
    </nav>
  );
};

export default NavBar;