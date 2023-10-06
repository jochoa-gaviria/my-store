import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  total = 0;
  shoppingCart : Product[] = [];
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21)

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }


  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddedProductToCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();

  }
}
