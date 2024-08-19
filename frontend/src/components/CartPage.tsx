import React from "react";
import { useCart } from "../context/CartContext";
import CoffeeItem from "./CoffeeItem";

const CartPage: React.FC = () => {
  const { cart, totalPrice, totalQuantity } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((coffee) => <CoffeeItem key={coffee.id} coffee={coffee} />)
        )}
      </div>
      <div className="cart-summary">
        <h3>Total Items: {totalQuantity}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button>Order</button>
      </div>
    </div>
  );
};

export default CartPage;
