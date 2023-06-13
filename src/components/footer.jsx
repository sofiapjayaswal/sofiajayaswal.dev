import React from 'react';
import emailIcon from '../img/email.svg';
import gitIcon from '../img/github.svg';
import linkedinIcon from '../img/linkedin.svg';

function Footer() {
  return (
    <div id="footer">
      <h2 className="footer-text">Sofia Jayaswal 2023</h2>
      <div id="links">
        <a className="button-link" href="mailto:sofiajayaswal@gmail.com">
          <img src={emailIcon} alt="" />
        </a>
        <a className="button-link" target="_blank" href="https://github.com/sofiapjayaswal" rel="noreferrer">
          <img src={gitIcon} alt="" />
        </a>
        <a className="button-link" target="_blank" href="https://www.linkedin.com/in/sofiajayaswal/" rel="noreferrer">
          <img src={linkedinIcon} alt="" />
        </a>
      </div>
      <a className="footer-text" target="_blank" href="https://github.com/sofiapjayaswal/sofiajayaswal.dev" rel="noreferrer">Source Code</a>
    </div>
  );
}
export default Footer;
