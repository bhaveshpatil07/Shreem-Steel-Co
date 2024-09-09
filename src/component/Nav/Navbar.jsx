import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleNested = () => setIsNestedOpen(!isNestedOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Shreem Steel Co</Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li onClick={toggleMenu} className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="nav-links">HOME</Link>
          </li>
          <li onClick={toggleMenu} className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" className="nav-links">ABOUT US</Link>
          </li>
          <li onClick={toggleMenu} className={`nav-item ${pathname === '/categoris' ? 'active' : ''}`}>
            <Link to="/categoris" className="nav-links"> CATEGORIES</Link>
          </li>
          <li onClick={toggleMenu} className={`nav-item ${pathname === '/contactus' ? 'active' : ''}`}>
            <Link to="/contactus" className="nav-links">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;