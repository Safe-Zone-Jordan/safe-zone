import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const backBtbStyle = {
  border: 0,
  background: "inherit",
};

export default function NavBar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  let navigate = useNavigate();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light shadow-lg">
      <div
        className="container-fluid"
        style={{ padding: windowSize.innerWidth > 992 ? "0px 5%" : "" }}
      >
         <span>
        {useLocation().pathname !== "/" && windowSize.innerWidth < 992 &&  (
              <button
                onClick={() => navigate(-1)}
                style={backBtbStyle}
                type="button"
                data-bs-target="#hero-slide"
                data-bs-slide="prev"
              >
                   <span className="carousel-control-prev-icon" aria-hidden="true">
              <span className="visually-hidden">Previous</span>
            </span>
              </button>
        )}
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
                onClick={toggle}
                >
                Sectors
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarLightDropdownMenuLink"
                style={{ display: open ? "block":"" }}
              
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
