import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading: React.FC = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Spinner
        animation="border"
        role="status"
        className="mb-3"
        variant="primary"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="text-muted">Loading, please wait...</p>
    </Container>
  );
};

export default Loading;
