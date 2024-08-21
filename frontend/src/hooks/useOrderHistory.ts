import { useEffect, useState } from "react";

// Define the type for an Order
type Order = {
  id: string;
  items: string[];
  total: number;
  date: string;
};

// Custom hook for managing order history
const useOrderHistory = (userId: string): Order[] => {
  // State to hold the list of orders
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Fetch stored orders from localStorage
    const storedOrders = localStorage.getItem(`${userId}_orders`);
    if (storedOrders) {
      // Parse and set the orders if they exist
      setOrders(JSON.parse(storedOrders));
    }
  }, [userId]); // Re-run effect when userId changes

  // Return the list of orders
  return orders;
};

export default useOrderHistory;
