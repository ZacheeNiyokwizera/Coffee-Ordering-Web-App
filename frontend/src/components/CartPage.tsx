import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import "../styles/CartPage.css";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, updateCartItemQuantity, removeFromCart } = useCart();

  // Calculate the total price correctly by summing up the total price of each item, considering the quantity
  const totalPrice = cart.reduce((acc, item) => {
    const customizationCosts = Object.entries(item.customizations)
      .filter(([_, quantity]) => quantity > 0)
      .reduce(
        (total, [key, quantity]) =>
          total + (item.customizationOptions[key].price || 0) * quantity,
        0
      );

    const itemTotal = (item.price + customizationCosts) * item.quantity;
    return acc + itemTotal;
  }, 0);

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Your Cart</h1>

      {cart.map((item) => {
        const customizationCosts = Object.entries(item.customizations)
          .filter(([_, value]) => value > 0)
          .map(([key, value]) => ({
            flavor: key,
            quantity: value,
            price: item.customizationOptions[key].price || 0,
            totalCost: value * (item.customizationOptions[key].price || 0),
          }));

        const itemTotalPrice =
          item.price +
          customizationCosts.reduce(
            (acc, customization) => acc + customization.totalCost,
            0
          );

        return (
          <Card key={item._id} className="mb-3">
            <Row noGutters>
              <Col xs={12} md={4}>
                <Card.Img variant="top" src={item.image} alt={item.name} />
              </Col>
              <Col xs={12} md={8}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>
                    <strong>Customizations:</strong>
                    {customizationCosts.map((customization) => (
                      <div key={customization.flavor}>
                        {customization.flavor}: {customization.quantity} × $
                        {customization.price.toFixed(2)} = $
                        {customization.totalCost.toFixed(2)}
                      </div>
                    ))}
                  </Card.Text>
                  <Card.Text>
                    <div>Base Price: ${item.price.toFixed(2)}</div>
                    <div>
                      Customizations: $
                      {customizationCosts
                        .reduce(
                          (acc, customization) => acc + customization.totalCost,
                          0
                        )
                        .toFixed(2)}
                    </div>
                    <div>
                      <strong>Total Price: ${itemTotalPrice.toFixed(2)}</strong>
                    </div>
                  </Card.Text>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <div className="d-flex align-items-center">
                        <strong>Quantity:</strong>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartItemQuantity(
                              item._id,
                              Number(e.target.value)
                            )
                          }
                          min="1"
                          className="form-control ms-2 w-auto"
                        />
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="mt-2">
                        <strong>
                          Total: ${(itemTotalPrice * item.quantity).toFixed(2)}
                        </strong>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item._id)}
                        className="mt-2"
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}

      <div className="cart-summary mt-4">
        <h3>Total for All Items: ${totalPrice.toFixed(2)}</h3>
        <Button
          variant="primary"
          onClick={handleProceedToCheckout}
          className="w-100"
        >
          Proceed to Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartPage;
