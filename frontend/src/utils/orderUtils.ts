import { Order } from "../models/Order";

export const saveOrderToLocalStorage = (userId: string, order: Order) => {
  // Retrieve existing orders from local storage, or initialize with an empty array if none exist
  const orders = JSON.parse(localStorage.getItem(userId) || "[]");

  // Add the new order to the array of orders
  orders.push(order);

  // Save the updated orders array back to local storage
  localStorage.setItem(userId, JSON.stringify(orders));
};
