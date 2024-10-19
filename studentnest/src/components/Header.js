import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">StudentNest</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/listings">Listings</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <NavDropdown title="Admin" id="admin-nav-dropdown">
            <NavDropdown.Item as={Link} to="/admin-dashboard">Admin Dashboard</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/manage-users">Manage Users</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/manage-listings">Manage Listings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

