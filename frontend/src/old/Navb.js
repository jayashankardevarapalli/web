import React from "react";
import "./assets/navbar.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const Navb = () => {
  return (
    <>
      {/* <Navbar className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/about" active>
              About Me
            </Nav.Link>
            <Nav.Link href="/contact" active>
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <div
        className="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample10"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Centered nav only
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navb;
