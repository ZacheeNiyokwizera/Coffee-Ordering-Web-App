import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CoffeeList from "./components/CoffeeList";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage";
import "./App.css";
import Navbar from "./components/Navbar";
import { useCoffeeData } from "./hooks/useCoffeeData";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const { coffees } = useCoffeeData();
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoffeeList coffees={coffees} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};
export default App;
