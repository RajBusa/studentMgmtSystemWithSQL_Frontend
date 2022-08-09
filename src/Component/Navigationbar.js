import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand><Link className="nav-link" to="/">Student Management System</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className="nav-link" to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/adddata">AddData</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/studentlist">GetData</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigationbar
