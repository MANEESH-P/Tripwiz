import React from "react";
import "./footer.css";

function Footer() {
  return (
    <nav className="nav  footer">
      <div className="container">
        <ul className="nav mt-3 mb-3">
          <li className="nav-item">
            <a className="nav-link" id="footer-link">
              Copyright &copy; 2010-2017 Tripwiz
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
