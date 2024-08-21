import { useEffect, useState } from "react";

// Function to generate a unique ID
const generateUniqueId = (): string => {
  // Generate a unique ID using random numbers and string manipulation
  return "_" + Math.random().toString(36).substr(2, 9);
};

// Custom hook for managing and retrieving a user ID
const useUserId = (): string => {
  // State to hold the user ID
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    // Retrieve the user ID from localStorage
    let storedUserId = localStorage.getItem("userId");

    // If no user ID exists, generate a new one and store it
    if (!storedUserId) {
      storedUserId = generateUniqueId();
      localStorage.setItem("userId", storedUserId);
    }

    // Update the state with the user ID
    setUserId(storedUserId);
  }, []); // Empty dependency array ensures this effect runs once after initial render

  // Return the user ID
  return userId;
};

export default useUserId;
