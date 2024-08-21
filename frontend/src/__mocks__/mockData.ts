import { Coffee } from "../models/Coffee";

const mockCoffee: Coffee = {
  _id: "1",
  name: "Latte",
  description: "A creamy coffee with steamed milk.",
  price: 4.5,
  image: "latte.jpg",
  ingredients: ["coffee", "milk"],
  customizationOptions: {
    milk: { price: 0.5, type: "paid", maxQuantity: 2 },
    sugar: { price: 0.2, type: "paid", maxQuantity: 5 },
  },
};

export {};
