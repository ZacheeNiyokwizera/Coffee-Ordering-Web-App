import React from "react";
import { Spinner, Container } from "react-bootstrap";

const Loading: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      {/* Display spinner centered on the page */}
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
