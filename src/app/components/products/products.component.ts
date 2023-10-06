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
    private productService: ProductsService
  ) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }


  ngOnInit(): void {
   this.loadMore();
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
    .subscribe(data => {
      this.productChoosen = data;
      this.toggleProductDetail();
    });
  }

  loadMore() {
    this.productService.getAllByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}
