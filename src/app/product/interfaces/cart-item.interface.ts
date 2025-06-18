import { ProductResponse } from "./product-response.interface";

export interface CartItem {
  productId: number;
  quantity: number;  
  product?:ProductResponse
}
