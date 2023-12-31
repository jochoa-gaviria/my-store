import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    images: [],
    title: '',
    description: '',
    category: {
      id: '',
      name: ''
    },
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProductDetail = new EventEmitter<string>();


  imgLoaded(result: boolean) {
    console.log(`Log parent: img loaded ${result}`);
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

  onViewDetail() {
    this.showProductDetail.emit(this.product.id)
  }
}
