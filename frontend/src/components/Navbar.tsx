import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { totalQuantity } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Coffee Shop
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i>
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const Navbar: React.FC = () => {
//   const { cart } = useCart();

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/cart" className="cart-icon">
//         <i className="fas fa-shopping-cart"></i>
//         {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;
