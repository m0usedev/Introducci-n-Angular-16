import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product } from 'src/app/products';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public items: Product[] = this.carS.getItems();

  public checkoutForm = this.fb.group({
    name: '',
    address: '',
  });

  constructor(
    private carS: CartService,
    private fb: FormBuilder,
  ) { }

  onSubmit(): void {
    this.items = this.carS.clearCart();
    console.warn('Tu orden ha sido enviada', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
