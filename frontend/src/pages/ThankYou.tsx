import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="thank-you-box p-4 border rounded bg-light shadow-sm text-center">
        <h1 className="mb-4">Thank You!</h1>
        <p className="mb-4">
          Your order has been received. We'll start processing it right away.
        </p>
        <div className="d-flex flex-column gap-3">
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Back to Home
          </button>
          <button
            onClick={() => navigate("/order-history")}
            className="btn btn-secondary"
          >
            View Your Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
