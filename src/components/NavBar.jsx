import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/newSafeLogo.png";

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
    <nav className="navbar fixed-top navbar-expand-lg bg-light shadow-lg">
      <div
        className="container-fluid"
        style={{ padding: windowSize.innerWidth > 992 ? "0px 5%" : "" }}
      >
        <span>
          {useLocation().pathname !== "/" && windowSize.innerWidth < 992 && (
            <button
              onClick={() => navigate(-1)}
              style={backBtbStyle}
              type="button"
              data-bs-target="#hero-slide"
              data-bs-slide="prev"
            >
              <span
                style={{ width: "40px", height: "40px" }}
                className="carousel-control-prev-icon"
                aria-hidden="true"
              >
                <span className="visually-hidden">Previous</span>
              </span>
            </button>
          )}
        </span>
        <span>
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
              <Link className="nav-link click-scroll" 
               onClick={()=>{NavToHome("/")}}
                to={"/"}
               data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
               data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}
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
                  <Link className="dropdown-item"
                  onClick={()=>{NavToHome("/Audio-and-visual")}}
                  to={"/Audio-and-visual"}
                  data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
                  data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}
                  >
                    Audio visual
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item"
                   onClick={()=>{NavToHome("/Public-Address")}}
                   to={"/Public-Address"}
                   data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
                   data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}>
                    Public Address
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item"
                  onClick={()=>{NavToHome("/Fire-Detection")}}
                  to={"/Fire-Detection"}
                  data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
                  data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}>
                    
                    Fire Detection
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item"
                  onClick={()=>{NavToHome("/Access-Control")}}
                  to={"/Access-Control"}
                  data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
                data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}>
                    Access Control
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item"
                   onClick={()=>{NavToHome("/Medical")}}
                   to={"/Medical"}
                   data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
                data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}
                >
                    Medical Field
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link click-scroll"
               onClick={()=>{NavToHome("/partners")}}
               to={"/partners"}
               data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
               data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}>

                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll"
              onClick={()=>{NavToHome("/Clients")}}
              to={"/Clients"}
              data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
              data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}
                >
                
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link click-scroll"
              to={"/about-us"}
                onClick={()=>{NavToHome("/about-us")}}
                
                data-bs-toggle={`${windowSize.innerWidth < 992 ?"collapse":""}`}
                data-bs-target={`${windowSize.innerWidth < 992 ?"#navbarNav":""}`}
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
