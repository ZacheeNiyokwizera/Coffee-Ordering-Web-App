import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart" className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </Link>
    </nav>
  );
};

export default Navbar;
