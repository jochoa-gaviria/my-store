import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private shoppingCart: Product[] = [];
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private total = 0;

  cart$ = this.cart.asObservable();

  addProduct(product: Product) : void {
    this.shoppingCart.push(product);
    this.cart.next(this.shoppingCart);
  }

  getShoppingCart() : Product[] {
    return this.shoppingCart;
  }

  getTotal() : number {
    this.total = this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
    return this.total;
  }
}
