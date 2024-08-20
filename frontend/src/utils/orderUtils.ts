import { Order } from "../models/Order";

export const saveOrderToLocalStorage = (userId: string, order: Order) => {
  const orders = JSON.parse(localStorage.getItem(userId) || "[]");
  orders.push(order);
  localStorage.setItem(userId, JSON.stringify(orders));
};
