import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  const handleOrder = () => {
    // To do: Handle backend Logic here
    console.log("Order placed");
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul>
        {cart.map((coffee) => (
          <li key={coffee._id}>
            <img src={coffee.image} alt={coffee.name} width={50} height={50} />
            <div>
              <h2>{coffee.name}</h2>
              <p>${coffee.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(coffee._id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
        <button onClick={() => clearCart()}>Clear Cart</button>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
