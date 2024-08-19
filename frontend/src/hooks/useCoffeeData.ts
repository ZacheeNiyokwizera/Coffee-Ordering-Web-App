import { useState, useEffect } from "react";
import { fetchCoffees } from "../services/coffeeService";
import { Coffee } from "../models/Coffee";

export const useCoffeeData = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCoffees = async () => {
      try {
        const data = await fetchCoffees();
        setCoffees(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getCoffees();
  }, []);

  return { coffees, loading, error };
};
