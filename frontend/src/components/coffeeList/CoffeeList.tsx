import React from "react";
import { Coffee } from "../../models/Coffee"; // Import Coffee type for type-checking
import CoffeeItem from "../coffeeItem/CoffeeItem"; // Import CoffeeItem component for displaying individual coffee items
import { Container, Row } from "react-bootstrap"; // Import Bootstrap components for layout
import Loading from "../loading/Loading"; // Import Loading component for loading state
import Error from "../error/Error"; // Import Error component for error state

// Define the props for the CoffeeList component
interface CoffeeListProps {
  coffees: Coffee[]; // Array of coffee objects
  loading: boolean; // Loading state indicator
  error: string | null; // Error message if there's an error
}

// Define the CoffeeList functional component
const CoffeeList: React.FC<CoffeeListProps> = ({ coffees, loading, error }) => {
  // Render loading indicator if loading is true
  if (loading) {
    return <Loading />;
  }

  // Render error message if there's an error
  if (error) {
    return <Error message={error} />;
  }

  // Render the list of coffee items if no loading or error state
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Our Popular Coffees</h2>
      <Row>
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee._id} coffee={coffee} /> // Render a CoffeeItem for each coffee
        ))}
      </Row>
    </Container>
  );
};

export default CoffeeList; // Export the component for use in other parts of the application
