import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SignupButton from "./SignupButton"; // Import the SignupButton component

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
          <Form className="d-flex justify-content-start align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ maxWidth: "200px" }} /* Adjust the max-width as needed */
            />
            <Button variant="outline-success" className="me-2">
              Search
            </Button>
          </Form>
          <SignupButton /> {/* Add the SignupButton here */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
