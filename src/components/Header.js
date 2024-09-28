import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CodeIcon from '@mui/icons-material/Code';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={RouterLink} to="/" className="d-flex align-items-center">
          <CodeIcon className="d-none d-md-block me-2" />
          <span style={{
            // fontFamily: "'Anton', sans-serif",
            fontWeight: 'bold',
            fontSize: '2rem',
            color: '#2196f3',
            textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
          }}>
            Code Clash
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={RouterLink} to="/">Home</Nav.Link>
            <Nav.Link as={RouterLink} to="/about">About</Nav.Link>
            <Nav.Link as={RouterLink} to="/schedule">Schedule</Nav.Link>
            <Nav.Link as={RouterLink} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={RouterLink} to="/apply">
              <button className="btn btn-primary">Apply Now</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
