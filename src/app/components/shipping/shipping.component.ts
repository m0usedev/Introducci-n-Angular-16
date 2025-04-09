import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/services/cart/cart.service';
import { ShippingPrices } from 'src/assets/interfaces';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingPriceses!: Observable<ShippingPrices[]>;

  constructor(private cartS: CartService) { }

  ngOnInit(): void {
    this.shippingPriceses = this.cartS.getShippingPrices();
  }

}
