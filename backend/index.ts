import express from "express";
import dotenv from "dotenv";
import coffeeRoutes from "./routes/coffeeRoutes";
import connectDB from "./config/database";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// For parsing application/json
app.use(express.json());

// Connect to the database
connectDB();

// Coffee routes
app.use("/api/coffee", coffeeRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
