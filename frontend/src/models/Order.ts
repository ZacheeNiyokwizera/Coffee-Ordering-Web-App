// Defines the structure of an item in an order

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  customizations: { [key: string]: number };
  totalPrice: number;
  image: string;
}

// Defines the structure of an order
export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  date: string;
  customer: {
    name: string;
    email: string;
    address: string;
  };
}
