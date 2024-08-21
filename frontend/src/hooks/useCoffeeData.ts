import { useState, useEffect } from "react";
import { fetchCoffees } from "../services/coffeeService";
import { Coffee } from "../models/Coffee";

// Custom hook for managing coffee data fetching and state
export const useCoffeeData = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // State to handle any error messages
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Async function to fetch coffee data
    const getCoffees = async () => {
      try {
        // Fetch coffee data from the service
        const data = await fetchCoffees();
        // Update state with fetched coffee data
        setCoffees(data);
      } catch (error) {
        // Handle any errors that occurred during fetching
        setError((error as Error).message);
      } finally {
        // Set loading to false after fetching data or encountering an error
        setLoading(false);
      }
    };

    // Call the async function to fetch data
    getCoffees();
  }, []);

  // Return coffee data, loading state, and error
  return { coffees, loading, error };
};
