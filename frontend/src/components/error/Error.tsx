import React from "react"; // Import React library for creating components
import { Container, Alert } from "react-bootstrap"; // Import Bootstrap components for layout and styling

// Define the props that the Error component will receive
interface ErrorProps {
  message: string; // The error message to be displayed
}

// Define the Error functional component
const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Container for centering the alert in the viewport */}
      <Alert variant="danger" className="text-center">
        {/* Alert component from Bootstrap for displaying the error */}
        <h4 className="alert-heading">An Error Occurred!</h4>
        {/* Heading for the alert */}
        <p>{message}</p>
        {/* Display the error message passed as a prop */}
      </Alert>
    </Container>
  );
};

export default Error; // Export the Error component for use in other parts of the application
