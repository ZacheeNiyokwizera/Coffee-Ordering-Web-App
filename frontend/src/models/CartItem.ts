// Defines the structure of a coffee item in the cart
export interface CartItem {
  _id: string; // Unique identifier for the coffee
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[]; // Ingredients of the coffee
  customizationOptions: {
    [key: string]: {
      type: "free" | "paid"; // Type of customization (free or paid)
      price?: number; // Price per customization (if applicable)
      maxQuantity: number; // Maximum allowed quantity for customization
    };
  };
  quantity: number; // Quantity of the coffee item in the cart
  customizations: {
    [key: string]: number; // Customize this to match your customization keys
  };
  totalPrice: number; // Total price of the coffee after customization
}
