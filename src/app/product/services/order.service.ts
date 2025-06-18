import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order.interface';
import { OrderResponse } from '../interfaces/order-response.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    const url = `${this.baseUrl}/orders`;
    return this.http.post<Order>(url, order);
  }

  getOrdersByCustomer(customerId: number): Observable<OrderResponse[]> {
    const url = `${this.baseUrl}/ordersByCustomer/${customerId}`;
    return this.http.get<OrderResponse[]>(url);
  }
}
