import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/products';
import { ShippingPrices } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = []

  constructor(private http: HttpClient) { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<ShippingPrices[]>('/assets/shipping.json')
  }
}
