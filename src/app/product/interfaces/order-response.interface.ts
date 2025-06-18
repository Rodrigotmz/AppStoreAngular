export interface OrderResponse {
    id: number;
    customerId: number;
    date: string; 
    cartItems: {
      productId: number;
      quantity: number;
      productName: string;
    }[];
    total?: number; // Optional property
  }
  