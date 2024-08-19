import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Coffee } from "../models/Coffee";
import { fetchCoffees } from "../services/coffeeService";
import "../App";

const CoffeeList: React.FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch coffee data from the API
    const fetchCoffees = async () => {
      const response = await fetch("http://localhost:5000/api/coffee");
      const data = await response.json();
      setCoffees(data);
    };

    fetchCoffees();
  }, []);

  return (
    <div className="coffee-list">
      {coffees.map((coffee) => (
        <div key={coffee._id} className="coffee-item">
          <img src={coffee.image} alt={coffee.name} />
          <h3>{coffee.name}</h3>
          <p>{coffee.description}</p>
          <p>${coffee.price}</p>
          <button
            onClick={() =>
              addToCart({
                id: coffee._id, // Rename _id to id
                name: coffee.name,
                price: coffee.price,
                image: coffee.image,
                quantity: 1,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoffeeList;
