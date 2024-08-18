import { Request, Response } from "express";
import Coffee from "../models/Coffee";

export const addCoffee = async (req: Request, res: Response) => {
  try {
    const { name, description, price, image } = req.body;

    // Validate input
    if (!name || !description || !price || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new coffee entry
    const coffee = new Coffee({ name, description, price, image });
    await coffee.save();

    res.status(201).json(coffee);
  } catch (error: any) {
    console.error("Error adding coffee:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getCoffees = async (req: Request, res: Response) => {
  try {
    const coffees = await Coffee.find();
    res.status(200).json(coffees);
  } catch (error: any) {
    console.error("Error fetching coffees:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
