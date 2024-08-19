import { Coffee } from "../models/Coffee";
import { CartItem } from "../models/CartItem";

export const calculateTotalPrice = (
  coffee: Coffee,
  customizations: { [key: string]: number }
): number => {
  let totalPrice = coffee.price;

  // Loop through each customization option and add its price
  for (const [option, quantity] of Object.entries(customizations)) {
    const customization = coffee.customizationOptions[option];
    if (customization && customization.type === "paid" && quantity > 0) {
      totalPrice += customization.price! * quantity;
    }
  }

  return totalPrice;
};
