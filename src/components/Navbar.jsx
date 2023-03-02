import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar_fix navbar-dark bg-dark text-white navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            The Headline Hub
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
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item list-group-item p-1">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item text-white list-group-item p-1">
                <Link
                  className="nav-link active list-group-item-action primary"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item text-white list-group-item p-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item text-white list-group-item p-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item text-white list-group-item p-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item text-white list-group-item p-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item text-white list-group-item p-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar