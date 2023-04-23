// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Philip Kustura
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUserAlt className="icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <FaBriefcase className="icon" />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope className="icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;