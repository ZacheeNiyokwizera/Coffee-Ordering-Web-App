import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserId from "../hooks/useUserId";
import { saveOrderToLocalStorage } from "../utils/orderUtils";
import { useCart } from "../context/CartContext";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import { CartItem } from "../models/CartItem";
import { Order, OrderItem } from "../models/Order";

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
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="checkout-page p-4 border rounded bg-light shadow-sm">
            <h1 className="text-center mb-4">Checkout</h1>
            <p className="text-center mb-4">
              We need some information to process your order.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOrder();
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Pre-Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
