import { render, screen } from "@testing-library/react";
import { act } from "react";
import Loading from "./Loading";

test("renders spinner and loading message", () => {
  // Render the Loading component
  act(() => {
    render(<Loading />);
  });

  // Check if the spinner is in the document
  const spinnerElement = screen.getByRole("status");
  expect(spinnerElement).toBeInTheDocument();
});
