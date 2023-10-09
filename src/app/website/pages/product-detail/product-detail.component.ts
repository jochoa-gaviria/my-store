import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from 'src/app/interfaces/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product: Product | null = null;

  constructor(
    private activedRoute: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap
    .pipe(
      switchMap((params) => {
        this.productId = params.get('id');
        if (this.productId) {
          return this.productService.getOne(this.productId);
        }
        return [null];
      })
    )
    .subscribe((data) => {
      this.product = data;
    });
  }


  goToBack() : void {
    this.location.back();
  }
}
