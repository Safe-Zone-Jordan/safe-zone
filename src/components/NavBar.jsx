import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/newSafeLogo.png";
import topLeft from "../assets/topLeft.png";

const fullSize = {
  backgroundImage: `url(${topLeft})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top",
  backgroundSize: "23% 100%",
};
const smallSize = {
  backgroundImage: `url(${topLeft})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top",
  backgroundSize: "30% 46px",
  margin: "0px 0px",
  padding: "5px 5px",
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
const backBtbStyle = {
  display: "inline",
  position: "absolute",
  top: "0",
  left: "0",
  border: 0,
  background: "inherit",
};

export default function NavBar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(false);

  const NavToHome = (rout) => {
    setOpen(false);
    navigate(rout);
  };

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
    <nav
      style={windowSize.innerWidth > 992 ? { ...fullSize } : { ...smallSize }}
      className="navbar fixed-top navbar-expand-lg bg-light shadow-lg"
    >
      <div className="container-fluid">
        <span>
          {useLocation().pathname !== "/" && windowSize.innerWidth < 992 && (
            <button
              onClick={() => navigate(-1)}
              style={backBtbStyle}
            >
              <span
                style={{
                  width: "25px",
                  height: "25px",
                  position: "absolute",
                  top: "5px",
                  left: "10px",
                }}
                className="carousel-control-prev-icon"
                aria-hidden="true"
              >
                <span className="visually-hidden">Previous</span>
              </span>
            </button>
          )}
        </span>

        <span style={{ marginLeft: "20%" }}>
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
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
              <Link
                className="nav-link click-scroll"
                onClick={() => {
                  NavToHome("/");
                }}
                to={"/"}
                data-bs-toggle={`${
                  windowSize.innerWidth < 992 ? "collapse" : ""
                }`}
                data-bs-target={`${
                  windowSize.innerWidth < 992 ? "#navbarNav" : ""
                }`}
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a
                className="nav-link click-scroll dropdown-toggle"
                // href="#"
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
                style={{
                  display: open && windowSize.innerWidth < 992 ? "block" : "",
                }}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={() => {
                      NavToHome("/services/Audio-and-visual");
                    }}
                    to={"/services/Audio-and-visual"}
                    data-bs-toggle={`${
                      windowSize.innerWidth < 992 ? "collapse" : ""
                    }`}
                    data-bs-target={`${
                      windowSize.innerWidth < 992 ? "#navbarNav" : ""
                    }`}
                  >
                    Audio visual
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={() => {
                      NavToHome("/services/Public-Address");
                    }}
                    to={"/services/Public-Address"}
                    data-bs-toggle={`${
                      windowSize.innerWidth < 992 ? "collapse" : ""
                    }`}
                    data-bs-target={`${
                      windowSize.innerWidth < 992 ? "#navbarNav" : ""
                    }`}
                  >
                    Public Address
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={() => {
                      NavToHome("/services/Fire-Detection");
                    }}
                    to={"/services/Fire-Detection"}
                    data-bs-toggle={`${
                      windowSize.innerWidth < 992 ? "collapse" : ""
                    }`}
                    data-bs-target={`${
                      windowSize.innerWidth < 992 ? "#navbarNav" : ""
                    }`}
                  >
                    Fire Detection
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={() => {
                      NavToHome("/services/Access-Control");
                    }}
                    to={"/services/Access-Control"}
                    data-bs-toggle={`${
                      windowSize.innerWidth < 992 ? "collapse" : ""
                    }`}
                    data-bs-target={`${
                      windowSize.innerWidth < 992 ? "#navbarNav" : ""
                    }`}
                  >
                    Access Control
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={() => {
                      NavToHome("/services/Medical");
                    }}
                    to={"/services/Medical"}
                    data-bs-toggle={`${
                      windowSize.innerWidth < 992 ? "collapse" : ""
                    }`}
                    data-bs-target={`${
                      windowSize.innerWidth < 992 ? "#navbarNav" : ""
                    }`}
                  >
                    Medical Field
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link click-scroll"
                onClick={() => {
                  NavToHome("/partners");
                }}
                to={"/partners"}
                data-bs-toggle={`${
                  windowSize.innerWidth < 992 ? "collapse" : ""
                }`}
                data-bs-target={`${
                  windowSize.innerWidth < 992 ? "#navbarNav" : ""
                }`}
              >
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link click-scroll"
                onClick={() => {
                  NavToHome("/Clients");
                }}
                to={"/Clients"}
                data-bs-toggle={`${
                  windowSize.innerWidth < 992 ? "collapse" : ""
                }`}
                data-bs-target={`${
                  windowSize.innerWidth < 992 ? "#navbarNav" : ""
                }`}
              >
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link click-scroll"
                to={"/about-us"}
                onClick={() => {
                  NavToHome("/about-us");
                }}
                data-bs-toggle={`${
                  windowSize.innerWidth < 992 ? "collapse" : ""
                }`}
                data-bs-target={`${
                  windowSize.innerWidth < 992 ? "#navbarNav" : ""
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
