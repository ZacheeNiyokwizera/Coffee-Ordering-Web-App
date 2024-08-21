export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  customizations: { [key: string]: number };
  totalPrice: number;
  image: string;
}

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
