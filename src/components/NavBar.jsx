import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}


export default function NavBar() {
  const [windowSize, ] = useState(getWindowSize());
  let navigate  = useNavigate();


  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light shadow-lg">
      <div className="container-fluid">
      <span>
          <>
        {useLocation().pathname !== "/" &&
          windowSize.innerWidth < 768 &&
          <button onClick={() => navigate(-1)}>Back</button> 
        }
        </>
          </span>

          <span>
        <Link className="navbar-brand" to="/">
          <img
            src="images/newSafeLogo.png"
            style={{ width: "150px" }}
            className="logo img-fluid"
            alt="Logo"
          />
                  </Link>
          </span> 
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
              <Link className="nav-link click-scroll" to="/">
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
                  <Link className="dropdown-item" to="/Low-Current/1">
                  Audio visual
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Low-Current/2">
                  Public Address
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Low-Current/3">
                  Fire Detection
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Low-Current/4">
                  Access Control
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
              <Link className="nav-link click-scroll" to="/Clients">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/about-us">
                About Us
              </Link>
            </li>
            {/*
            <li className="nav-item">
              <Link className="nav-link click-scroll" to="/contact-us">
                Contact Us
              </Link>
            </li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
