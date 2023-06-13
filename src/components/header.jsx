import React from 'react';
import { Link } from 'react-scroll';
import logo from '../img/logo.png';

function Header() {
  return (
    <div className="nav-bar">
      <Link activeClass="item-active" to="home" spy smooth offset={-150} duration={500}>
        <img src={logo} alt="" />
      </Link>
      <div className="nav-links">
        <Link activeClass="item-active" to="home" spy smooth offset={-150} duration={500}>
          <div className="nav-item">Home</div>
        </Link>
        <Link activeClass="item-active" to="about" spy smooth offset={-150} duration={500}>
          <div className="nav-item">About</div>
        </Link>
        <Link activeClass="item-active" to="experience" spy smooth offset={-150} duration={500}>
          <div className="nav-item">Experience</div>
        </Link>
        {/* <Link activeClass="itemActive" to="projects" spy={true} smooth={true} offset={-70} duration={500} style={{color: 'FFFFFF'}}>
          <div className="HeaderItem"> Projects </div>
        </Link> */}
        <a href="/" target="_blank" rel="noreferrer" className="nav-item">Resume</a>
      </div>
    </div>
  );
}
export default Header;
