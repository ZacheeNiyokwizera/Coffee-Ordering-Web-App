import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserId from "../hooks/useUserId";
import { Order } from "../models/Order";
import "../styles/OrderHistory.css";
import EmptyOrderHistory from "../components/EmptyOrderHistory";

const OrderHistory: React.FC = () => {
  const userId = useUserId();
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem(userId) || "[]");
    setOrders(savedOrders);
  }, [userId]);

  if (orders.length === 0) {
    return <EmptyOrderHistory />;
  }

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-item">
          <h2>Order ID: {order.id}</h2>
          <p>Date: {new Date(order.date).toLocaleDateString()}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
          <h3>Items:</h3>
          <div className="order-items-list">
            {order.items.map((item, index) => (
              <div key={index} className="order-item-detail">
                <img
                  src={item.image}
                  alt={item.name}
                  className="order-item-image"
                />
                <div className="order-item-info">
                  <p>
                    <strong>{item.name}</strong>
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <h3>Shipping Details:</h3>
          <p>Name: {order.customer.name}</p>
          <p>Email: {order.customer.email}</p>
          <p>Address: {order.customer.address}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
