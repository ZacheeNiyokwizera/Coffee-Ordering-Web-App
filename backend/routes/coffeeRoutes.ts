import { Router } from "express";
import { addCoffee, getCoffees } from "../controllers/coffeeController";

const router = Router();

router.post("/add", addCoffee); // Endpoint to add coffee
router.get("/", getCoffees); // Endpoint to get all coffees

export default router;
