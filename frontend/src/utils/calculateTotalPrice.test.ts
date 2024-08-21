import { calculateTotalPrice } from "./calculateTotalPrice";
import { Coffee } from "../models/Coffee";

// Mock data with updated structure
const mockCoffee: Coffee = {
  _id: "1",
  name: "Espresso",
  description: "A strong coffee.",
  price: 3.0,
  image: "espresso.jpg",
  ingredients: ["coffee"],
  customizationOptions: {
    milk: { type: "paid", price: 0.5, maxQuantity: 3 },
    sugar: { type: "paid", price: 0.2, maxQuantity: 5 },
  },
};

describe("calculateTotalPrice", () => {
  test("calculates the total price correctly with customizations", () => {
    const customizations = {
      milk: 2, // 2 units of milk customization
      sugar: 1, // 1 unit of sugar customization
    };

    // Calculate the total price with given customizations
    const result = calculateTotalPrice(mockCoffee, customizations);

    // Verify the result matches the expected total price
    expect(result).toBe(3.0 + 0.5 * 2 + 0.2 * 1);
  });

  test("calculates the total price correctly without customizations", () => {
    const customizations = {}; // No customizations

    // Calculate the total price without customizations
    const result = calculateTotalPrice(mockCoffee, customizations);

    // Verify the result is just the base price of the coffee
    expect(result).toBe(mockCoffee.price);
  });

  test("calculates the total price with zero customizations", () => {
    const customizations = {
      milk: 0, // 0 units of milk customization
      sugar: 0, // 0 units of sugar customization
    };

    // Calculate the total price with zero customizations
    const result = calculateTotalPrice(mockCoffee, customizations);

    // Verify the result is just the base price of the coffee
    expect(result).toBe(mockCoffee.price);
  });

  test("handles customizations with no price defined", () => {
    const customizations = {
      milk: 3, // Milk price is defined
      sugar: 1, // Sugar price is defined
    };

    // Calculate the total price with defined and non-defined customizations
    const result = calculateTotalPrice(mockCoffee, customizations);

    // Verify the result includes price for defined customizations
    expect(result).toBe(mockCoffee.price + 0.5 * 3 + 0.2 * 1);
  });

  test("handles customizations with undefined options", () => {
    const customizations = {
      chocolate: 2, // Chocolate is not defined in customizationOptions
    };

    // Calculate the total price with an undefined customization
    const result = calculateTotalPrice(mockCoffee, customizations);

    // Verify the result is just the base price of the coffee
    expect(result).toBe(mockCoffee.price);
  });
});
