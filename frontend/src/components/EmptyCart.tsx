import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EmptyCart.css";

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart-container">
      <div className="empty-cart-box">
        <h1>Oops! Your cart is empty</h1>
        <p>Click the button below to add some delicious coffee to your cart!</p>
        <button onClick={() => navigate("/")} className="shop-button">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
