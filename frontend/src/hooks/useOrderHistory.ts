import { useEffect, useState } from "react";

type Order = {
  id: string;
  items: string[];
  total: number;
  date: string;
};

const useOrderHistory = (userId: string): Order[] => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem(`${userId}_orders`);
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, [userId]);

  return orders;
};

export default useOrderHistory;
