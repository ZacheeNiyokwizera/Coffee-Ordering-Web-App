import { Coffee } from "../models/Coffee";

export const fetchCoffees = async (): Promise<Coffee[]> => {
  const response = await fetch("http://localhost:5000/api/coffee"); // Your backend API URL
  if (!response.ok) {
    throw new Error("Failed to fetch coffees");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
