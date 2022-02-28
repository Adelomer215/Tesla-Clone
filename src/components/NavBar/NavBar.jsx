import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand className="flex-grow-1 text-center">
        <a href=".">
          <img src="/images/logo.svg" alt="" />
        </a>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="flex-grow-1" style={{ fontWeight: "900" }}>
          <Nav.Link>Model 3</Nav.Link>
          <Nav.Link>Model S</Nav.Link>
          <Nav.Link>Model X</Nav.Link>
          <Nav.Link>Model Y</Nav.Link>
          <Nav.Link>Solar Roof</Nav.Link>
          <Nav.Link>Solar Panels</Nav.Link>
        </Nav>
        <Nav className="flex-grow-1" style={{ fontWeight: "900" }}>
          <Nav.Link>Shop</Nav.Link>
          <Nav.Link>Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
