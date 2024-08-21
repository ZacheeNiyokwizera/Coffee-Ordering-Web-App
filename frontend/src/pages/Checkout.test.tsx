import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkout from "./Checkout";
import { BrowserRouter as Router } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { saveOrderToLocalStorage } from "../utils/orderUtils";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";

// Mocking useCart hook
jest.mock("../context/CartContext", () => ({
  useCart: jest.fn(),
}));

// Mock functions for the hooks
const mockClearCart = jest.fn();
const mockCart = [
  {
    _id: "1",
    name: "Espresso",
    price: 3.0,
    quantity: 2,
    image: "espresso.jpg",
    customizations: {},
  },
  // Add more mock cart items if needed
];

describe("Checkout Component", () => {
  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      cart: mockCart,
      clearCart: mockClearCart,
    });
  });

  test("renders Checkout form and handles form submission", () => {
    const mockNavigate = jest.fn();
    jest
      .spyOn(require("react-router-dom"), "useNavigate")
      .mockReturnValue(mockNavigate);

    render(
      <Router>
        <Checkout />
      </Router>
    );

    // Check if the form is rendered
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address:/i)).toBeInTheDocument();

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name:/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email:/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Address:/i), {
      target: { value: "123 Main St" },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole("button", { name: /Pre-Order/i }));

    // Check if the navigate function was called
    expect(mockNavigate).toHaveBeenCalledWith("/thank-you");

    // Check if clearCart was called
    expect(mockClearCart).toHaveBeenCalled();
  });
});
