import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <img src="/imges/logo6.jpg" alt="Logo" style={{ width: '180px', height: '70px' }} />
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-4 mb-lg-0 fs-5">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/course">Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <form className="d-flex gap-2"> 
            <Link to="/login" className="btn btn-info">
              Login
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
