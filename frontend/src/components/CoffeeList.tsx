import React from "react";
import { Coffee } from "../models/Coffee";
import CoffeeItem from "./CoffeeItem";
import { Container, Row } from "react-bootstrap";

interface CoffeeListProps {
  coffees: Coffee[];
}

const CoffeeList: React.FC<CoffeeListProps> = ({ coffees }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Our Popular Coffees</h2>
      <Row>
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee._id} coffee={coffee} />
        ))}
      </Row>
    </Container>
  );
};

export default CoffeeList;
