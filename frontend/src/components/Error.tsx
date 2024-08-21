import React from "react";
import { Container, Alert } from "react-bootstrap";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Alert variant="danger" className="text-center">
        <h4 className="alert-heading">An Error Occurred!</h4>
        <p>{message}</p>
      </Alert>
    </Container>
  );
};

export default Error;
