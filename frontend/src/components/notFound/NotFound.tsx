import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      {/* Display 404 error code */}
      <h1 className="display-1">404</h1>
      {/* Message informing the user that the page does not exist */}
      <p className="lead">
        Oops! The page you're looking for doesn't exist. We are sorry 😢
      </p>
      {/* Button to navigate back to the home page */}
      <Button variant="primary" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
