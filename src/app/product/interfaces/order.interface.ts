import { CartItem } from './cart-item.interface';

export interface Order {       
    customerId: number;
    date: string;
    cartItems: CartItem[];
    total: number;
  }
  