// src/components/CartPage.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "./CartPage";
import { useCart } from "../../context/CartContext";
import EmptyCart from "../EmptyCart";

import { useNavigate } from "react-router-dom";

// Mock the useCart hook
jest.mock("../../context/CartContext", () => ({
  useCart: jest.fn(),
}));

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("CartPage Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    // Provide mock cart data
    (useCart as jest.Mock).mockReturnValue({
      cart: [
        {
          _id: "1",
          name: "Latte",
          description: "Delicious latte",
          price: 5.0,
          image: "latte.jpg",
          ingredients: ["Milk", "Coffee"],
          customizationOptions: {},
          customizations: {},
          quantity: 1,
        },
      ],
      updateCartItemQuantity: jest.fn(),
      removeFromCart: jest.fn(),
    });
  });

  test("renders cart items and total price", () => {
    render(<CartPage />);

    // Check if the item is rendered
    expect(screen.getByText(/Delicious latte/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Total for All Items: \$5.00/i)
    ).toBeInTheDocument();
  });

  test("navigates to checkout on button click", () => {
    render(<CartPage />);

    // Check if the "Proceed to Checkout" button is rendered
    expect(screen.getByText(/Proceed to Checkout/i)).toBeInTheDocument();

    // Click the button
    fireEvent.click(screen.getByText(/Proceed to Checkout/i));

    // Check if navigate was called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith("/checkout");
  });
});
