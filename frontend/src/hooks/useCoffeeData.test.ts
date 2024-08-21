// useCoffeeData.test.ts

import { renderHook, act } from "@testing-library/react-hooks";
import { useCoffeeData } from "../hooks/useCoffeeData";
import { fetchCoffees } from "../services/coffeeService";
import { Coffee } from "../models/Coffee";

// Mock the fetchCoffees function
jest.mock("../services/coffeeService");

describe("useCoffeeData", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should initially set loading to true", () => {
    (fetchCoffees as jest.Mock).mockResolvedValue([]);

    const { result } = renderHook(() => useCoffeeData());

    expect(result.current.loading).toBe(true);
    expect(result.current.coffees).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  test("should set coffees and loading to false when data is successfully fetched", async () => {
    const mockCoffees: Coffee[] = [
      {
        _id: "1",
        name: "Espresso",
        description: "Strong and bold",
        price: 2.99,
        image: "espresso.jpg",
        ingredients: ["coffee"],
        customizationOptions: {},
      },
    ];

    (fetchCoffees as jest.Mock).mockResolvedValue(mockCoffees);

    const { result, waitForNextUpdate } = renderHook(() => useCoffeeData());

    // Wait for useEffect to complete
    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.coffees).toEqual(mockCoffees);
    expect(result.current.error).toBeNull();
  });

  test("should set error and loading to false when there is an error", async () => {
    const errorMessage = "Failed to fetch";

    (fetchCoffees as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useCoffeeData());

    // Wait for useEffect to complete
    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.coffees).toEqual([]);
    expect(result.current.error).toBe(errorMessage);
  });
});
