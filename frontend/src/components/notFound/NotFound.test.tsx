import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

// Mock useNavigate from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("renders NotFound component and navigates to home page when button is clicked", () => {
  const mockNavigate = jest.fn(); // Create a mock function for navigation
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate); // Use the mock function for useNavigate

  render(
    <Router>
      <NotFound />
    </Router>
  );

  // Check if the NotFound component renders the 404 text
  expect(screen.getByText("404")).toBeInTheDocument();
  // Check if the "Go Back Home" button is rendered
  expect(screen.getByText("Go Back Home")).toBeInTheDocument();
});
