import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

const NavigationBar: React.FC = () => {
  const { totalQuantity } = useCart(); // Get the total quantity of items in the cart

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          <i className="fas fa-coffee me-2"></i>
          Coffee Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/order-history" style={{ color: "white" }}>
              Order History
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              className="position-relative"
              style={{ color: "white" }}
            >
              <i className="fas fa-shopping-cart"></i>
              {totalQuantity > 0 && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalQuantity}{" "}
                  {/* Display the total quantity of items in the cart */}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
