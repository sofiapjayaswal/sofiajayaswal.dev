import React from 'react';
import logo from '../img/logo.png';

function Header() {
  return (
    <nav id="nav-bar">
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#home">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
