import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-light py-3 mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Coffee Shop. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
