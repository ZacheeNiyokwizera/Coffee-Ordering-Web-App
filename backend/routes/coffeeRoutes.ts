import { Router } from "express";
import { addCoffee } from "../controllers/coffeeController";
import { getCoffees } from "../controllers/getCoffeeController";

const router = Router();

router.post("/add", addCoffee); // Endpoint to add coffee
router.get("/", getCoffees); // Endpoint to get all coffees

export default router;
