import { Component } from '@angular/core';

import { Product } from 'src/app/products';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public items: Product[] = this.carS.getItems();

  constructor(private carS: CartService) { }

}
