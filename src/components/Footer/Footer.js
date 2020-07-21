import React from "react";
import "./footer.css";

function Footer() {
  return (
    <nav class="nav  footer">
      <div className="container">
        <ul class="nav mt-3 mb-3">
          <li class="nav-item">
            <a class="nav-link" id="footer-link">
              Copyright &copy; 2010-2017 Tripwiz
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
