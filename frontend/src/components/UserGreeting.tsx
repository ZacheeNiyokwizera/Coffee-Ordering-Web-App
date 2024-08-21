import React from "react";
import useUserId from "../hooks/useUserId";
import useOrderHistory from "../hooks/useOrderHistory";

const UserGreeting: React.FC = () => {
  const userId = useUserId();
  const orders = useOrderHistory(userId);

  return (
    <div>
      <h1>Welcome Back!</h1>
      <p>Your Order History:</p>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.date}: {order.items.join(", ")} - Total: ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserGreeting;
