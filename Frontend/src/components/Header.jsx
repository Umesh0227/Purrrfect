import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SignupButton from "./SignupButton";
import '../App.css'; // Ensure this file includes your custom CSS

function NavScrollExample() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Purrrfect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pets</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Accessories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact us</Nav.Link>
          </Nav>
          <div className="form-container">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button className="custom-search-button">
                Search
              </Button>
            </Form>
          </div>
          <div className="signup-button-container">
            <SignupButton className="custom-signup-button" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
