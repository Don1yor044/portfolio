import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation()

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  return (

    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          M.D

        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item >
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}
                className={location.pathname === "/" ? "active" : ""}

              >
                <AiOutlineHome style={{ marginBottom: "4px" }} />
                <span style={{ marginLeft: "5px" }}>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={location.pathname === "/about" ? "active" : "activeEmas"}

              >
                <AiOutlineUser style={{ marginBottom: "4px" }} />
                <span style={{ marginLeft: "5px" }}>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={location.pathname === "/project" ? "active" : ""}

              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "4px" }}
                />{" "}
                <span style={{ marginLeft: "5px" }}>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)
                }
                className={location.pathname === "/resume" ? "active" : ""}
              >
                <CgFileDocument style={{ marginBottom: "4px" }} />
                <span style={{ marginLeft: "5px" }}>Resume</span>

              </Nav.Link>
            </Nav.Item>


            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Don1yor044"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;
