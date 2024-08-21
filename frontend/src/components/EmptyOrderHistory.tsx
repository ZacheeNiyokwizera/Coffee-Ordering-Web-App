import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const EmptyOrderHistory: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row
        className="text-center p-4 border rounded shadow-sm bg-white"
        style={{ maxWidth: "500px" }}
      >
        <Col>
          <h2 className="text-warning mb-3">Your order history is empty</h2>
          <p className="mb-4">
            Click the button below to browse our coffee selection and place an
            order!
          </p>
          <Link to="/" className="btn btn-primary">
            Browse Coffees
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default EmptyOrderHistory;
