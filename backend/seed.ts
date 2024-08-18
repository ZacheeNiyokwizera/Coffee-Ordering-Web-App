import mongoose from "mongoose";
import Coffee from "./models/Coffee";
import connectDB from "./config/database";
import dotenv from "dotenv";

dotenv.config();

// Coffee data
const coffees = [
  {
    name: "Latte",
    description: "A creamy coffee made with espresso and steamed milk.",
    price: 4.5,
    image: "https://example.com/images/latte.jpg",
  },
  {
    name: "Macchiato",
    description: "An espresso coffee with a small amount of foamed milk.",
    price: 4.0,
    image: "https://example.com/images/macchiato.jpg",
  },
  {
    name: "Espresso",
    description:
      "A strong, full-bodied coffee made by forcing hot water through finely-ground coffee beans.",
    price: 3.0,
    image: "https://example.com/images/espresso.jpg",
  },
  {
    name: "Americano",
    description:
      "A diluted espresso, with hot water added to create a milder flavor.",
    price: 3.5,
    image: "https://example.com/images/americano.jpg",
  },
  {
    name: "Cappuccino",
    description:
      "A coffee drink made with equal parts espresso, steamed milk, and milk foam.",
    price: 4.5,
    image: "https://example.com/images/cappuccino.jpg",
  },
];

const seedCoffees = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    await Coffee.deleteMany(); // Clear existing data
    await Coffee.insertMany(coffees); // Insert new data
    console.log("Database seeded with coffee data!");
    mongoose.connection.close(); // Close the connection
  } catch (error: any) {
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
};

seedCoffees();
