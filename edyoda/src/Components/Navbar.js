import React from 'react';
import './Navbar.css';
import LOGO from '../Images/LOGO.png';

function Navbar() {
  return (
    <nav className="nav_section">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="nav-items">
        <li><a href="#">Courses</a></li><i className="fa-solid fa-angle-down"></i>
        <li><a href="#">Programs</a></li><i className="fa-solid fa-angle-down"></i>
      </div>
      <ul className="nav__list">
        <i className="fa-solid fa-magnifying-glass"></i>
        <li className="nav__item"><a href="#" className="nav__link">Log in</a></li>
        <li className="nav__item">
          <a href="#" className="nav__link2 nav__link--button">JOIN NOW</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;