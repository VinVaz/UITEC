import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getProducts(params={}): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.apiUrl}/products`, {params});
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${productId}`);
  }

  editProduct(id: number, updatedProduct: Product): Observable<Product> {
    const editUrl = `${this.apiUrl}/products/${id}`;
    return this.http.put<Product>(editUrl, {updatedProduct, id});
  }
}

export interface Product {
  id: number;
  product_name: string;
  category_id: number;
  product_value: number;
  expiration_date: string;
  stock_quantity: number;
  perishable: boolean;
  created_at?: string; 
  updated_at?: string; 
}

interface APIResponse {
  products: Product[]
  total_count: number
}