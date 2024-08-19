import React from "react";
import { CartItem } from "../models/CartItem";
import { useCart } from "../context/CartContext";

interface CoffeeItemProps {
  coffee: CartItem;
}

const CoffeeItem: React.FC<CoffeeItemProps> = ({ coffee }) => {
  const { updateCartItemQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateCartItemQuantity(coffee.id, coffee.quantity + 1);
  };

  const handleDecrease = () => {
    if (coffee.quantity > 1) {
      updateCartItemQuantity(coffee.id, coffee.quantity - 1);
    } else {
      removeFromCart(coffee.id);
    }
  };

  return (
    <div className="coffee-item">
      <img src={coffee.image} alt={coffee.name} />
      <div>
        <h3>{coffee.name}</h3>
        <p>Price: ${coffee.price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{coffee.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <p>Total: ${(coffee.price * coffee.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CoffeeItem;
