import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "../models/CartItem";

// Define the shape of the context value
interface CartContextType {
  cart: CartItem[]; // Current list of items in the cart
  addToCart: (coffee: CartItem) => void; // Function to add an item to the cart
  removeFromCart: (coffeeId: string) => void; // Function to remove an item from the cart
  updateCartItemQuantity: (coffeeId: string, quantity: number) => void; // Function to update item quantity in the cart
  clearCart: () => void; // Function to clear all items from the cart
  totalQuantity: number; // Total number of items in the cart
  totalPrice: number; // Total price of items in the cart
}

// Create the Cart context with an undefined initial value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider"); // Ensure the hook is used within the CartProvider
  }
  return context;
};

// CartProvider component to provide the Cart context value
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]); // State to manage the cart items

  // Function to add an item to the cart
  const addToCart = (coffee: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === coffee._id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map((item) =>
          item._id === coffee._id
            ? { ...item, quantity: item.quantity + coffee.quantity }
            : item
        );
      }
      // Add new item to the cart
      return [...prevCart, coffee];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (coffeeId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== coffeeId));
  };

  // Function to update the quantity of a cart item
  const updateCartItemQuantity = (coffeeId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === coffeeId ? { ...item, quantity } : item
      )
    );
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Provide the Cart context value to child components
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
