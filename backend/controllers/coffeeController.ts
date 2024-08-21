import { Request, Response } from "express";
import Coffee from "../models/Coffee";

// adding a coffee
export const addCoffee = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      image,
      ingredients,
      customizationOptions,
    } = req.body;

    // Validate input
    if (
      !name ||
      !description ||
      !price ||
      !image ||
      !ingredients ||
      !customizationOptions
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate customization options
    for (const [key, option] of Object.entries(customizationOptions)) {
      const customizationOption = option as {
        type: "free" | "paid";
        maxQuantity: number;
        price?: number;
      };

      if (customizationOption.type === "paid" && !customizationOption.price) {
        return res.status(400).json({
          message: `Price is required for paid customization option: ${key}`,
        });
      }
    }

    // Create new coffee entry
    const coffee = new Coffee({
      name,
      description,
      price,
      image,
      ingredients,
      customizationOptions,
    });
    await coffee.save();

    res.status(201).json(coffee);
  } catch (error: any) {
    console.error("Error adding coffee:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
