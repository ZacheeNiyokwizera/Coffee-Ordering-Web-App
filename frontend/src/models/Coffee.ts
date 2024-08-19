export interface Coffee {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  customizationOptions: {
    [key: string]: {
      type: "free" | "paid";
      price?: number;
      maxQuantity: number;
    };
  };
}
