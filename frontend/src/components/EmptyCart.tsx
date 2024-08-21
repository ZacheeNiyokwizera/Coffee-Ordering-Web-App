import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const EmptyCart: React.FC = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row
        className="text-center p-4 border rounded shadow-sm bg-white"
        style={{ maxWidth: "500px" }}
      >
        <Col>
          {/* Display message when cart is empty */}
          <h1 className="text-warning mb-3">Your cart is empty</h1>
          {/* Instructions to add items to the cart */}
          <p className="mb-4">
            Click the button below to add some delicious coffee to your cart!
          </p>
          {/* Button to navigate back to the shop */}
          <Button variant="primary" size="lg" onClick={() => navigate("/")}>
            Shop Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EmptyCart;
