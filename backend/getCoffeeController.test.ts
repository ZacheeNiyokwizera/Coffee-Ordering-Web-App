import request from "supertest";
import express from "express";
import mongoose from "mongoose";

import { getCoffees } from "./controllers/getCoffeeController";
import Coffee from "./models/Coffee";
import { addCoffee } from "./controllers/coffeeController";

// Set up Express app for testing
const app = express();
app.use(express.json());
app.get("/api/coffees", getCoffees);

describe("getCoffees Controller", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost/test_db", {});
  });

  afterAll(async () => {
    const connection = mongoose.connection;
    if (connection.db) {
      await connection.db.dropDatabase();
    }
    await connection.close();
  });

  test("should return a list of coffees and status 200", async () => {
    // Seed the database with a mock coffee
    await Coffee.create({
      name: "Latte",
      description: "Creamy coffee",
      price: 4.5,
      image: "latte.jpg",
      ingredients: ["coffee", "milk"],
      customizationOptions: {},
    });

    const response = await request(app).get("/api/coffees");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).toHaveProperty("name", "Latte");
  });

  test("should return status 500 if there is a server error", async () => {
    jest.spyOn(Coffee, "find").mockRejectedValue(new Error("Server error"));

    const response = await request(app).get("/api/coffees");

    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Server error");
  });
});
