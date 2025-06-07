import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Neuomorphism.css'; // We'll create this for navbar styles

function Navbar() {
  return (
    <nav className="neu-navbar">
      <ul className="neu-nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li> {/* Added Experience link */}
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
