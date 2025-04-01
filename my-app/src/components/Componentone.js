import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Componentone.css';

import { Link } from 'react-router-dom';

export default function Componentone() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='styLink'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='styLink'>Room</Nav.Link>
            <NavDropdown title="Reservation" id="collapsible-nav-dropdown" className='styLink'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/gallery" className="styLink">Gallery</Nav.Link> {/* Update Gallary */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='styLink'>About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='styLink'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
