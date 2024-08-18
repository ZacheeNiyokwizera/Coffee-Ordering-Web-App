// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CoffeeList from "./components/CoffeeList";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage";
import "./App.css"; // Import your CSS file
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar /> {/* Add Navbar here */}
        <main>
          <Routes>
            <Route path="/" element={<CoffeeList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};
export default App;
