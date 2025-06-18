import { computed, Injectable, signal } from '@angular/core';
import { ProductResponse } from '../interfaces/product-response.interface';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item.interface';
import { HttpClient } from '@angular/common/http';
import { ProductRequest } from '../interfaces/product-request.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = environment.apiUrl;
  cartItems = signal<CartItem[]>(([]));

  constructor(private http: HttpClient) {
    const booksString = localStorage.getItem('cartItems');;
    if (booksString) {
      this.cartItems.set(JSON.parse(booksString));
    }
  }

  items = computed(() => {
    return this.cartItems();
  });

  cartItemCount = computed(() => {
    return this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0);
  });


  addToCart(product: ProductRequest): void {
    const itemIndex = this.cartItems().findIndex(item => item.productId === product.id);
    if (itemIndex > -1) {
      this.cartItems()[itemIndex].quantity += 1;
    } else {
      const newCartItem: CartItem = {
        productId: product.id,
        quantity: 1,
        product: product,
      };
      this.cartItems().push(newCartItem);
    }
    this.updateCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    const itemIndex = this.cartItems().findIndex(item => item.productId === productId);
    if (itemIndex > -1) {
      this.cartItems()[itemIndex].quantity = quantity;
      this.updateCart();
    }
  }

  removeFromCart(productId: number) {
    this.cartItems.update(value => value.filter(b => b.productId !== productId));
    this.updateCart();
  }


  clearCart(): void {
    this.cartItems.set([]);
    this.updateCart();
  }

  private updateCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems()));
    this.cartItems.set(JSON.parse(localStorage.getItem('cartItems') || '[]'));

  }


  public findProductById(productId: number): Observable<ProductResponse> {
    const url = `${this.baseUrl}/products/${productId}`;
    return this.http.get<ProductResponse>(url);
  }
}
