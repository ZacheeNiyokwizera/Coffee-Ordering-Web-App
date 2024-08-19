import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Coffee } from "../models/Coffee";
import { fetchCoffees } from "../services/coffeeService";
import "../App";
import CoffeeItem from "./CoffeeItem";

interface CoffeeListProps {
  coffees: Coffee[];
}

const CoffeeList: React.FC<CoffeeListProps> = ({ coffees }) => {
  return (
    <div className="coffee-container">
      {coffees.map((coffee) => (
        <CoffeeItem key={coffee._id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeList;
