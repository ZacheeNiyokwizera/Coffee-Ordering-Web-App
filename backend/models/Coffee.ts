import mongoose, { Document, Schema } from "mongoose";

interface CustomizationOption {
  type: "free" | "paid";
  maxQuantity: number;
  price?: number;
}

interface Coffee extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  customizationOptions: {
    [key: string]: CustomizationOption;
  };
}

const CoffeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  ingredients: { type: [String], required: true }, // Array of ingredients
  customizationOptions: {
    type: Map,
    of: {
      type: { type: String, enum: ["free", "paid"], required: true },
      maxQuantity: { type: Number, required: true },
      price: { type: Number }, // Optional, only if type is "paid"
    },
    required: true,
  },
});

const CoffeeModel = mongoose.model<Coffee>("Coffee", CoffeeSchema);

export default CoffeeModel;
