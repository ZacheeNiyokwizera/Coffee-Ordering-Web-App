import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ThankYou.css";
const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h1>Thank You!</h1>
        <p>
          Your order has been received. We'll start processing it right away.
        </p>
        <button onClick={() => navigate("/")} className="home-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
