import { Request, Response } from "express";
import Coffee from "../models/Coffee";

// Fetch all coffees from the database
export const getCoffees = async (req: Request, res: Response) => {
  try {
    // Retrieve all coffee entries
    const coffees = await Coffee.find();

    // Respond with the list of coffees
    res.status(200).json(coffees);
  } catch (error: any) {
    // Log any errors and send a generic server error message
    console.error("Error fetching coffees:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
