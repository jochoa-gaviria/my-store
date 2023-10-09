import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: Product[] = [];
  limit = 10;
  offset = 0;
  productId: string | null = null;

  constructor(
    private productService: ProductsService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMore();
    this.activedRoute.queryParamMap
    .subscribe(params => {
      this.productId = params.get('product');
    })
  }


  loadMore() {
    this.productService.getAll(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}
