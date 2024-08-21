import React from "react";
import { render, screen } from "@testing-library/react"; // Import testing utilities from React Testing Library
import "@testing-library/jest-dom"; // Import jest-dom for extended matchers
import Error from "./Error"; // Import the Error component to be tested

describe("Error Component", () => {
  test("renders error message", () => {
    const errorMessage = "Something went wrong"; // Define the error message to be tested

    // Render the Error component with the provided errorMessage prop
    render(<Error message={errorMessage} />);

    // Check if the error message is rendered correctly in the document
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
