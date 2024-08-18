import React, { createContext, useContext, useState, ReactNode } from "react";
import { Coffee } from "../models/Coffee";

interface CartContextType {
  cart: Coffee[];
  addToCart: (coffee: Coffee) => void;
  removeFromCart: (coffeeId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Coffee[]>([]);

  const addToCart = (coffee: Coffee) => {
    setCart((prevCart) => [...prevCart, coffee]);
  };

  const removeFromCart = (coffeeId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== coffeeId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, coffee) => total + coffee.price, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
