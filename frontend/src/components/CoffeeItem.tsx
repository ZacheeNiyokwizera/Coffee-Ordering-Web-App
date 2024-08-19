import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Coffee } from "../models/Coffee";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";

interface CoffeeCustomizationProps {
  coffee: Coffee;
}

const CoffeeItem: React.FC<CoffeeCustomizationProps> = ({ coffee }) => {
  const [customizations, setCustomizations] = useState<{
    [key: string]: number;
  }>({});
  const [quantity, setQuantity] = useState<number>(1); // Default quantity is 1
  const { addToCart } = useCart();

  const handleCustomizationChange = (option: string, quantity: number) => {
    setCustomizations((prev) => ({ ...prev, [option]: quantity }));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    const finalPrice = calculateTotalPrice(coffee, customizations);
    const customizedCoffee = {
      ...coffee,
      customizations,
      totalPrice: finalPrice,
      quantity, // Include quantity in the customized coffee
    };
    addToCart(customizedCoffee); // Add to cart with final price and quantity
  };

  return (
    <div className="coffee-item">
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <img src={coffee.image} alt={coffee.name} />

      <div className="customization-options">
        {Object.keys(coffee.customizationOptions).map((option) => (
          <div key={option} className="customization-option">
            <label>{option}</label>
            <input
              type="number"
              min="0"
              value={customizations[option] || 0}
              onChange={(e) =>
                handleCustomizationChange(option, Number(e.target.value))
              }
            />
          </div>
        ))}
      </div>

      <div className="quantity-controls">
        <label>Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CoffeeItem;
