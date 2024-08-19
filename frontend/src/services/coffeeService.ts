import { Coffee } from "../models/Coffee";

export const fetchCoffees = async (): Promise<Coffee[]> => {
  try {
    const response = await fetch("http://localhost:5000/api/coffee"); // Ensure this URL is correct

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to fetch coffees: ${errorDetails}`);
    }

    const data: Coffee[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching coffees:", error);
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};
