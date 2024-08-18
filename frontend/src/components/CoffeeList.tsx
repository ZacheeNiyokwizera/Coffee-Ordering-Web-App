// CoffeeList.tsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Coffee } from "../models/Coffee";
import { fetchCoffees } from "../services/coffeeService";
import { Link } from "react-router-dom";

import "../App";

const CoffeeList: React.FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadCoffees = async () => {
      try {
        const coffeeData = await fetchCoffees();
        setCoffees(coffeeData);
      } catch (error) {
        console.error("Failed to fetch coffees:", error);
      }
    };
    loadCoffees();
  }, []);

  return (
    <div className="coffee-list">
      {coffees.map((coffee) => (
        <div key={coffee._id} className="coffee-item">
          <img src={coffee.image} alt={coffee.name} />
          <h3>{coffee.name}</h3>
          <p>{coffee.description}</p>
          <p>${coffee.price.toFixed(2)}</p>
          <button onClick={() => addToCart(coffee)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default CoffeeList;
