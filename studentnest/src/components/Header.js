import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useDropdown from '../hooks/useDropdown'; // Custom hook for dropdown management
import logo from '../assets/logo.png'; // Import the logo image
import '../Header.css';

// Social Icons Component
const SocialIcons = () => (
  <div className="social-icons d-flex">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link me-3" aria-label="Facebook">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </div>
);

// Contact Information Component
const ContactInfo = () => (
  <div className="contact-icons d-flex align-items-center">
    <Button variant="link" className="contact-button p-0 me-3" aria-label="Call Us">
      <FontAwesomeIcon icon={faPhone} /> CALL US +36-30-495-9996
    </Button>
    <FontAwesomeIcon icon={faSearch} className="icon-button me-3" aria-label="Search" />
    <FontAwesomeIcon icon={faShoppingCart} className="icon-button" aria-label="Shopping Cart" />
  </div>
);

const Header = () => {
  const { dropdownOpen, handleMouseEnter, handleMouseLeave } = useDropdown();

  return (
    <>
      {/* Top Section with Social Icons, Logo, and Contact */}
      <Navbar bg="white" expand="lg" className="top-navbar" collapseOnSelect>
        <Container className="align-items-center justify-content-between">
          <SocialIcons />
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            <img src={logo} alt="Logo" className="brand-image" />
          </Navbar.Brand>
          <ContactInfo />
        </Container>
      </Navbar>

      {/* Navigation Section */}
      <Navbar bg="light" expand="lg" className="bottom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto nav-links">
              <Nav.Link as={NavLink} exact to="/" className="nav-link" activeClassName="active-nav">Home</Nav.Link>
              <NavDropdown
                title="Accommodations"
                id="accommodations-dropdown"
                className="nav-link"
                show={dropdownOpen}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item as={NavLink} to="/flats-to-rent">Flats to Rent</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/for-sale">For Sale</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/available-places">Available Places</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/studio-flats">Studio Flats</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/private-rooms">Private Rooms</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/shared-rooms">Shared Rooms</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/registration" className="nav-link" activeClassName="active-nav">Registration Form</Nav.Link>
              <Nav.Link as={NavLink} to="/maintenance" className="nav-link" activeClassName="active-nav">Maintenance</Nav.Link>
              <Nav.Link as={NavLink} to="/karshi" className="nav-link" activeClassName="active-nav">Karshi</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link" activeClassName="active-nav">Contact</Nav.Link>
            </Nav>
            {/* Additional Items: Language, Login, Sign Up */}
            <div className="additional-nav-items d-flex align-items-center ms-auto">
              <span className="language-option me-3">English</span>
              <Nav.Link as={NavLink} to="/login" className="nav-link me-3">Login</Nav.Link>
              <Button as={Link} to="/signup" variant="outline-warning" className="sign-up-button px-3 py-1">Sign Up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
