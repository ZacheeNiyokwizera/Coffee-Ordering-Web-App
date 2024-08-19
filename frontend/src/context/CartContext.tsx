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
      const existingItem = prevCart.find((item) => item.id === coffee.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...coffee, quantity: 1 }];
    });
  };

  const removeFromCart = (coffeeId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== coffeeId));
  };

  const updateCartItemQuantity = (coffeeId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === coffeeId ? { ...item, quantity } : item
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
