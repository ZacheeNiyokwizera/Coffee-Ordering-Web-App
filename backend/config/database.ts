import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log("MongoDB connected");
  } catch (err: any) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
