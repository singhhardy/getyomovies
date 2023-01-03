import React from "react";
import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light fw-bold" href="/">
            GetYoMovies
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold text-light active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link fw-bold text-light" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item fw-bold text-light dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover
                </a>
                <ul className="dropdown-menu border-success ">
                  <li>
                    <a className="dropdown-item" href="#">
                      Hollywood
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MCU
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DC
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-light">
                <a href="https://getyomovies.blogspot.com" target="_blank" className="nav-link  text-light">Blog</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2 bg-transparent text-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn searchbtn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
