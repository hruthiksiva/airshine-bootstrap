import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../assets/images/logo.jpg';

const NavbarSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid mx-5 px-5">
        <Link className="navbar-brand" to="/">
          <img src={logoimg} className="img-fluid" style={{ maxHeight: '45px' }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/about">About</Link>
            </li>
            <li
              className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="nav-link mx-2 dropdown-toggle"
                to="/ourservices"
                role="button"
                aria-expanded={dropdownOpen ? 'true' : 'false'}
              >
                Services
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/flights">Flights</Link></li>
                <li><Link className="dropdown-item" to="/hotels">Hotels</Link></li>
                <li><Link className="dropdown-item" to="/visa">Visa</Link></li>
                <li><Link className="dropdown-item" to="/insurance">Insurance</Link></li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="nav-link mx-2 dropdown-toggle"
                to="/domestic"
                role="button"
                aria-expanded={dropdownOpen ? 'true' : 'false'}
              >
                Holiday
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/domestic">Domestic Trips</Link></li>
                <li><Link className="dropdown-item" to="/international">International Trips</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/contact" className="btn btn-primary">Call</Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;