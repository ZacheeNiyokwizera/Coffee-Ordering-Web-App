import React from "react";
import { render, screen } from "@testing-library/react";
import CoffeeList from "./CoffeeList"; // Import the CoffeeList component
import { Coffee } from "../../models/Coffee"; // Import the Coffee type for type-checking
import "@testing-library/jest-dom/extend-expect"; // For extended matchers like .toBeInTheDocument()

// Mock components for the test environment
jest.mock("../loading/Loading", () => () => <div>Loading...</div>); // Mock Loading component
jest.mock("../error/Error", () => ({ message }: { message: string }) => (
  <div>Error: {message}</div> // Mock Error component with message prop
));
jest.mock(
  "../coffeeItem/CoffeeItem",
  () =>
    ({ coffee }: { coffee: Coffee }) =>
      <div>{coffee.name}</div> // Mock CoffeeItem component displaying coffee name
);

// Mock data for testing
const mockCoffees: Coffee[] = [
  {
    _id: "1",
    name: "Latte",
    description: "A creamy coffee with steamed milk.",
    price: 3.5,
    image: "latte.jpg",
    ingredients: ["coffee", "milk"],
    customizationOptions: {
      size: {
        type: "free",
        maxQuantity: 3,
      },
      milkType: {
        type: "paid",
        price: 0.5,
        maxQuantity: 2,
      },
    },
  },
  {
    _id: "2",
    name: "Espresso",
    description: "A strong coffee with a rich flavor.",
    price: 2.5,
    image: "espresso.jpg",
    ingredients: ["coffee"],
    customizationOptions: {
      size: {
        type: "free",
        maxQuantity: 3,
      },
    },
  },
];

describe("CoffeeList Component", () => {
  // Test if the loading indicator is displayed when loading is true
  test("displays loading indicator when loading", () => {
    render(<CoffeeList coffees={[]} loading={true} error={null} />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument(); // Check for "Loading..." text
  });

  // Test if the error message is displayed when there is an error
  test("displays error message when there is an error", () => {
    render(
      <CoffeeList coffees={[]} loading={false} error="Failed to load data" />
    );
    expect(screen.getByText(/Error: Failed to load data/i)).toBeInTheDocument(); // Check for error message
  });

  // Test if the list of coffee items is rendered when data is available
  test("renders list of coffee items when data is available", () => {
    render(<CoffeeList coffees={mockCoffees} loading={false} error={null} />);

    // Check if CoffeeItems are rendered with the correct names
    expect(screen.getByText("Latte")).toBeInTheDocument();
    expect(screen.getByText("Espresso")).toBeInTheDocument();
  });

  // Test if no coffee items message is displayed when there are no coffees
  test("displays no coffee items message when there are no coffees", () => {
    render(<CoffeeList coffees={[]} loading={false} error={null} />);

    // Check if no coffee items are displayed
    expect(screen.queryByText("Latte")).not.toBeInTheDocument();
    expect(screen.queryByText("Espresso")).not.toBeInTheDocument();
  });
});
