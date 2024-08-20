import React from "react";
import { useCart } from "../context/CartContext";
import CoffeeItem from "./CoffeeItem";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage: React.FC = () => {
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

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Click the button below to add some delicious coffee to your cart!</p>
        <Link to="/">
          <button className="add-coffee-button">Browse Coffees</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">Your Cart</div>
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
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-description">{item.description}</div>
                <div className="cart-item-customizations">
                  <strong>Customizations:</strong>
                  {customizationCosts.map((customization) => (
                    <div key={customization.flavor}>
                      {customization.flavor}: {customization.quantity} × $
                      {customization.price.toFixed(2)} = $
                      {customization.totalCost.toFixed(2)}
                    </div>
                  ))}
                </div>
                <div className="cart-item-pricing">
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
                </div>
                <div className="cart-item-quantity">
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItemQuantity(item._id, Number(e.target.value))
                    }
                    min="1"
                  />
                </div>
                <div className="cart-item-total">
                  <strong>
                    Total: ${(itemTotalPrice * item.quantity).toFixed(2)}
                  </strong>
                </div>
              </div>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          );
        })}
        <div className="cart-summary">
          <h3>Total for All Items: ${totalPrice.toFixed(2)}</h3>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
