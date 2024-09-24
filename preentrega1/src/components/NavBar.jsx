import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Calzados Miren</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
