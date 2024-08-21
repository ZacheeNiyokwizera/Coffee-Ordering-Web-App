import React from "react";
import { render, screen } from "@testing-library/react";
import CoffeeItem from "./CoffeeItem";
import { Coffee } from "../../models/Coffee";
// CoffeeItem.test.tsx

import { CartProvider, useCart } from "../../context/CartContext";

// Define a mock coffee item
const mockCoffee: Coffee = {
  _id: "1",
  name: "Espresso",
  price: 3.5,
  image: "espresso.jpg",
  description: "Strong coffee",
  ingredients: ["coffee"],
  customizationOptions: {},
};

// Mock implementation of useCart hook
const mockAddToCart = jest.fn();
jest.mock("../../context/CartContext", () => ({
  ...jest.requireActual("../../context/CartContext"),
  useCart: () => ({
    addToCart: mockAddToCart,
  }),
}));

describe("CoffeeItem Component", () => {
  test("renders coffee details correctly", () => {
    // Render the CoffeeItem component with the mock coffee item
    render(
      <CartProvider>
        <CoffeeItem coffee={mockCoffee} />
      </CartProvider>
    );

    // Check if the coffee name is displayed
    expect(screen.getByText("Espresso")).toBeInTheDocument();

    // Check if the coffee description is displayed
    expect(screen.getByText("Strong coffee")).toBeInTheDocument();

    // Check if the coffee image is displayed
    const imgElement = screen.getByAltText("Espresso");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "espresso.jpg");
  });
});
