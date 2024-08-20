import React, { useState } from "react";
import { Coffee } from "../models/Coffee";
import { useCart } from "../context/CartContext";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import "../styles/CoffeeItem.css";

interface CoffeeCustomizationProps {
  coffee: Coffee;
}

const CoffeeItem: React.FC<CoffeeCustomizationProps> = ({ coffee }) => {
  const [customizations, setCustomizations] = useState<{
    [key: string]: number;
  }>({});
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const handleCustomizationChange = (option: string, change: number) => {
    setCustomizations((prev) => ({
      ...prev,
      [option]: Math.max(0, (prev[option] || 0) + change),
    }));
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    const finalPrice = calculateTotalPrice(coffee, customizations);
    const customizedCoffee = {
      ...coffee,
      customizations,
      totalPrice: finalPrice,
      quantity,
    };
    addToCart(customizedCoffee); // Add to cart with final price and quantity
  };

  return (
    <div className="coffee-item">
      <div className="coffee-info">
        <img src={coffee.image} alt={coffee.name} />
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </div>
      {/* Display Ingredients */}
      <div className="ingredients">
        <strong>Ingredients:</strong> {coffee.ingredients.join(", ")}
      </div>

      {/* Customization Options */}
      <div className="customization-options">
        {Object.keys(coffee.customizationOptions).map((option) => (
          <div key={option} className="customization-option">
            <label>{option}</label>
            <div className="customization-controls">
              <button
                className="customization-decrease-button"
                onClick={() => handleCustomizationChange(option, -1)}
              >
                -
              </button>
              <span className="customization-value">
                {customizations[option] || 0}
              </span>
              <button
                className="customization-increase-button"
                onClick={() => handleCustomizationChange(option, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quantity Control */}
      <div className="coffee-card-bottom">
        <div className="quantity-controls">
          <label>Quantity:</label>
          <br></br>
          <button
            className="quantity-decrease-button"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button
            className="quantity-increase-button"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeItem;
