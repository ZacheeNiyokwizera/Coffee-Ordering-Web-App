import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoffeeList from "./components/CoffeeList";
import { CartProvider } from "./context/CartContext";
import CartPage from "./components/CartPage";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import { useCoffeeData } from "./hooks/useCoffeeData";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import OrderHistory from "./pages/OrderHistory";
import "./App.css";

const App: React.FC = () => {
  const { coffees, loading, error } = useCoffeeData();
  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavigationBar />
          <div className="flex-grow-1">
            <Routes>
              <Route
                path="/"
                element={
                  <CoffeeList
                    coffees={coffees}
                    loading={loading}
                    error={error}
                  />
                }
              />{" "}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
