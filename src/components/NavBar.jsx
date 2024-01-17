import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
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
  backgroundSize: "30% 55px",
  margin: "0px 0px",
  padding: "5px 5px",
};
const backBtbStyle = {
  display: "inline",
  position: "absolute",
  top: "0",
  left: "0",
  border: 0,
  background: "inherit",
};

const dropdownBgStyle = {
  width: "175px",
  backgroundColor: "#ffff",
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function NavBar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  let navigate = useNavigate();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={windowSize.innerWidth > 992 ? { ...fullSize } : { ...smallSize }}
      sticky="top"
      className="fw-semibold"
    >
      <Container fluid>
        <Nav.Link>
          {useLocation().pathname !== "/" && windowSize.innerWidth < 992 && (
            <button onClick={() => navigate(-1)} style={backBtbStyle}>
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                }}
                className="carousel-control-prev-icon"
                aria-hidden="true"
              >
                <span className="visually-hidden">Previous</span>
              </span>
            </button>
          )}
        </Nav.Link>
        <Navbar.Brand as={Link} to="/" style={{ marginLeft: windowSize.innerWidth > 1292 ? "45%" :"20%" }}>

        {/* <Navbar.Brand as={Link} to="/" style={{ marginLeft: "20%" }}> */}
          <img
            src={Logo}
            style={{ width: "150px", height: "60px" }}
            className="logo img-fluid"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="1" as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Solutions" id="collasible-nav-dropdown">
              <div style={dropdownBgStyle}>
                <NavDropdown.Item
                  href="#"
                  as={Link}
                  to="/services/Audio-Video-Systems"
                >
                  Audio visual
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  as={Link}
                  to="/services/Public-Address-&-Voice-Evacuation-Systems"
                >
                  Public Address
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  as={Link}
                  to="/services/Fire-Detection-Alarm-System"
                >
                  Fire Detection
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  as={Link}
                  to="/services/Security-System"
                >
                  Security System
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  as={Link}
                  to="/services/Home-Automation-&-Smart-Homes"
                >
                  Home Automation
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="#"
                  as={Link}
                  to="/services/Automatic-Entrance-Solutions"
                >
                  Automatic Entrance
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="#"
                  as={Link}
                  to="/services/Other-ELV-Solutions"
                >
                  ELV solutions
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link href="2" as={Link} to="/Partners">
              Partners
            </Nav.Link>
            <Nav.Link href="3" as={Link} to="/Clients">
              Clients
            </Nav.Link>
            <Nav.Link href="4" as={Link} to="/About-Us">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
