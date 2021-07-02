import React from 'react';
import {
  Navbar, Nav
} from 'react-bootstrap';

const index = () => {
  return (
    <div>
      <Navbar  bg="light" expand="lg">
        <Navbar.Brand href="#home">The Dove Guy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}

export default index;
