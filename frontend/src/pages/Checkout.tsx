import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserId from "../hooks/useUserId";
import { saveOrderToLocalStorage } from "../utils/orderUtils";
import { useCart } from "../context/CartContext";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import { CartItem } from "../models/CartItem";
import { Order, OrderItem } from "../models/Order";
import "../styles/Checkout.css";

const Checkout: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const navigate = useNavigate();
  const userId = useUserId();
  const { cart, clearCart } = useCart();

  const handleOrder = () => {
    const items: OrderItem[] = cart.map((item: CartItem) => {
      const itemTotalPrice = calculateTotalPrice(item, item.customizations);

      return {
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
        customizations: item.customizations,
        totalPrice: itemTotalPrice * item.quantity,
      };
    });

    const order: Order = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      items,
      total: items.reduce((acc, item) => acc + item.totalPrice, 0),
      date: new Date().toISOString(),
      customer: {
        name,
        email,
        address,
      },
    };

    saveOrderToLocalStorage(userId, order);
    // Clear the cart
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>We need some information to process your order.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOrder();
        }}
      >
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pre-Order</button>
      </form>
    </div>
  );
};

export default Checkout;
