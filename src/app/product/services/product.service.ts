import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs';
import { ProductResponse } from '../interfaces/product-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse[]> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<ProductResponse[]>(url);
  }

  getCategories(): Observable<Category[]> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get<Category[]>(url);
  }
}
