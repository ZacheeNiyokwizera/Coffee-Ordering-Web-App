import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test_db";

beforeAll(async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
});

afterAll(async () => {
  try {
    const connection = mongoose.connection;
    if (connection.db) {
      await connection.db.dropDatabase();
    }
    await connection.close();
  } catch (error: any) {
    console.error("Error closing MongoDB connection:", error.message);
  }
});
