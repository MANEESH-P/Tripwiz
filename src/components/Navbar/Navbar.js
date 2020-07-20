import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-default navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="#">
          TRIPWIZ
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Experiences
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Questions
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                <button type="button" class="btn navbar-btn  btn-sm">
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
