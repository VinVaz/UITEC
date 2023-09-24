import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ProductElement {
  id: number;
  name: string;
  category: number;
  product_value: number;
  expires_at: number;
  inventary: number;
  is_perishible: boolean;
  created_at?: number;
  updated_at?: number;
  deleted_at?: number;
}

const ELEMENT_DATA: ProductElement[] = [
  { id: 1, name: 'Oil', category: 1, product_value: 1.50, expires_at: 532142341234123, inventary: 1, is_perishible: false },
  { id: 2, name: 'Rice', category: 1,product_value: 5.00, expires_at: 55646456245345, inventary: 5, is_perishible: true },
  { id: 3, name: 'Ice Cream', category: 1, product_value: 13.00, expires_at: 57857683562546, inventary: 5, is_perishible: true },
  { id: 4, name: 'Pasta', category: 1, product_value: 1.00, expires_at: 55687642543542435, inventary: 61, is_perishible: false },
  { id: 5, name: 'Stake', category: 1, product_value: 7.25, expires_at: 57875456234543542, inventary: 15, is_perishible: true },
  { id: 6, name: 'Lemon', category: 1, product_value: 0.25, expires_at: 54685235454355, inventary: 12, is_perishible: true },
  { id: 7, name: 'Tomato', category: 1, product_value: 0.56, expires_at: 567846735673675, inventary: 3, is_perishible: true },
  { id: 8, name: 'Bread', category: 1,product_value: 0.05, expires_at: 52354565756765756, inventary: 4, is_perishible: true },
  { id: 9, name: 'Chocolate', category: 1, product_value: 2.50, expires_at: 635637654746765, inventary: 7, is_perishible: true },
  { id: 10, name: 'Lamp', category: 1, product_value: 4.65, expires_at: 5654758763452236, inventary: 9, is_perishible: false }
];



@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getData() {
    return ELEMENT_DATA;
  }
}
