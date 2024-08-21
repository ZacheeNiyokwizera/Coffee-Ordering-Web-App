import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserId from "../hooks/useUserId";
import { Order } from "../models/Order";
import "../styles/OrderHistory.css";
import EmptyOrderHistory from "../components/EmptyOrderHistory";
import { Container, Row, Col, Card } from "react-bootstrap";

const OrderHistory: React.FC = () => {
  const userId = useUserId();
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve orders from localStorage using userId
    const savedOrders = JSON.parse(localStorage.getItem(userId) || "[]");
    setOrders(savedOrders);
  }, [userId]);

  if (orders.length === 0) {
    return <EmptyOrderHistory />; // Show empty state if no orders are found
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Order History</h1>

      {orders.map((order) => (
        <Card className="mb-4" key={order.id}>
          <Card.Body>
            <Card.Title>Order ID: {order.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Date: {new Date(order.date).toLocaleDateString()}
            </Card.Subtitle>
            <Card.Text>Total: ${order.total.toFixed(2)}</Card.Text>
            <Card.Subtitle className="mt-4 mb-2">Items:</Card.Subtitle>
            <div className="order-items-list">
              {order.items.map((item, index) => (
                <Row className="align-items-center mb-3 border" key={index}>
                  <Col
                    xs={12}
                    md={4}
                    lg={3}
                    className="d-flex justify-content-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="order-item-image img-fluid"
                      style={{ maxWidth: "100%", height: "auto" }} // Ensure image fits well
                    />
                  </Col>
                  <Col xs={12} md={8} lg={9} className="d-flex flex-column">
                    <div className="order-item-info">
                      <p>
                        <strong>{item.name}</strong>
                      </p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                      <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
            <Card.Subtitle className="mt-4 mb-2">
              Shipping Details:
            </Card.Subtitle>
            <Card.Text>
              <strong>Name:</strong> {order.customer.name}
              <br />
              <strong>Email:</strong> {order.customer.email}
              <br />
              <strong>Address:</strong> {order.customer.address}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default OrderHistory;
