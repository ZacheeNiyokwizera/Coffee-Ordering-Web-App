import { Coffee } from "../models/Coffee";
import { CartItem } from "../models/CartItem";

/**
 * Calculates the total price of a coffee item, including customizations.
 *
 * @param coffee - The coffee item for which the price is being calculated.
 * @param customizations - A record of customization options and their quantities.
 * @returns The total price of the coffee item after applying customizations.
 */

export const calculateTotalPrice = (
  coffee: Coffee,
  customizations: { [key: string]: number }
): number => {
  // Initialize totalPrice with the base price of the coffee
  let totalPrice = coffee.price;

  // Loop through each customization option and add its price if applicable
  for (const [option, quantity] of Object.entries(customizations)) {
    // Retrieve the customization details from the coffee's customization options
    const customization = coffee.customizationOptions[option];

    // Check if the customization exists, is of type "paid", and has a positive quantity
    if (customization && customization.type === "paid" && quantity > 0) {
      // Add the cost of the customization to the total price
      totalPrice += (customization.price || 0) * quantity;
    }
  }

  return totalPrice;
};
