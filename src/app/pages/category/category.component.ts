import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  categoryId: string | null = null;
  limit = 10;
  offset = 0;

  constructor(
    private activedRoute : ActivatedRoute,
    private productService : ProductsService
  ) {}

  ngOnInit() : void {
    this.limit = 10;
    this.offset = 0;
    this.products = [];
    this.activedRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('id');
      this.loadMore();
    });
  }

  loadMore() {
    if (this.categoryId) {
      this.productService.getAllByCategory(this.categoryId as string, this.limit, this.offset)
      .subscribe(data => {
        this.offset += this.limit;
        this.products = this.products.concat(data);
      });
    }
  }
}
