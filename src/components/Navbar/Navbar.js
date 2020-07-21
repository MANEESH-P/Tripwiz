import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          TRIPWIZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experiences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Questions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                <button type="button" className="btn navbar-btn  btn-sm">
                  SIGN IN
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
