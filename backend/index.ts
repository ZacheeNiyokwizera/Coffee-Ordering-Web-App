import express from "express";
import dotenv from "dotenv";
import coffeeRoutes from "./routes/coffeeRoutes";
import connectDB from "./config/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // For parsing application/json

// Connect to the database
connectDB();

// Use the coffee routes
app.use("/api/coffee", coffeeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
