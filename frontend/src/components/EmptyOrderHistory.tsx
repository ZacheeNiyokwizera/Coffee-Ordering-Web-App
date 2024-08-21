import React from "react";
import { Link } from "react-router-dom";
import "../styles/EmptyOrderHistory.css";

const EmptyOrderHistory: React.FC = () => {
  return (
    <div className="empty-order-history">
      <h2>Your order history is empty</h2>
      <p>
        Click the button below to browse our coffee selection and place an
        order!
      </p>
      <Link to="/">
        <button>Browse Coffees</button>
      </Link>
    </div>
  );
};

export default EmptyOrderHistory;
