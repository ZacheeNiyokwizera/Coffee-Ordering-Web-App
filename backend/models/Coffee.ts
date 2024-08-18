import mongoose, { Document, Schema } from "mongoose";

interface Coffee extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
}

const CoffeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const CoffeeModel = mongoose.model<Coffee>("Coffee", CoffeeSchema);

export default CoffeeModel;
