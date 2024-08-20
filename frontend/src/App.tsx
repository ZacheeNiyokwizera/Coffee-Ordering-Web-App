import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CoffeeList from "./components/CoffeeList";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage";
import "./App.css";
import Navbar from "./components/Navbar";
import { useCoffeeData } from "./hooks/useCoffeeData";
import Footer from "./components/Footer";
import UserGreeting from "./components/UserGreeting";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import OrderHistory from "./pages/OrderHistory";

const App: React.FC = () => {
  const { coffees } = useCoffeeData();
  return (
    <CartProvider>
      <Router>
        <Navbar />
        {/* <UserGreeting /> */}
        <Routes>
          <Route path="/" element={<CoffeeList coffees={coffees} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};
export default App;
