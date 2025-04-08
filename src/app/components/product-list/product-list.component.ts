import { Component } from '@angular/core';
import { products, Product } from 'src/app/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products : Product[] = products;

  share() : void {
    window.alert("¡El producto ha sido compartido!");
  }

  onNotify(str: string) {
    window.alert(str);
  }
}
