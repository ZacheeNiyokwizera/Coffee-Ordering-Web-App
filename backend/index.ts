import express from "express";
import dotenv from "dotenv";
import coffeeRoutes from "./routes/coffeeRoutes";
import connectDB from "./config/database";
import cors from "cors";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Use port from environment or default to 5000

// Set up CORS to allow requests from the frontend application
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Connect to the MongoDB database
connectDB();

// Use routes defined in coffeeRoutes for requests to /api/coffee
app.use("/api/coffee", coffeeRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log server start message
});
