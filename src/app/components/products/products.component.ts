import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  total = 0;
  shoppingCart : Product[] = [];
  @Input() products: Product[] = [];
  @Output() loadMore = new EventEmitter<boolean>();
  showProductDetail = false;
  limit = 10;
  offset = 0;

  productChoosen: Product = {
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

  constructor(
    private storeService: StoreService,
    private productService: ProductsService,
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  onAddedProductToCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowProductDetail(id: string) {
    this.productService.getOne(id)
    .subscribe({
      error: (err) => console.log({err}),
      next: (data) => {
        this.productChoosen = data;
        this.toggleProductDetail();
      }
    });
  }

  onClickloadMore() {
    this.loadMore.emit(true);
  }

  //ZIP => use for concat more than one request, and use only one subscribe. The result is into an arr
  //SwitchMap => use for request that depent on in other. Concat the response in only one.
}
