// import React from "react";
// import { Coffee } from "../models/Coffee";
// import CoffeeItem from "./CoffeeItem";
// import { Container, Row } from "react-bootstrap";

// interface CoffeeListProps {
//   coffees: Coffee[];
// }

// const CoffeeList: React.FC<CoffeeListProps> = ({ coffees }) => {
//   return (
//     <Container className="mt-4">
//       <h2 className="text-center mb-4">Our Popular Coffees</h2>
//       <Row>
//         {coffees.map((coffee) => (
//           <CoffeeItem key={coffee._id} coffee={coffee} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CoffeeList;
import React from "react";
import { Coffee } from "../models/Coffee";
import CoffeeItem from "./CoffeeItem";
import { Container, Row, Spinner, Alert } from "react-bootstrap";

interface CoffeeListProps {
  coffees: Coffee[];
  loading: boolean;
  error: string | null;
}

const CoffeeList: React.FC<CoffeeListProps> = ({ coffees, loading, error }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Our Popular Coffees</h2>
      {loading && (
        <Spinner animation="border" className="d-block mx-auto my-4" />
      )}
      {error && (
        <Alert variant="danger" className="text-center my-4">
          {error}
        </Alert>
      )}
      <Row>
        {!loading &&
          !error &&
          coffees.map((coffee) => (
            <CoffeeItem key={coffee._id} coffee={coffee} />
          ))}
      </Row>
    </Container>
  );
};

export default CoffeeList;
