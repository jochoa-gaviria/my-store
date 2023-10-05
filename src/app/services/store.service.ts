import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private shoppingCart: Product[] = [];
  private total:number = 0;

  addProduct(product: Product) : void {
    this.shoppingCart.push(product);
  }

  getShoppingCart() : Product[] {
    return this.shoppingCart;
  }

  getTotal() : number {
    this.total = this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
    return this.total;
  }
}
