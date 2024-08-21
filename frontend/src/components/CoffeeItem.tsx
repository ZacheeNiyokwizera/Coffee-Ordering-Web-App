import React, { useState } from "react";
import { Coffee } from "../models/Coffee";
import { useCart } from "../context/CartContext";
import { calculateTotalPrice } from "../utils/calculateTotalPrice";
import {
  Card,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../styles/CoffeeItem.css";

interface CoffeeCustomizationProps {
  coffee: Coffee;
}

const CoffeeItem: React.FC<CoffeeCustomizationProps> = ({ coffee }) => {
  const [customizations, setCustomizations] = useState<{
    [key: string]: number;
  }>({});
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  const handleCustomizationChange = (option: string, change: number) => {
    setCustomizations((prev) => ({
      ...prev,
      [option]: Math.max(0, (prev[option] || 0) + change),
    }));
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    const finalPrice = calculateTotalPrice(coffee, customizations);
    const customizedCoffee = {
      ...coffee,
      customizations,
      totalPrice: finalPrice,
      quantity,
    };
    addToCart(customizedCoffee);
  };

  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="h-100">
        <Card.Img variant="top" src={coffee.image} alt={coffee.name} />
        <Card.Body>
          <Card.Title>{coffee.name}</Card.Title>
          <Card.Text>{coffee.description}</Card.Text>
          <Card.Text>
            <strong>Ingredients:</strong> {coffee.ingredients.join(", ")}
          </Card.Text>

          {/* Customization Options */}
          <div className="mb-3">
            <Row className="g-2">
              {/* Create a row for the first line of customization options */}
              {Object.keys(coffee.customizationOptions)
                .slice(0, 2)
                .map((option) => (
                  <Col xs={6} key={option}>
                    <div className="customization-item">
                      <span className="customization-label">{option}:</span>
                      <InputGroup size="sm" className="customization-controls">
                        <Button
                          variant="outline-danger"
                          onClick={() => handleCustomizationChange(option, -1)}
                          className="customization-button"
                        >
                          -
                        </Button>
                        <FormControl
                          value={customizations[option] || 0}
                          readOnly
                          className="text-center customization-input"
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleCustomizationChange(option, 1)}
                          className="customization-button"
                        >
                          +
                        </Button>
                      </InputGroup>
                    </div>
                  </Col>
                ))}
            </Row>
            <Row className="g-2">
              {/* Create a row for the second line of customization options */}
              {Object.keys(coffee.customizationOptions)
                .slice(2)
                .map((option) => (
                  <Col xs={6} key={option}>
                    <div className="customization-item">
                      <span className="customization-label">{option}:</span>
                      <InputGroup size="sm" className="customization-controls">
                        <Button
                          variant="outline-danger"
                          onClick={() => handleCustomizationChange(option, -1)}
                          className="customization-button"
                        >
                          -
                        </Button>
                        <FormControl
                          value={customizations[option] || 0}
                          readOnly
                          className="text-center customization-input"
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleCustomizationChange(option, 1)}
                          className="customization-button"
                        >
                          +
                        </Button>
                      </InputGroup>
                    </div>
                  </Col>
                ))}
              <Col xs={6}>
                <div className="customization-item">
                  <span className="customization-label">Quantity:</span>
                  <InputGroup size="sm" className="customization-controls">
                    <Button
                      variant="outline-danger"
                      onClick={() => handleQuantityChange(-1)}
                      className="customization-button"
                    >
                      -
                    </Button>
                    <FormControl
                      value={quantity}
                      readOnly
                      className="text-center customization-input"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleQuantityChange(1)}
                      className="customization-button"
                    >
                      +
                    </Button>
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleAddToCart} className="w-100">
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CoffeeItem;
