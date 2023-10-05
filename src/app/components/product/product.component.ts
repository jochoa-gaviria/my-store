import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    name: ''
  };


  imgLoaded(result: Boolean) {
    console.log(`Log parent: img loaded ${result}`);
  }
}
