import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "../models/CartItem";

interface CartContextType {
  cart: CartItem[];
  addToCart: (coffee: CartItem) => void;
  removeFromCart: (coffeeId: string) => void;
  updateCartItemQuantity: (coffeeId: string, quantity: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  totalPrice: number;
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
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (coffee: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === coffee._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === coffee._id
            ? { ...item, quantity: item.quantity + coffee.quantity }
            : item
        );
      }
      return [...prevCart, coffee]; // Add coffee with quantity included
    });
  };

  const removeFromCart = (coffeeId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== coffeeId));
  };

  const updateCartItemQuantity = (coffeeId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === coffeeId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
