import mongoose, { Document, Schema } from "mongoose";

// Define the structure of customization options
interface CustomizationOption {
  type: "free" | "paid"; // Type can be either "free" or "paid"
  maxQuantity: number; // Maximum allowed quantity
  price?: number; // Optional price for paid options
}

// Define the structure of a Coffee document in the database
interface Coffee extends Document {
  name: string; // Name of the coffee
  description: string; // Description of the coffee
  price: number; // Price of the coffee
  image: string; // Image URL for the coffee
  ingredients: string[]; // List of ingredients
  customizationOptions: {
    [key: string]: CustomizationOption; // Customization options with a dynamic key
  };
}

// Schema for the Coffee model
const CoffeeSchema: Schema = new Schema({
  name: { type: String, required: true }, // Coffee name is required
  description: { type: String, required: true }, // Coffee description is required
  price: { type: Number, required: true }, // Coffee price is required
  image: { type: String, required: true }, // Coffee image URL is required
  ingredients: { type: [String], required: true }, // Array of ingredients, all required
  customizationOptions: {
    type: Map, // Use Map to handle dynamic keys for customization options
    of: {
      type: { type: String, enum: ["free", "paid"], required: true }, // Customization type can be "free" or "paid"
      maxQuantity: { type: Number, required: true }, // Maximum quantity for customization is required
      price: { type: Number }, // Optional price, applicable only if type is "paid"
    },
    required: true, // Customization options are required
  },
});

// Create the Coffee model using the schema
const CoffeeModel = mongoose.model<Coffee>("Coffee", CoffeeSchema);

export default CoffeeModel;
