import { Coffee } from "../models/Coffee";

export const fetchCoffees = async (): Promise<Coffee[]> => {
  const url = "http://localhost:5000/api/coffee";
  try {
    // Fetch coffee data from the API
    const response = await fetch(url);

    // Check if the response is OK (status code in the range 200-299)
    if (!response.ok) {
      // Get error details and throw an error if response is not OK
      const errorDetails = await response.text();
      throw new Error(`Failed to fetch coffees: ${errorDetails}`);
    }

    // Parse the JSON response and return the coffee data
    const data: Coffee[] = await response.json();
    return data;
  } catch (error) {
    // Log error to the console and throw a new error for unexpected issues
    console.error("Error fetching coffees:", error);
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};
