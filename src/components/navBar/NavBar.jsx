import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="images/SafeLogo.png"
            style={{ width: "50px", height: "50px" , paddingRight:"10px"}}
            className="logo img-fluid"
            alt="Logo"
          />
          <span>
            Safe Zone
            <small>For Engineering and Trading</small>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className ="nav-link click-scroll" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link click-scroll dropdown-toggle"
                href="#section_5"
                id="navbarLightDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sectors
              </a>
              <ul
                className="dropdown-menu dropdown-menu-light"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/Low-Current">
                    Low Current
                  </Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/Medical">
                    Medical Field
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/partners">
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
